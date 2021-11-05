import { IQuestion, IWeatherData } from '../models';

export interface State {
  weather: Array<IWeatherData>,
  typescript: Array<IQuestion>,
  angular: Array<IQuestion>,
  latest: Array<IQuestion>,
}

export const initialState: State = {
  typescript: [],
  weather: [],
  angular: [],
  latest: []
};
