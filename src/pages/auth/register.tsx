import { withUrqlClient } from 'next-urql';
import React, { FC, Fragment } from 'react';
import Signup from '../../components/auth/signup';
import { createUrqlClient } from '../../utils/urqlClient';
import Header from '../../components/layout/header';
import Layout from '../../components/layout';

interface RegisterTypes {}

const Register: FC<RegisterTypes> = ({}) => {
  return (
    <Layout>
      <Signup />
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Register);
