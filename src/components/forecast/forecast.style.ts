import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { rem } from "polished";
import { spread } from "../../styles/vendors/spread";
import { ForecastProps } from "./forecast.model";

export const Forecast = styled(Card)<Pick<ForecastProps, 'onClick'>> `
    ${spread('width', rem('112px'), rem('152px'))}
    ${spread('margin', rem('4px'), rem('16px'))}
    text-align: center;
    background-color: white;

    ${({ onClick }) => onClick ? css`
    cursor: pointer;

    &:hover {
        filter: brightness(85%);
    }
    ` : ''}
`;
