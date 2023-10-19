export const PokemonTable = ({pokemonInfo}) => {
    return (
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
    )
}