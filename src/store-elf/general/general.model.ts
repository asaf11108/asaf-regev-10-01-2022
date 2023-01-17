export enum TemperatureType {
    Celsius = 'celsius',
    Fahrenheit = 'fahrenheit'
  }
  
  export interface GeneralState {
    temperatureType: TemperatureType;
  }
  