import styled from "@emotion/styled";
import MuiButton from "@mui/material/Button";
import MuiToolbar from "@mui/material/Toolbar";
import { media } from "../../styles/vendors/media";

export const Toolbar = styled(MuiToolbar)`
    display: flex;
    justify-content: space-between;
    background-color: white;
    ${media.up('sm')} {
        position: sticky !important;
        top: 0;
        z-index: 1;
    }
`;

export const Title = styled.span`
    display: inline-flex;
    gap: 10px;
    align-items: baseline;
    a {
        font-size: 0.7em;
    }
`;

export const Button = styled(MuiButton)`
    width: 80px;
`;
