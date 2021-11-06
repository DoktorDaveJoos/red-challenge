import { IQuestion, IWeatherData } from '../models';

export interface IState {
  weather: Array<IWeatherData>,
  typescript: Array<IQuestion>,
  angular: Array<IQuestion>,
  latest: Array<IQuestion>,
}

export const initialState: IState = {
  typescript: [],
  weather: [],
  angular: [],
  latest: []
};
