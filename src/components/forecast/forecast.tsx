import { FC } from 'react';
import { ForecastProps } from './forecast.model';
import { Typography } from '@mui/material';
import * as S from "./forecast.style";

const Forecast: FC<ForecastProps> = ({ forecast, onClick }) => {
  const buildIconUrl = (icon?: string): string => {
    if (!icon) {
      return "";
    }
    return require(`../../assets/weather-icons/${icon}.png`);
  };

  forecast = {
    ...forecast,
    icon: buildIconUrl(forecast.icon),
  };

  return (
    <S.Forecast onClick={onClick}>
      <Typography variant="h5">
          <p>{forecast.title}</p>
          <p>{forecast.temperature}</p>
          {forecast.icon && <img src={forecast.icon} alt="Weather icon" />}
      </Typography>
    </S.Forecast>
  );
};

export default Forecast;
