import { createSlice } from "@reduxjs/toolkit";

import { GetHotConceptData } from "../services/getHotConceptData";

export const getHotConceptData = createSlice({
    name: 'hotconcept',
    initialState: {
        data: [],
        status: null,
    },
    extraReducers: {
        [GetHotConceptData.pending]: (state, action) => {
            state.status = 'loading'
        },
        [GetHotConceptData.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = 'success'
        },
        [GetHotConceptData.rejected]: (state, action) => {
            state.status = 'failed';
        },
    }
})

export default getHotConceptData.reducer;