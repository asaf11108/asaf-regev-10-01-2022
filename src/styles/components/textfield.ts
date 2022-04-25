import { css } from '@emotion/react';

export const TextfieldStyle = css`
    .MuiFormControl-root {
        position: relative;

        .MuiInputBase-fullWidth {
            padding-right: 0 !important;
        }

        .MuiFormHelperText-root {
            position: absolute;
            top: 95%;
        }
    }
`;
