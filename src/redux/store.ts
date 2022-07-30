import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movie.store";


export const store = configureStore({
    reducer: { movies: movieSlice.reducer }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
