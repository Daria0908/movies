export interface IPage {
    page: number;
    totalPage?: number;
    limit: number;
    year?: number | null;
    countries?: string | null;
    ageRating?: string | null;

    genre?: string | string[];
    content?: string;
    ratingKp?: number;
    production?: string;
    searchTerm?: string | null;
}
