const { createSlice } = require("@reduxjs/toolkit");
const { fetchPokemons, getPokemonInfo } = require("./actions");

const pokemonInitState = {
    pokemonsList: [],
    loading: false,
    error: null,
    // offset: 0
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: pokemonInitState,
    extraReducers: builder => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.pokemonsList = [...state.pokemonsList, ...action.payload.results];
                state.nextUrl = action.payload.next;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchPokemons.rejected, (state) => {
                state.error = true;
            })

            .addCase(getPokemonInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPokemonInfo.fulfilled, (state, action) => {
                state.pokemonsInfo.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(getPokemonInfo.rejected, (state) => {
                state.error = true;
            })
    }
})

export const pokemonsReducer = pokemonsSlice.reducer;