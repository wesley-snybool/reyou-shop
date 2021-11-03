import { createSlice } from '@reduxjs/toolkit'



export const slice = createSlice({
    name: 'user',
    initialState: {
        user: '',
        isLogged: false,
    },
    reducers: {
        changeUser(state, { payload }) {}
    }
})