export const selectPokemons = state => state.pokemons.pokemonsList;
export const selectLoading = state => state.pokemons.loading;
export const selectError = state => state.pokemons.error;
export const selectOffset = state => state.pokemons.offset;
export const selectTotalPokemons = state => state.pokemons.totalPokemons;
export const selectPage = state => state.pokemons.page;
export const selectTypes = state => state.pokemons.pokemonsTypes; 
export const selectFilteredPokemons = state => state.pokemons.filteredPokemons;