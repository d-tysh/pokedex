import axios from "axios";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
// import cn from 'classnames';

export const PokemonListItem = ({pokemon, typesInfo}) => {
    const [pokemonInfo, setPokemonInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then(response => {
                setLoading(false);
                setPokemonInfo(response.data);
            })
            .catch(e => console.error(e))
            .finally(() => setLoading(false));
            
    // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="flex flex-col items-center">
                {loading ? <Loader /> : 
                    <div className="border w-[calc(100%-8px)] mb-2">
                        <img 
                            src={pokemonInfo?.sprites.other?.['dream_world']?.['front_default'] 
                                ? pokemonInfo?.sprites.other?.['dream_world']?.['front_default']
                                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
                            } 
                            alt={pokemon.name} 
                            className="w-20 h-20 mx-auto" />
                    </div>}
                <p className="font-bold">{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}</p>
            </div>
            {
                loading ? <Loader /> :
                <div className="flex gap-1 flex-wrap">
                {
                    pokemonInfo?.types.map(type => <span 
                        key={type.type.name}
                        className="px-2 py-1 rounded-md text-xs border"
                        style={{background: `linear-gradient(white, ${typesInfo?.find(item => type.type.name === item.name).color})`}}
                    >
                        {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                    </span>)
                }
            </div>
            }
        </> 
    )
}