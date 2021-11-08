import { createAction, props } from '@ngrx/store';
import { IWeatherDataCollection } from '../../models';

export const loadWeatherData =  createAction(
  '[Dashboard] Load WeatherData'
)

export const setRandomWeatherData = createAction(
  '[Dashboard] Set WeatherData',
  props<IWeatherDataCollection>()
)
