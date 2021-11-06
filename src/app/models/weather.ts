export interface IWeatherData {
  temp: string,
  wind: number
}

export interface IWeatherDataCollection {
  items: Array<IWeatherData>
}
