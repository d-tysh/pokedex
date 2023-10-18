import { PokemonListItem } from "components/PokemonListItem/PokemonListItem"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPokemons } from "redux/pokemons/actions";
import { selectLoading, selectPokemons } from "redux/pokemons/selectors";

export const PokemonList = ({setSelectedPokemon}) => {
    const pokemons = useSelector(selectPokemons);
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();

    const [offset, setOffset] = useState(0);
    
    useEffect(() => {
        dispatch(fetchPokemons(offset));
        setOffset(offset => offset + 12);
        // eslint-disable-next-line
    }, [])

    const loadMorePokemons = () => {
        dispatch(fetchPokemons(offset));
        setOffset(offset => offset + 12);
    } 

    return (
        <div className="w-[70%]">
            {
                loading ? <div>loading...</div> :
                <>
                    <ul className="flex gap-4 flex-wrap mb-4">
                        {
                            pokemons.map((pokemon) => <li 
                                key={pokemon.name} 
                                onClick={() => setSelectedPokemon(pokemon.name)} 
                                className="w-[calc((100%-32px)/3)] border border-black py-3 px-2 cursor-pointer">
                                    <PokemonListItem pokemon={pokemon} />
                            </li>)
                        }
                    </ul>
                </>
            }
            <button 
                className="w-[100%] px-4 py-2 font-bold border rounded-md text-white bg-[#008cff] hover:bg-blue-700" 
                type='button'
                onClick={loadMorePokemons}
            >Load More</button>
        </div>
    )
}