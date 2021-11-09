import { IStackoverflowState } from './stackoverflow/stackoverflow.reducer';
import { IWeatherState } from './weather/weather.reducer';

export interface IAppState {
  stackoverflow: IStackoverflowState;
  weather: IWeatherState
}

export const initialState: IAppState = {
  weather: {
    data: []
  },
  stackoverflow: {}
}
