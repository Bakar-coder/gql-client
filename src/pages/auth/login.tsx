import { withUrqlClient } from 'next-urql';
import React, { FC, Fragment } from 'react';
import Signin from '../../components/auth/signin';
import { createUrqlClient } from '../../utils/urqlClient';
import Header from '../../components/layout/header';
import Layout from '../../components/layout';

interface LoginTypes {}

const Login: FC<LoginTypes> = ({}) => {
  return (
    <Layout>
      <Signin />
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
