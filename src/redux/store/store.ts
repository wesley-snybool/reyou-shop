import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from './userSlice'
import getConceptSlice from '../modules/hot-concepts/getHotConceptsSlice'
import flipCardSlice from '../modules/flip-cards/getFlipCardSlice'
import getPublicitySlice from '../modules/publicity/publicitySlice'
import bannerSlice from '../modules/banners/getBannerSlice'
import darlingMomentsSlice from '../modules/darlings-moment/darlingsMoments'
import reYouFavoriteSlice from '../modules/reyou-favorites/reYouFavorites'
import newsSlice from '../modules/news/news'
import blogSlice from '../modules/blogs/blogs'
import pressSlice from '../modules/press/press'
import configSlice from '../modules/config-portal/config-portal'
import showCaseProductsSlice from '../modules/show-case/showCase'
import getTypesItemsSlice from '../modules/types-items/typesItems'
import loadMoreSlice from '../modules/filters/load-more/loadMore'
import filterSlice from '../modules/filters/filter/filter'
import getStateProductsSlice from '../modules/state-products/state_products'
import getCategoryProductsSlice from '../modules/category/category_products'

const store =  configureStore({
  reducer: {
    userTest: userReducer,
    getConceptsData: getConceptSlice,
    getFlipCardsData: flipCardSlice,
    getPublicity: getPublicitySlice,
    getBanner: bannerSlice,
    getDarlingMoments: darlingMomentsSlice,
    getReyouFavorites: reYouFavoriteSlice,
    getNews: newsSlice,
    getBlogs: blogSlice,
    getPress: pressSlice,
    getConfig: configSlice,
    getShowCaseProducts: showCaseProductsSlice,
    getTypeItems: getTypesItemsSlice,
    loadMore: loadMoreSlice,
    filters: filterSlice,
    stateProducts: getStateProductsSlice,
    categoryProducts: getCategoryProductsSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store