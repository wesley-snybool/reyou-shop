import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from './userSlice'
import useReduceHotConcepts from './hotConceptsSlice';

const store =  configureStore({
  reducer: {
    userTest: userReducer,
    HotConcept: useReduceHotConcepts,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store