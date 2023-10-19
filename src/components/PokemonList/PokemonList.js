import { Loader } from "components/Loader/Loader";
import { PokemonListItem } from "components/PokemonListItem/PokemonListItem"
import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPokemons, getTypes } from "redux/pokemons/actions";
import { selectFilteredPokemons, selectLoading, selectOffset, selectPage, selectPokemons, selectTotalPokemons, selectTypes } from "redux/pokemons/selectors";

export const PokemonList = ({setSelectedPokemon}) => {
    const pokemons = useSelector(selectPokemons);
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();
    const offset = useSelector(selectOffset);
    const totalPokemons = useSelector(selectTotalPokemons);
    const page = useSelector(selectPage);
    const pokemonsTypes = useSelector(selectTypes);
    const filteredPokemons = useSelector(selectFilteredPokemons);
    
    useEffect(() => {
        dispatch(fetchPokemons(offset));
        dispatch(getTypes());
    // eslint-disable-next-line
    }, [])

    const typesInfo = useMemo(
        () => pokemonsTypes.map(type => {
            return {
                name: type,
                color: '#' + Math.floor(Math.random()*16777215).toString(16)
            }
    }), [pokemonsTypes]);

    const loadMorePokemons = () => {
        dispatch(fetchPokemons(offset));
    } 

    const visiblePokemons = filteredPokemons?.length ? filteredPokemons : pokemons;
    
    return (
        <div className="w-[70%]">
            {
                loading && <Loader />
            }
            {
                visiblePokemons?.length && visiblePokemons && <ul className="flex gap-4 flex-wrap mb-4">
                        {
                            visiblePokemons.map((pokemon) => <li 
                                key={pokemon.name} 
                                onClick={() => setSelectedPokemon(pokemon.name)} 
                                className="w-[90%] sm:w-[calc((100%-16px)/2)] md:w-[calc((100%-32px)/3)] border border-black pt-3 pb-6 px-2 cursor-pointer">
                                    <PokemonListItem pokemon={pokemon} typesInfo={typesInfo} />
                            </li>)
                        }
                    </ul>
            }
            {
                loading && <Loader />
            }
            {
                !loading && !filteredPokemons.length && ((page - 1) < (totalPokemons / 12)) && <button 
                    className="w-[90%] sm:w-[100%] px-4 py-2 font-bold border rounded-md text-white bg-[#008cff] hover:bg-blue-700" 
                    type='button'
                    onClick={loadMorePokemons}
                >Load More</button>
            }
        </div>
    )
}