import { css } from '@emotion/react';
import { theme } from './theme';

export const GeneralStyle = css`
    html {
      height: 100%;
    }

    body {
      margin: 0;
      font-family: ${theme.typography.fontFamily};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100%;
    }
`;
