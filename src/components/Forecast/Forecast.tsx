import React from 'react';
import './Forecast.scss';
import { ForecastProps } from './forecast.model';

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
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
    <div className="forecast card">
      <h5 className="card-title">
          <p>{ forecast.title }</p>
          <p>{ forecast.temperature }&#176;C</p>
          { forecast.icon && <img src={forecast.icon} /> }
      </h5>
    </div>
  );
};

export default Forecast;
