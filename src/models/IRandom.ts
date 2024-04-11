import { IMovie } from "./IMovie";

export interface IRandomState {
    randomMovie: IMovie | null
    loading: boolean;
    error: string | null | undefined;
}