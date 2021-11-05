import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StackoverflowService } from '../services/stackoverflow.service';
import { loadQuestions, loadQuestionsFailure, setQuestions } from './actions';
import { IQuestionCollection } from '../models';

@Injectable()
export class StackoverflowEffects {

  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuestions),
      exhaustMap(action =>
        this.stackoverflowService.getAll(action.for, action.count).pipe(
          map(questions => setQuestions({identifier: action.for, questions: questions as IQuestionCollection})),
          catchError(error => of(loadQuestionsFailure(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private stackoverflowService: StackoverflowService
  ) {
  }
}
