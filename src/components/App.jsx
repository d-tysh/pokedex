import { useState } from "react";
import { Header } from "./Header/Header";
import { PokemonInfo } from "./PokemonInfo/PokemonInfo";
import { PokemonList } from "./PokemonList/PokemonList";
import { FilterByType } from "./FilterByType/FilterByType";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div className="mx-auto p-8 flex flex-col max-w-[1200px]">
      <Header />
      <FilterByType />
      <div className="flex justify-between items-start relative">
        <PokemonList setSelectedPokemon={setSelectedPokemon} />
        { selectedPokemon && <PokemonInfo selectedPokemon={selectedPokemon} /> }
      </div>
      <ToastContainer />
    </div>
  );
};
