import { ISOString } from '../../interfaces/general';

export interface Headline {
    EffectiveDate: ISOString;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: ISOString;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
}

export interface TemperatureValue {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Temperature {
    Minimum: TemperatureValue;
    Maximum: TemperatureValue;
}

export interface Day {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType?: string;
    PrecipitationIntensity?: string;
}

export interface Night {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType?: string;
    PrecipitationIntensity?: string;
}

export interface DailyForecast {
    Date: ISOString;
    EpochDate: number;
    Temperature: Temperature;
    Day: Day;
    Night: Night;
    Sources: string[];
    MobileLink: string;
    Link: string;
}

export interface Forecasts {
    Headline: Headline;
    DailyForecasts: DailyForecast[];
}
