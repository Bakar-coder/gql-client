import React, { FC, Fragment } from 'react';
import Link from 'next/link';
import router from 'next/router';
import {
  useLogoutMutation,
  User,
  UserType,
  useUserQuery,
} from '../../../generated/graphql';

interface navTypes {}

const HeaderNav: FC<navTypes> = ({}) => {
  const [{ data }] = useUserQuery();
  const [{ fetching }, logout] = useLogoutMutation();
  const user = data?.user?.user;
  return (
    <Fragment>
      <nav className='header-nav'>
        <div className='header-nav__content'>
          <div className='logo'>
            <Link href='/'>
              <a>SHOP</a>
            </Link>
          </div>
          <ul className='list'>
            <li className='list-item'>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li className='list-item'>
              <Link href='/shop'>
                <a>Shop</a>
              </Link>
            </li>
            <li className='list-item'>
              <Link href='/cart'>
                <a>Cart</a>
              </Link>
            </li>
            <li className='list-item'>
              <Link href='/account'>
                <a>Account</a>
              </Link>
            </li>
            {!user && (
              <li className='list-item'>
                <Link href='/auth/register'>
                  <a>Register</a>
                </Link>
              </li>
            )}
            {!user && (
              <li className='list-item'>
                <Link href='/auth/login'>
                  <a>Login</a>
                </Link>
              </li>
            )}
            {user && (
              <li
                className='list-item'
                onClick={
                  async () =>
                    !fetching && (await logout()) && router.push('/auth/login')
                  // setTimeout(() => router.reload(), 4000)
                }
              >
                <Link href='#'>
                  <a>Logout</a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default HeaderNav;
