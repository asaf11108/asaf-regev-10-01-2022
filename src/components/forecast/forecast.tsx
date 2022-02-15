import { FC } from 'react';
import './forecast.scss';
import { ForecastProps } from './forecast.model';
import { Typography } from '@mui/material';

const Forecast: FC<ForecastProps> = ({ forecast }) => {
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
    <div className="forecast">
      <Typography variant="h5" className="card-title">
          <p>{forecast.title}</p>
          <p>{forecast.temperature}</p>
          {forecast.icon && <img src={forecast.icon} alt="Weather icon" />}
      </Typography>
    </div>
  );
};

export default Forecast;
