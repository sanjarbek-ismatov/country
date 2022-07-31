export const initialState: data = {
  loading: true,
  data: {},
  error: undefined,
};
export type data = {
  data: {
    data?: countryType[] | undefined;
  };
  error: {} | undefined;

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
