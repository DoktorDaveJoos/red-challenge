import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { IWeatherData } from '../../models';
import { WeatherService } from '../../services/weather.service';
import { loadWeatherData, setRandomWeatherData } from './weather.actions';

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
