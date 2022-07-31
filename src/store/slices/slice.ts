import { createSlice } from "@reduxjs/toolkit";
import { fetcherThunk } from "../thunks/thunk";
import { initialState } from "../types/types";

export const fetcherSlice = createSlice({
  name: "fetcher",
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
