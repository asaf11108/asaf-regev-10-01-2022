import styled from "@emotion/styled";
import MuiButton from "@mui/material/Button";
import MuiToolbar from "@mui/material/Toolbar";
import { em, rem } from "polished";
import { media } from "../../styles/vendors/media";

export const Toolbar = styled(MuiToolbar)`
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding-left: 1em;
    padding-right: 1em;
    min-height: ${em('54px')};
    ${media.up('sm')} {
        position: sticky !important;
        top: 0;
        z-index: 1;
        padding-left: ${em('24px')};
        padding-right: ${em('24px')};
        min-height: ${em('64px')};
    }
`;

export const Title = styled.span`
    display: inline-flex;
    gap: 0.75em;
    align-items: baseline;
    a {
        font-size: 0.7em;
    }
`;

export const Button = styled(MuiButton)`
    width: ${rem('80px')};
`;
