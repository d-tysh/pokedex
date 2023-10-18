import axios from "axios";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-reduxemons/selectors";

export const PokemonListItem = ({pokemon}) => {
    const [pokemonInfo, setPokemonInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    // const dispatch = useDispatch();
    
    useEffect(() => {
        // dispatch(getPokemonInfo(pokemon.name))
        setLoading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then(response => {
                setLoading(false);
                // console.log(response.data);
                setPokemonInfo(response.data);
            })
            
    // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="flex flex-col items-center">
                {loading ? <div>Loading...</div> : <div className="border w-[calc(100%-8px)] mb-2">
                        <img src={pokemonInfo?.sprites.other?.['dream_world']?.['front_default']} alt="Pokemon name" className="w-20 h-20 mx-auto" />
                    </div>}
                <p className="font-bold">{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}</p>
            </div>
            {
                loading ? <div>Loading...</div> :
                <div className="flex gap-1 flex-wrap">
                {
                    pokemonInfo?.types.map(type => <span key={type.type.name} className="px-2 py-1 bg-orange-400 rounded-md text-xs">
                        {type.type.name}
                    </span>)
                }
            </div>
            }
        </> 
    )
}