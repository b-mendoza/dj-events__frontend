import { css, Global } from '@emotion/react';

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

          margin: 0;

          padding: 0;
        }
      `}
    />
  );
}
