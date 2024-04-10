import { IMovie } from "./IMovie";

export interface IMoviesState {
    movies: IMovie[];
    loading: boolean;
    error: string | null | undefined;
}