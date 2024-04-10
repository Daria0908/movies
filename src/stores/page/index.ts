import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPage } from "../../models/IPage";

const initialState: IPage = {
    page: 1,
    totalPage: 1,
    limit: 10,
    searchTerm: null,
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
            if (state.year) {
                state.year = action.payload
            } else state.year = null;
        },
        setCountry: (state, action: PayloadAction<string | null>) => {
            if (state.countries) {
                state.countries = action.payload
            } else state.countries = null;
        },
        setAgeRating: (state, action: PayloadAction<string | null>) => {
            if (state.ageRating) {
                state.ageRating = action.payload
            } else state.ageRating = null;
        },

    }
})

export const { setLimit, setPage, setTotalPage, setYear, setCountry, setAgeRating } = pageSlice.actions;

export default pageSlice.reducer;