import axios from "axios";
import { useEffect, useState } from "react"

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
            {loading && <div>loading...</div>}
            {!loading && <div className="p-2 border border-black w-[50%] sm:w-[25%] inline-block sticky top-8">
                <div className="border">
                    <img 
                        src={pokemonInfo?.sprites?.other?.['dream_world']?.['front_default']} 
                        alt="Pokemon info img" className="mx-auto" 
                    />
                </div>
                <p className="my-2 text-center font-bold text-xl">{selectedPokemon[0].toUpperCase() + selectedPokemon.slice(1)}</p>
                <table className="w-[100%] border">
                    <thead className="text-center">
                        <tr>
                            <td className="border border-black w-[75%]">Type</td>
                            <td className="border border-black w-[25%]">Fire</td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            pokemonInfo?.stats?.map(stat => <tr key={stat.stat.name} className="border">
                                <td className="border border-black">{stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1)}</td>
                                <td className="border border-black">{stat?.['base_stat']}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>}
        </>
    )
}