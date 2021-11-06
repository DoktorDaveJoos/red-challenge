import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
import { setQuestions, setRandomWeatherData } from './actions';

export const reducer = createReducer(
  initialState,

  on(setQuestions, (state, questionMap) => ({
    ...state, [questionMap.identifier]: questionMap.questions
  })),

  on(setRandomWeatherData, (state, weatherData) => ({
    ...state, weather: weatherData.items
  })),
);
