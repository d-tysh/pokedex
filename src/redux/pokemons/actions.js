import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const fetchPokemons = createAsyncThunk(
    'pokemons/fetchPokemons',
    async (offset, thunkAPI) => {
        try {
            const response = await axios.get(`/pokemon/?offset=${offset}&limit=12`);
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
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const getPokemonsByFilter = createAsyncThunk(
    'pokemons/getPokemonsByFilter',
    async (type, thunkAPI) => {
        try {
            const response = await axios.get(`type/${type}`);
            return response.data;
        } catch (e) {
            toast.error(`No data for "${type}"`);
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)