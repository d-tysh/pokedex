const { createSlice } = require("@reduxjs/toolkit");
const { fetchPokemons, getTypes, getPokemonsByFilter } = require("./actions");

const pokemonInitState = {
    pokemonsList: [],
    loading: false,
    error: null,
    offset: 0,
    totalPokemons: 0,
    page: 1,
    pokemonsTypes: [],
    filteredPokemons: []
}

const handlePending = (state) => {
    state.loading = true;
    state.error = null;
}

const handleRejected = (state) => {
    state.loading = false;
    state.error = true;
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: pokemonInitState,
    extraReducers: builder => {
        builder
            .addCase(fetchPokemons.pending, handlePending)
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.pokemonsList = [...state.pokemonsList, ...action.payload.results];
                state.offset = state.offset + 12;
                state.page = state.page + 1;
                state.totalPokemons = action.payload.count;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchPokemons.rejected, handleRejected)

            .addCase(getTypes.pending, handlePending)
            .addCase(getTypes.fulfilled, (state, action) => {
                state.pokemonsTypes = action.payload.results.map(type => type.name);
                state.loading = false;
                state.error = null;
            })
            .addCase(getTypes.rejected, handleRejected)

            .addCase(getPokemonsByFilter.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPokemonsByFilter.fulfilled, (state, action) => {
                state.filteredPokemons = [...action.payload.pokemon.map(item => {
                    return {
                        name: item.pokemon.name,
                        url: item.pokemon.url
                    }})];
                state.loading = false;
                state.error = null;
            })
            .addCase(getPokemonsByFilter.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const pokemonsReducer = pokemonsSlice.reducer;