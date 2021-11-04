import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from './userSlice'
import getConceptSlice from '../modules/hot-concepts/getGotConceptsSlice'

const store =  configureStore({
  reducer: {
    userTest: userReducer,
    getConceptsData: getConceptSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store