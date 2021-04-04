import { withUrqlClient } from 'next-urql';
import React, { FC, Fragment } from 'react';
import { createUrqlClient } from '../utils/urqlClient';
import Header from '../components/layout/header';
import Layout from '../components/layout';

interface indexTypes {}

const index: FC<indexTypes> = (props) => {
  return (
    <Layout>
      <h2>App</h2>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(index);
