import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPage } from "../../models/IPage";

const initialState: IPage = {
    page: 1,
    totalPage: 1,
    limit: 10,
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
    }
})

export const { setLimit, setPage, setTotalPage } = pageSlice.actions;

export default pageSlice.reducer;