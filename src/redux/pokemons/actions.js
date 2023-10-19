import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const fetchPokemons = createAsyncThunk(
    'pokemons/fetchPokemons',
    async (offset, thunkAPI) => {
        try {
            const response = await axios.get(`/pokemon/?offset=${offset}&limit=12`);
            console.log(response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const getTypes = createAsyncThunk(
    'pokemons/getTypes',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`type/`);
            // console.log(response.data.results.map(type => type.name));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)