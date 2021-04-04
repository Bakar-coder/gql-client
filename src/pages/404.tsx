import { withUrqlClient } from 'next-urql';
import React, { FC } from 'react';
import Layout from '../components/layout';
import { createUrqlClient } from '../utils/urqlClient';

interface indexTypes {}

const index: FC<indexTypes> = ({}) => {
  return (
    <Layout>
      <h2>404 | This page could not be found.</h2>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(index);
