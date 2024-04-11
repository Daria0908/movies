import { IMovie } from "./IMovie";

export interface IPage {
    page: number;
    totalPage?: number;
    randomID?: number;
    limit: number;
    year?: number | null;
    countries?: string | null;
    ageRating?: string | null;

    isSearching?: boolean
    search?: string | null

    genre?: string | string[];
    content?: string;
    ratingKp?: number;
    production?: string;
    searchTerm?: string | null;
}
