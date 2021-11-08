import { createReducer, on } from '@ngrx/store';
import { setRandomWeatherData } from './weather.actions';
import { IWeatherData } from '../../models';

export interface IWeatherState {
  data: IWeatherData[];
}

const initialWeatherState: IWeatherState = {
  data: []
};

export const weatherReducer = createReducer(
  initialWeatherState,

  on(setRandomWeatherData, (state, weatherData) => ({
    ...state, data: weatherData.items
  })),
);
