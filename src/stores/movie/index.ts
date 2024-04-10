import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../models/IMovie";
import { fetchMovie } from "../thunks";

interface IMovieState {
  movie: IMovie | null;
  loading: boolean;
  error: string | null | undefined;
}
const initialState: IMovieState = {
  movie: null,
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.movie = action.payload
        state.loading = false
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export default movieSlice.reducer;

