import { createReducer, on } from '@ngrx/store';
import { setQuestions } from './stackoverflow.actions';
import { IQuestion } from '../../models';

export type IStackoverflowState = Record<string, IQuestion[]>;

const initialStackoverflowState: IStackoverflowState = {};

export const stackoverflowReducer = createReducer(
  initialStackoverflowState,

  on(setQuestions, (state, questionMap) => ({
    ...state,
    [questionMap.identifier]: questionMap.questions.items
  })),
);
