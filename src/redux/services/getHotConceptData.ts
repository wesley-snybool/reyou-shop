import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'portal/home/conceitos-alta'

export const GetHotConceptData = createAsyncThunk(
    'hotconcept/getHotConceptsData', async () => await axios.get(`${BASE_URL}/portal/home/conceitos-alta`)
);
