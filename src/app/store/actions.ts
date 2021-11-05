import { createAction, props } from '@ngrx/store';
import { IQuestionMap } from '../models';

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
