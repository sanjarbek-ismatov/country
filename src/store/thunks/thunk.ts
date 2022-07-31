import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { countryType } from "../types/types";
export const fetcherThunk = createAsyncThunk(
  "thunkfetcher",
  async (query?: string) => {
    return await axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) =>
        query
          ? data.data?.filter(
              (el: countryType) => el.cca2 === query.toUpperCase()
            )
          : data
      );
  }
);
