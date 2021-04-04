import { Fragment } from 'react';
import '../styles/main.scss';

export default function App({ Component, pageProps }: any) {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}
