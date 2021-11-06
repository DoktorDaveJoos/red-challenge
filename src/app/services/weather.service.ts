import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly JSON_URL = 'assets/weatherData.json';

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get(this.JSON_URL);
  }
}
