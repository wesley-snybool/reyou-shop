import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

export const slice = createSlice({
    name: 'advertising',
    initialState: {
        data: [],
        status: false,
    },
    reducers: {
        
    }
})

//export const { changeUser, logout } = slice.actions;



export default slice.reducer;