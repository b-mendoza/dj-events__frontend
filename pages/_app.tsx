import 'styles/main.scss';

import { AppProps } from 'next/app';
import { useEffect } from 'react';

function __NextApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles);
  }, []);

  return <Component {...pageProps} />;
}

export default __NextApp;
