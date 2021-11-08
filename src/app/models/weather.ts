export interface IWeatherData {
  "Temp. A.": string,
  wind: number,
  Zeit: string
}

export interface IWeatherDataCollection {
  items: Array<IWeatherData>
}
