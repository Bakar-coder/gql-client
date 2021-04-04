import React, { FC, Fragment } from 'react';
import Header from './header';

interface indexTypes {}

const Layout: FC<indexTypes> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default Layout;
