import { FC } from 'react';
import { ForecastProps } from './forecast.model';
import { Typography } from '@mui/material';
import * as S from "./forecast.style";
import usePromise from 'react-use-promise';

const Forecast: FC<ForecastProps> = ({ forecast, onClick }) => {
  const [icon] = usePromise(
    () => forecast.icon ?
      import(`../../assets/weather-icons/${forecast.icon}.png`).then(res => res.default) :
      Promise.resolve(''),
    [forecast]
  );

  return (
    <S.Forecast onClick={onClick}>
      <Typography variant="h5">
          <p>{forecast.title}</p>
          <p>{forecast.temperature}</p>
          {icon && <img src={icon} alt="Weather icon" />}
      </Typography>
    </S.Forecast>
  );
};

export default Forecast;
