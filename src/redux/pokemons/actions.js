import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const fetchPokemons = createAsyncThunk(
    'pokemons/fetchPokemons',
    async (offset, thunkAPI) => {
        try {
            // console.log(offset);
            const response = await axios.get(`/pokemon/?offset=${offset}&limit=12`);
            // console.log(response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const getPokemonInfo = createAsyncThunk(
    'pokemons/getPokemonInfo',
    async (name, thunkAPI) => {
        try {
            const response = await axios.get(`pokemon/${name}`);
            // console.log(response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)