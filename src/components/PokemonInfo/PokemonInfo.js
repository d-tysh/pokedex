import { useEffect, useState } from "react"
import { PokemonTable } from "./PokemonTable";

export const PokemonInfo = ({selectedPokemon, pokemonsInfo}) => {
    const [pokemonInfo, setPokemonInfo] = useState(null);

    useEffect(() => {
        setPokemonInfo(pokemonsInfo.find(pokemon => pokemon.name === selectedPokemon));
    }, [pokemonsInfo, selectedPokemon]);

    return (
        <>
            <div className="p-2 border border-black w-[50%] sm:w-[25%] inline-block sticky top-8">
                <div className="border">
                    <img 
                        src={pokemonInfo?.sprites.other?.['dream_world']?.['front_default'] 
                            ? pokemonInfo?.sprites.other?.['dream_world']?.['front_default']
                            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
                        }    
                        alt={selectedPokemon} className="mx-auto" 
                    />
                </div>
                <p className="my-2 text-center font-bold text-xl">
                    {selectedPokemon[0].toUpperCase() + selectedPokemon.slice(1) + ` #` + (pokemonInfo?.id < 10 ? ('00' + pokemonInfo?.id) : pokemonInfo?.id)}
                </p>
                <PokemonTable pokemonInfo={pokemonInfo} />
            </div>
        </>
    )
}