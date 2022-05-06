import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { spread } from "../../styles/vendors/spread";
import { ForecastProps } from "./forecast.model";

export const Forecast = styled.div<Pick<ForecastProps, 'onClick'>> `
    ${spread('width', '110px', '150px')}
    ${spread('margin', '5px', '15px')}
    text-align: center;
    background-color: white;
    border-radius: 4px;

    ${({ onClick }) => onClick ? css`
    cursor: pointer;

    &:hover {
        filter: brightness(85%);
    }
    ` : ''}
`;
