import { createAction, props } from '@ngrx/store';
import { IQuestionMap, IWeatherData, IWeatherDataCollection } from '../models';

export const loadQuestions = createAction(
  '[Dashboard] Load Questions',
  props<{ for: string, count?: number }>()
);

export const setQuestions = createAction(
  '[Dashboard] Set Questions',
  props<IQuestionMap>()
);

export const loadQuestionsFailure = createAction(
  '[Dashboard] Load Questions Failed',
  props<Error>()
);

export const loadWeatherData =  createAction(
  '[Dashboard] Load WeatherData'
)

export const setRandomWeatherData = createAction(
  '[Dashboard] Set WeatherData',
  props<IWeatherDataCollection>()
)
