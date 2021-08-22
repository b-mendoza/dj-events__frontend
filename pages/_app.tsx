import { AppProps } from 'next/app';

import { GlobalStyles } from 'styles';

function __NextApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}

export default __NextApp;
