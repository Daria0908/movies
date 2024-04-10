export interface IMovie {
    id: number | null;
    name: string | null;
    loading: boolean;
    error: string | null | undefined;
    description?: string | null;
    ageRating?: number | null;
    persons?: IPerson[] | null;
    seasonsInfo?: ISeasons[];

    countries?: INames[] | null;
    genres?: INames[] | null;
    rating?: IRating | null;
    shortDescription?: string | null;
    year?: number | null;
    poster: IPoster[];
    similarMovies: ISimilarMovies[];
}   

interface INames {
    name: string
}

interface IRating {
    kp: number
    imdb: number
    filmCritics: number
    russianFilmCritics: number
    await: number | null
}

interface IPerson {
    id: number
    name: string
    photo: string
}

interface IPoster {
    url?: string
    previewUrl?: string
}

interface ISeasons {
    number: number,
    episodesCount: number
}

interface ISimilarMovies {
    id: number,
    name: string,
    poster: IPoster
}