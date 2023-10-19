import axios from "axios";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react"
import { PokemonTable } from "./PokemonTable";

export const PokemonInfo = ({selectedPokemon}) => {
    const [pokemonInfo, setPokemonInfo] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // console.log('render');
        setLoading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
            .then(response => {
                setLoading(false);
                setPokemonInfo(response.data);
            })
            .catch(e => console.error(e))
            .finally(() => setLoading(false));
    }, [selectedPokemon])

    return (
        <>
            {loading && <Loader />}
            {!loading && <div className="p-2 border border-black w-[50%] sm:w-[25%] inline-block sticky top-8">
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
            </div>}
        </>
    )
}