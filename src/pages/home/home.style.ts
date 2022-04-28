import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";
import { spread } from "../../styles/vendors/spread";

export const Home = styled.div`
    text-align: center;
`;

export const AutocompleteCard = styled(Card)`
    ${spread('width', '90%', '50%')}
    margin: 0 auto;
    ${spread('margin-bottom', '20px', '30px')}
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

// export const BodyHeader = 

// .home {

//     &__body-header {
//         @include vendors.spread(margin, 20px 0, 60px 0);
//         @include vendors.spread(font-size, 50px, 80px);
//         text-align: center;
//     }

//     &__body, &__loader, &__error {
//         display: flex;
//         flex-direction: column;
//         @include vendors.spread(min-height, 400px, 500px);
//     }
    
//     &__body {
//         justify-content: space-between;
//     }

//     &__loader, &__error {
//         align-items: center;
//         justify-content: center;
//     }

//     &__error {
//         font-weight: 600;
//     }

//     &__forecasts {
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: center;
//     }
// }
