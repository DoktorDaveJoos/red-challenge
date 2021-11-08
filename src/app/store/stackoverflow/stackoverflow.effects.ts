import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, mergeMap, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadQuestions, loadQuestionsFailure, setQuestions } from './stackoverflow.actions';
import { StackoverflowService } from '../../services/stackoverflow.service';
import { IQuestionCollection } from '../../models';

@Injectable()
export class StackoverflowEffects {

  loadSoData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuestions),
      mergeMap(action =>
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
