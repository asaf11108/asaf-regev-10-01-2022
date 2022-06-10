import styled from "@emotion/styled";
import { Card, css, Typography } from "@mui/material";
import { em, rem } from "polished";
import { spread } from "../../styles/vendors/spread";

const SharedBody = css`
    display: flex;
    flex-direction: column;
    ${spread('minHeight', rem('400px'), rem('500px'))}
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
    ${spread('marginBottom', rem('20px'), rem('30px'))}
`;

export const TitleTypography = styled(Typography)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;
    & > span {
        display: flex;
        flex-direction: column;
        gap: ${rem('5px')};
        align-items: center;
    }

    .MuiButton-root {
        font-size: ${em('40px')};
    }
`;

export const BodyHeader = styled.div`
    ${spread('margin', `${rem('20px')} 0`, `${rem('60px')} 0`)}
    ${spread('fontSize', em('50px'), em('80px'))}
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

export const ErrorTypography = styled(Typography)`
    ${SharedBody}
    ${SharedBodyStates}
    font-weight: 600;
`;

export const Forecasts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
