import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../axiosConfig";
import { IMovie, setLoading, setTotalPage } from ".";

export interface FetchMoviesPayload {
  limit: number;
  page: number;
}

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",

  async (payload: FetchMoviesPayload, { dispatch }): Promise<IMovie[]> => {
    const { limit, page } = payload;
    try {
      dispatch(setLoading(true));
      const response = await instance.get<{ docs: IMovie[]; pages: number }>(`/movie?page=${page}&limit=${limit}`);
      dispatch(setLoading(false));
      dispatch(setTotalPage(response.data.pages));
      return response.data.docs;
    } catch (error: any) {
      throw error.message;
    }
  }
);
