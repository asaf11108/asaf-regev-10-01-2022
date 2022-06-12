import { css } from '@emotion/react';
import { normalize } from 'polished';

export const GeneralStyle = css`
    ${normalize()}

    html {
      height: 100%;
    }

    body {
      min-height: 100%;
    }
`;
