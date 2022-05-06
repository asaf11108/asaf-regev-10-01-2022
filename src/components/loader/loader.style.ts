import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import MuiCircularProgress from "@mui/material/CircularProgress";
import { spread } from "../../styles/vendors/spread";
import { LoaderProps, LoaderSize } from "./loader.model";

const SIZE = 500;

const loaderSize = (shrinkSize: number) => css`
    ${spread('width', `${SIZE - shrinkSize * 2}px`, `${SIZE - shrinkSize}px`)}
    ${spread('height', `${SIZE - shrinkSize * 2}px`, `${SIZE - shrinkSize}`)}
`;

const sizes: Record<number, SerializedStyles> = {
    [LoaderSize.Small]: loaderSize(200),
    [LoaderSize.Medium]: loaderSize(150),
    [LoaderSize.Large]: loaderSize(100)
}; 

export const Loader = styled.div<Required<Pick<LoaderProps, 'size'>>>`
    ${({ size }) => sizes[size]}
`;

export const CircularProgress = styled(MuiCircularProgress)`
    width: inherit !important;
    height: inherit !important;
`;
