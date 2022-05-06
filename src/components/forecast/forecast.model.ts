import { MouseEventHandler } from "react";

export interface _Forecast {
  title: string;
  temperature: string;
  icon?: string;
}

export interface ForecastProps {
  forecast: _Forecast
  onClick?: MouseEventHandler<HTMLDivElement>;
}
