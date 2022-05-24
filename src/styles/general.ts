import { css } from '@emotion/react';
import { normalize } from 'polished';
import { theme } from './theme';

export const GeneralStyle = css`
    ${normalize()}

    html {
      height: 100%;
    }

    body {
      font-family: ${theme.typography.fontFamily};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100%;
    }
`;
