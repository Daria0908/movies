import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPage } from "../../models/IPage";
import { IMovie } from "../../models/IMovie";

const initialState: IPage = {
    page: 1,
    limit: 10,
    searchTerm: null,
    isSearching: false
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setTotalPage: (state, action: PayloadAction<number>) => {
            state.totalPage = action.payload
        },
        setYear: (state, action: PayloadAction<number | null>) => {
            state.year = action.payload
        },
        setCountry: (state, action: PayloadAction<string | null>) => {
            state.countries = action.payload
        },
        setAgeRating: (state, action: PayloadAction<string | null>) => {
            state.ageRating = action.payload
        },
        toggleSerach: (state) => {
            state.isSearching = true;
        },
        setSearch: (state, action: PayloadAction<string | null>) => {
            state.search = action.payload
        },
    },
})

export const { setLimit, setPage, setTotalPage, setYear, setCountry, setAgeRating, toggleSerach, setSearch } = pageSlice.actions;

export default pageSlice.reducer;