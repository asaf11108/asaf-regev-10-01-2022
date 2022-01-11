export interface _Forecast {
  title: string;
  temperature: number;
  icon?: string;
}

export interface ForecastProps {
  forecast: _Forecast
}
