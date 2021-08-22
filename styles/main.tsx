import { css, Global } from '@emotion/react';

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;

          font-size: 62.5%;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body {
          font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;

          font-size: 1.2rem;

          @media (min-width: 280px) {
            font-size: 1.4rem;
          }

          @media (minwidth: 340px) {
            font-size: 1.6rem;
          }
        }
      `}
    />
  );
}
