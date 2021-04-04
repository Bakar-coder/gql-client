import React, { FC, Fragment } from 'react';
import HeaderNav from './headerNav';

interface indexTypes {}

const Header: FC<indexTypes> = ({}) => {
  return (
    <Fragment>
      <HeaderNav />
    </Fragment>
  );
};

export default Header;
