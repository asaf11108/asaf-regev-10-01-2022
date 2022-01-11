import React from 'react';
import './Forecast.scss';
import { ForecastProps } from './forecast.model';
import { Typography } from '@mui/material';

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  const buildIconUrl = (icon?: string): string => {
    if (!icon) {
      return "";
    }
    return `../../assets/weather-icons/${icon}.png`;
  };

  forecast = {
    ...forecast,
    icon: buildIconUrl(forecast.icon),
  };

  return (
    <div className="forecast">
      <Typography variant="h5" className="card-title">
          <p>{ forecast.title }</p>
          <p>{ forecast.temperature }&#176;C</p>
          { forecast.icon && <img src={forecast.icon} /> }
      </Typography>
    </div>
  );
};

export default Forecast;
