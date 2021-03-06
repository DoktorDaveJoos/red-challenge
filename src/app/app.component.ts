import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';
import { IAppState } from './store';
import { loadWeatherData } from './store/weather/weather.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked{

  constructor(
    private store: Store<IAppState>,
    private titleService: Title,
    private changeDetector: ChangeDetectorRef,
  ) {}

  // TODO: Consider not using title service -> slow DOM operations
  get title() : string {
    return this.titleService.getTitle();
  }

  ngOnInit() {
    this.store.dispatch(loadWeatherData());
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

}
