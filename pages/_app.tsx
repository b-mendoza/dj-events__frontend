import 'styles/main.scss';

import { AppProps } from 'next/app';

function __NextApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default __NextApp;
