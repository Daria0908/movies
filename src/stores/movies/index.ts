import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMovies, fetchMovie } from "./thunk";

export interface IMovie {
  id: number | string;
  name: string;
  description: string;
  shortDescription: string;
  year: number;
}

interface IMoviesState {
  movies: IMovie[];
  limit: number;
  currentPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null | any;
  currentMovie: IMovie | null;
}

const initialState: IMoviesState = {
  movies: [],
  limit: 10,
  currentPage: 1,
  totalPages: 1,
  loading: false,
  error: null,
  currentMovie: null
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPage: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.currentMovie = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export const { setLimit, setPage, setTotalPage, setLoading } = moviesSlice.actions;

export default moviesSlice.reducer;
