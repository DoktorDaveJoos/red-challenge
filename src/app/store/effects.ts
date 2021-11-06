import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, mergeMap, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { StackoverflowService } from '../services/stackoverflow.service';
import { loadQuestions, loadQuestionsFailure, loadWeatherData, setQuestions, setRandomWeatherData } from './actions';
import { IQuestionCollection, IWeatherData } from '../models';
import { WeatherService } from '../services/weather.service';

@Injectable()
export class StackoverflowEffects {

  loadSoData$ = createEffect(() =>
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

@Injectable()
export class WeatherEffects {

  private readonly COUNT = 5;

  loadWeatherData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWeatherData),
      mergeMap(() => this.weatherService.get()
        .pipe(
          map(response => {
            const rndElements = new Array(this.COUNT).fill(null)
              .map(() => (response as Array<IWeatherData>)[Math.floor(Math.random() * Array(response).length)]);
            return setRandomWeatherData({
              items: rndElements
            });
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {
  }
}
