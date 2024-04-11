import { createSlice } from "@reduxjs/toolkit";
import { IRandomState } from "../../models/IRandom";
import { fetchRandomMovie } from "../thunks";

const initialState: IRandomState = {
    randomMovie: null,
    loading: false,
    error: null
}

const randomMovieSlice = createSlice({
    name: 'randomMovie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRandomMovie.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchRandomMovie.fulfilled, (state, action) => {
            state.randomMovie = action.payload
            state.loading = false
          })
          .addCase(fetchRandomMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
    }
})

export default randomMovieSlice.reducer;