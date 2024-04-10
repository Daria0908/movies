export interface IPage {
    page: number;
    totalPage?: number;
    limit: number;
    filters?: IFilter;
    searchTerm?: string;
}

export interface IFilter {
  year: number;
  country: string;
  ageRating: string;
  genre? : string[];
  content?: string;
  ratingKp? : number;
  production?: string;
}