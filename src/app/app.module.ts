import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/dashboard/card/card.component';
import { stackoverflowReducer } from './store/stackoverflow/stackoverflow.reducer';
import { weatherReducer } from './store/weather/weather.reducer';
import { WeatherEffects } from './store/weather/weather.effects';
import { StackoverflowEffects } from './store/stackoverflow/stackoverflow.effects';
import { StackoverflowComponent } from './components/dashboard/card/stackoverflow/stackoverflow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CardComponent,
    StackoverflowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      stackoverflow: stackoverflowReducer,
      weather: weatherReducer
    }),
    EffectsModule.forRoot([WeatherEffects, StackoverflowEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
