import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./axiosConfig";
import { IPage } from "../models/IPage";
import { IMovie } from "../models/IMovie";
import { setTotalPage } from "./page";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",

  async (payload: IPage, { dispatch }): Promise<IMovie[]> => {
    const { page, limit, year, ageRating, countries } = payload;

    try {

      const response = await instance.get<{ docs: IMovie[]; pages: number, total: number }>(`/movie?page=${page}&limit=${limit}${year ? `&year=${year}` : ''}${ageRating ? `&ratingMpaa=${ageRating}` : ''}${countries ? `&countries.name=${countries}` : ''}`);
      dispatch(setTotalPage(response.data.pages));
      return response.data.docs;
    } catch (error: any) {
      throw error.message;
    }
  }
);

export const fetchMovie = createAsyncThunk(
  'movie/fetchMovie',

  async (id: number) => {
    const response = await instance.get(`/movie/${id}`);
    return response.data;
  });
