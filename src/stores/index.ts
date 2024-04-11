import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/index";
import pageReducer from './page/index';
import movieReducer from './movie/index';
import authReducer from './auth/index';
import randomMovieReducer from './random/index';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    page: pageReducer,
    movie: movieReducer,
    auth: authReducer,
    random: randomMovieReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
