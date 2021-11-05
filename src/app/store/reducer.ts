import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
import { setQuestions } from './actions';

export const reducer = createReducer(
  initialState,

  on(setQuestions, (state, questionMap ) => ({
    ...state, [questionMap.identifier]: questionMap.questions
  }))

)
