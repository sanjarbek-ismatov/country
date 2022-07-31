import { configureStore } from "@reduxjs/toolkit";
import { fetcherSlice } from "./slices/slice";

export const store = configureStore({
  reducer: {
    fetcher: fetcherSlice.reducer,
  },
  middleware: (def) => def({ serializableCheck: false }),
});
