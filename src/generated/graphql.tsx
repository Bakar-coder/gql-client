import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  getToken: BraintreeTokenResponseType;
  processPayment: BraintreeTransactionResponseType;
  product: ProductResponseType;
  products: Array<Product>;
  categories: Array<Category>;
  user?: Maybe<UserType>;
  users: Array<User>;
};


export type QueryProcessPaymentArgs = {
  paymentMethodNonce: Scalars['String'];
  amount: Scalars['String'];
};


export type QueryProductArgs = {
  id: Scalars['Int'];
};

export type BraintreeTokenResponseType = {
  __typename?: 'BraintreeTokenResponseType';
  success: Scalars['Boolean'];
  clientToken: Scalars['String'];
};

export type BraintreeTransactionResponseType = {
  __typename?: 'BraintreeTransactionResponseType';
  errors: Scalars['String'];
  success: Scalars['Boolean'];
  transaction: Scalars['String'];
};

export type ProductResponseType = {
  __typename?: 'ProductResponseType';
  errors?: Maybe<Array<ErrorField>>;
  product?: Maybe<Product>;
};

export type ErrorField = {
  __typename?: 'ErrorField';
  field?: Maybe<Scalars['String']>;
  msg: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Float'];
  userId: Scalars['Float'];
  categoryId: Scalars['Float'];
  title: Scalars['String'];
  slug: Scalars['String'];
  stock: Scalars['Float'];
  price: Scalars['Float'];
  description: Scalars['String'];
  discount: Scalars['Float'];
  discountExpiration: Scalars['DateTime'];
  tags: Scalars['String'];
  images: Array<Scalars['String']>;
  featured: Scalars['Boolean'];
  published: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type Category = {
  __typename?: 'Category';
  id: Scalars['Float'];
  category: Scalars['String'];
  subCategory?: Maybe<Scalars['String']>;
  subCategory2?: Maybe<Scalars['String']>;
};

export type UserType = {
  __typename?: 'UserType';
  user?: Maybe<User>;
  cart?: Maybe<Array<CartItem>>;
  errors?: Maybe<Array<ErrorField>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  avatar: Scalars['String'];
  admin?: Maybe<Scalars['Boolean']>;
  seller?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CartItem = {
  __typename?: 'CartItem';
  id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  images: Array<Scalars['String']>;
  quantity: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addProduct: ProductResponseType;
  updateProduct: ProductResponseType;
  deleteProduct: Scalars['Boolean'];
  addToCart: Array<CartItem>;
  decrementCartItem: Array<CartItem>;
  removeCartItem: Scalars['Boolean'];
  clearCart: Scalars['Boolean'];
  register: UserType;
  login: UserType;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: Scalars['Boolean'];
};


export type MutationAddProductArgs = {
  opts: ProductInputType;
};


export type MutationUpdateProductArgs = {
  opts: ProductUpdateInputType;
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int'];
};


export type MutationAddToCartArgs = {
  quantity: Scalars['Float'];
  id: Scalars['Float'];
};


export type MutationDecrementCartItemArgs = {
  quantity: Scalars['Float'];
  id: Scalars['Float'];
};


export type MutationRemoveCartItemArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  opts: UserRegisterInputType;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  token: Scalars['String'];
  newPassword: Scalars['String'];
};

export type ProductInputType = {
  title: Scalars['String'];
  slug: Scalars['String'];
  stock: Scalars['Int'];
  price: Scalars['Float'];
  category: Scalars['String'];
  discount?: Maybe<Scalars['Float']>;
  discountExpiration?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  tags?: Maybe<Scalars['String']>;
  images: Array<Scalars['Upload']>;
  featured?: Maybe<Scalars['Boolean']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type ProductUpdateInputType = {
  id: Scalars['Int'];
  title: Scalars['String'];
  slug: Scalars['String'];
  stock: Scalars['Int'];
  price: Scalars['Float'];
  category: Scalars['String'];
  discount?: Maybe<Scalars['Float']>;
  discountExpiration?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  tags?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['Upload']>>;
  featured?: Maybe<Scalars['Boolean']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type UserRegisterInputType = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  password2: Scalars['String'];
  seller?: Maybe<Scalars['Boolean']>;
  admin?: Maybe<Scalars['Boolean']>;
};

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'firstName' | 'lastName' | 'username' | 'email' | 'avatar' | 'admin' | 'seller' | 'verified' | 'createdAt'>
);

export type CartFragment = (
  { __typename?: 'CartItem' }
  & Pick<CartItem, 'title' | 'description' | 'price' | 'images' | 'quantity'>
);

export type ErrorFragment = (
  { __typename?: 'ErrorField' }
  & Pick<ErrorField, 'field' | 'msg'>
);

export type UserResponseFragment = (
  { __typename?: 'UserType' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )>, cart?: Maybe<Array<(
    { __typename?: 'CartItem' }
    & CartFragment
  )>>, errors?: Maybe<Array<(
    { __typename?: 'ErrorField' }
    & ErrorFragment
  )>> }
);

export type RegisterMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  password2: Scalars['String'];
  admin?: Maybe<Scalars['Boolean']>;
  seller?: Maybe<Scalars['Boolean']>;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserType' }
    & UserResponseFragment
  ) }
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserType' }
    & UserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'UserType' }
    & UserResponseFragment
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export const UserFragmentDoc = gql`
    fragment user on User {
  id
  firstName
  lastName
  username
  email
  avatar
  admin
  seller
  verified
  createdAt
}
    `;
export const CartFragmentDoc = gql`
    fragment cart on CartItem {
  title
  description
  price
  images
  quantity
}
    `;
export const ErrorFragmentDoc = gql`
    fragment error on ErrorField {
  field
  msg
}
    `;
export const UserResponseFragmentDoc = gql`
    fragment UserResponse on UserType {
  user {
    ...user
  }
  cart {
    ...cart
  }
  errors {
    ...error
  }
}
    ${UserFragmentDoc}
${CartFragmentDoc}
${ErrorFragmentDoc}`;
export const RegisterDocument = gql`
    mutation Register($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $password2: String!, $admin: Boolean, $seller: Boolean) {
  register(
    opts: {firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, password2: $password2, admin: $admin, seller: $seller}
  ) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const UserDocument = gql`
    query User {
  user {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;

export function useUserQuery(options: Omit<Urql.UseQueryArgs<UserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserQuery>({ query: UserDocument, ...options });
};
export const UsersDocument = gql`
    query Users {
  users {
    ...user
  }
}
    ${UserFragmentDoc}`;

export function useUsersQuery(options: Omit<Urql.UseQueryArgs<UsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsersQuery>({ query: UsersDocument, ...options });
};