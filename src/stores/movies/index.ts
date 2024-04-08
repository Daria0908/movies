import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMovies } from "./thunk";

export interface IMovie {
  id: number;
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
}

const initialState: IMoviesState = {
  movies: [],
  limit: 10,
  currentPage: 1,
  totalPages: 1,
  loading: false,
  error: null,
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
      });
  },
});

export const { setLimit, setPage, setTotalPage, setLoading } = moviesSlice.actions;

export default moviesSlice.reducer;
