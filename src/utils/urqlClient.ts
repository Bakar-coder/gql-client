import { dedupExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import { multipartFetchExchange as fetchExchange } from '@urql/exchange-multipart-fetch';
import { betterUpdateQry } from './updateQuery';
import {
  LoginMutation,
  LogoutMutation,
  RegisterMutation,
  UserDocument,
  UserQuery,
} from '../generated/graphql';
import { API_URL } from '../../_constants';

export const createUrqlClient = (ssrExchange: any) => ({
  url: API_URL as string,
  fetchOptions: { credentials: 'include' as const },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          register: (result, _, cache) => {
            betterUpdateQry<RegisterMutation, UserQuery>(
              cache,
              { query: UserDocument },
              result,
              ({ register }, query) =>
                register.errors
                  ? query
                  : { user: { user: register.user, cart: register.cart } }
            );
          },

          login: (result, _, cache) => {
            betterUpdateQry<LoginMutation, UserQuery>(
              cache,
              { query: UserDocument },
              result,
              ({ login }, query) =>
                login.errors
                  ? query
                  : { user: { user: login.user, cart: login.cart } }
            );
          },

          logout: (result, _, cache) => {
            betterUpdateQry<LogoutMutation, UserQuery>(
              cache,
              { query: UserDocument },
              result,
              () => ({ user: null })
            );
          },
        },
      },
    }),
    fetchExchange,
    ssrExchange,
  ],
});
