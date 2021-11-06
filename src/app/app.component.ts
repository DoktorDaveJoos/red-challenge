import { Component } from '@angular/core';
import { IState } from './store/state';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private store: Store<IState>,
    private titleService: Title
  ) {}

  // TODO: Consider not using title service -> slow DOM operations
  get title() : string {
    return this.titleService.getTitle();
  }

  ngOnInit() {
    this.store.dispatch({type: '[Dashboard] Load WeatherData'});
  }

}
