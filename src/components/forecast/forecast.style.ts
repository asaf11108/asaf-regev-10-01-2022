import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { spread } from "../../styles/vendors/spread";
import { ForecastProps } from "./forecast.model";

export const Forecast = styled(Card)<Pick<ForecastProps, 'onClick'>> `
    ${spread('width', '110px', '150px')}
    ${spread('margin', '5px', '15px')}
    text-align: center;
    background-color: white;

    ${({ onClick }) => onClick ? css`
    cursor: pointer;

    &:hover {
        filter: brightness(85%);
    }
    ` : ''}
`;
