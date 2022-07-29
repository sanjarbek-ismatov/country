import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { createLogger } from 'redux-logger';
export type init = {
  loading: boolean;
  data: {};

  error: undefined | {};
};

const initialState: data = {
  loading: false,
  data: {},

  error: undefined,
};
export const fetcherThunk = createAsyncThunk('thunkfetcher', async () => {
  return await axios
    .get('https://restcountries.com/v3.1/all')
    .then((data) => data);
});
const fetcherSlice = createSlice({
  name: 'fetcher',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetcherThunk.pending, (state) => {
      (state.loading = true), (state.data = {}), (state.error = undefined);
    }),
      builder.addCase(fetcherThunk.fulfilled, (state, action) => {
        (state.loading = false),
          (state.data = action.payload),
          (state.error = undefined);
      }),
      builder.addCase(fetcherThunk.rejected, (state, action) => {
        (state.loading = false),
          (state.data = {}),
          (state.error = action.error);
      });
  },
});
export const store = configureStore({
  reducer: {
    fetcher: fetcherSlice.reducer,
  },
  middleware: (def) => def({ serializableCheck: false }).concat(createLogger()),
});

export type data = {
  data: {
    data?: countryType[];
  };
  error: {} | undefined;
  selected: countryType[] | undefined;
  loading: boolean;
};
export type countryType = {
  area: number;
  capital: [string];

  cca3: string;
  cca2: string;
  coatOfArms: {
    svg: string;
  };
  continents: [string];
  flag: string;
  flags: {
    svg: string;
  };
  maps: {
    googleMaps: string;
  };
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
};
