import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IAppState } from '../../store';
import { Store } from '@ngrx/store';
import { loadQuestions } from '../../store/stackoverflow/stackoverflow.actions';
import { Observable, zip } from 'rxjs';
import { IQuestion, IWeatherData } from '../../models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private readonly WEATHER = 'weather';

  questionItems$: Observable<IQuestion[]>;
  weatherItems$: Observable<IWeatherData[]>;

  constructor(
    private titleService: Title,
    private store: Store<IAppState>
  ) {
    this.questionItems$ = store.select(state => state.stackoverflow[this.WEATHER]);
    this.weatherItems$ = store.select(state => state.weather.data);
  }

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');

    this.store.dispatch(loadQuestions({
      for: this.WEATHER,
      count: 5
    }));
  }

  get mixed(): Observable<Array<IWeatherData | IQuestion>> {
    return zip(this.weatherItems$, this.questionItems$).pipe(
      map(zipped => {
        let mixed: Array<IWeatherData | IQuestion> = [];
        zipped[0].forEach(((value, index) => {
          mixed.push(value);
          mixed.push(zipped[1][index]);
        }));

        console.log('mixed', mixed);
        return mixed;
      })
    );
  }

  getInformation(value: IQuestion | IWeatherData): string {
    return (value as IQuestion).title ??
      (value as IWeatherData)['Temp. A.'] + "°C am " +
      (value as IWeatherData).Zeit;
  }

}
