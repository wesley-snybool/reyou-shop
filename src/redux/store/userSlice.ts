import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export const slice = createSlice({
    name: 'hot-concepts',
    initialState: {
        name: '',
        isLogged: false,
    },
    reducers: {
        changeUser(state, { payload }) {
            return {...state, isLogged: true, name: payload}
        },
        logout(state){
            return {...state, isLogged: false, name: ''}
        }
    }
})

export const { changeUser, logout } = slice.actions;

export const selectUser = (state: RootState) => state.userTest;

export default slice.reducer;