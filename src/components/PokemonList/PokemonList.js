import { PokemonListItem } from "components/PokemonListItem/PokemonListItem"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPokemons, getTypes } from "redux/pokemons/actions";
import { selectLoading, selectOffset, selectPage, selectPokemons, selectTotalPokemons, selectTypes } from "redux/pokemons/selectors";

export const PokemonList = ({setSelectedPokemon}) => {
    const pokemons = useSelector(selectPokemons);
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();
    const offset = useSelector(selectOffset);
    const totalPokemons = useSelector(selectTotalPokemons);
    const page = useSelector(selectPage);
    const pokemonsTypes = useSelector(selectTypes);
    
    useEffect(() => {
        dispatch(fetchPokemons(offset));
        dispatch(getTypes());
    // eslint-disable-next-line
    }, [])

    // console.log(pokemonsTypes);
    const typesInfo = pokemonsTypes.map(type => {
        return {
            name: type,
            color: '#' + Math.floor(Math.random()*16777215).toString(16)
        }
    })

    // const typesInfo = useMemo(() => {
    //     pokemonsTypes.map(type => {
    //         return {
    //             name: type,
    //             color: '#' + Math.floor(Math.random()*16777215).toString(16)
    //         }
    //     })
    // }, [pokemonsTypes])

    const loadMorePokemons = () => {
        dispatch(fetchPokemons(offset));
    } 

    return (
        <div className="w-[70%]">
            {
                loading && <div>loading...</div>
            }
            {
                
                pokemons && <ul className="flex gap-4 flex-wrap mb-4">
                        {
                            pokemons.map((pokemon) => <li 
                                key={pokemon.name} 
                                onClick={() => setSelectedPokemon(pokemon.name)} 
                                className="w-[90%] sm:w-[calc((100%-16px)/2)] md:w-[calc((100%-32px)/3)] border border-black py-3 px-2 cursor-pointer">
                                    <PokemonListItem pokemon={pokemon} typesInfo={typesInfo} />
                            </li>)
                        }
                    </ul>
                
            }
            {
                !loading && ((page - 1) < (totalPokemons / 12)) && <button 
                    className="w-[100%] px-4 py-2 font-bold border rounded-md text-white bg-[#008cff] hover:bg-blue-700" 
                    type='button'
                    onClick={loadMorePokemons}
                >Load More</button>
            }
        </div>
    )
}