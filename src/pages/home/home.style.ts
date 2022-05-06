import styled from "@emotion/styled";
import { Card, css, Typography } from "@mui/material";
import { spread } from "../../styles/vendors/spread";

const SharedBody = css`
    display: flex;
    flex-direction: column;
    ${spread('minHeight', '400px', '500px')}
`;

const SharedBodyStates = css`
    align-items: center;
    justify-content: center;
`;

export const Home = styled.div`
    text-align: center;
`;

export const AutocompleteCard = styled(Card)`
    ${spread('width', '90%', '50%')}
    margin: 0 auto;
    ${spread('marginBottom', '20px', '30px')}
`;

export const TitleTypography = styled(Typography)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;
    & > span {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;
    }

    .MuiButton-root {
        font-size: 40px;
    }
`;

export const BodyHeader = styled.div`
    ${spread('margin', '20px 0', '60px 0')}
    ${spread('fontSize', '50px', '80px')}
    text-align: center;
`;

export const Body = styled.div`
    ${SharedBody}
    justify-content: center;
`;

export const Loader = styled.div`
    ${SharedBody}
    ${SharedBodyStates}
`;

export const Error = styled(Typography)`
    ${SharedBody}
    ${SharedBodyStates}
    font-weight: 600;
`;

export const Forecasts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
