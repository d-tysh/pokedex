const { createSlice } = require("@reduxjs/toolkit");
const { fetchPokemons, getTypes } = require("./actions");

const pokemonInitState = {
    pokemonsList: [],
    loading: false,
    error: null,
    offset: 0,
    totalPokemons: 0,
    page: 1,
    pokemonsTypes: []
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
                state.offset = state.offset + 12;
                state.page = state.page + 1;
                state.totalPokemons = action.payload.count;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchPokemons.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })

            .addCase(getTypes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTypes.fulfilled, (state, action) => {
                state.pokemonsTypes = action.payload.results.map(type => type.name);
                state.loading = false;
                state.error = null;
            })
            .addCase(getTypes.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const pokemonsReducer = pokemonsSlice.reducer;