import { configureStore } from "@reduxjs/toolkit";
import { pokemonsReducer } from "./pokemons/slice";

export const store = configureStore({
    reducer: {
        pokemons: pokemonsReducer
    }
})