export interface IMovie {
    id: number | null;
    name: string | null;
    ageRating?: number | null;
    countries?: INames[] | null;
    genres?: INames[] | null;
    rating?: IRating | null;
    shortDescription?: string | null;
    persons?: IPerson[] | null;
    year?: number | null;
    loading: boolean;
    error: string | null | undefined;
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