import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from './userSlice'
import getConceptSlice from '../modules/hot-concepts/getHotConceptsSlice'
import flipCardSlice from '../modules/flip-cards/getFlipCardSlice'
import getPublicitySlice from '../modules/publicity/publicitySlice'
import bannerSlice from '../modules/banners/getBannerSlice'

const store =  configureStore({
  reducer: {
    userTest: userReducer,
    getConceptsData: getConceptSlice,
    getFlipCardsData: flipCardSlice,
    getPublicity: getPublicitySlice,
    getBanner: bannerSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store