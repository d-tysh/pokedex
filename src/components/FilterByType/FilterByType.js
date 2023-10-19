import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getPokemonsByFilter } from "redux/pokemons/actions";

export const FilterByType = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!e.target.filter.value) {
            toast.info('Enter filter!');
            return;
        }
        dispatch(getPokemonsByFilter(e.target.filter.value.toLowerCase()));
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-1 mb-4 mx-auto">
            <input type="text" name='filter' className="border hover:border-blue-700 px-2" />
            <button className="border rounded text-white px-3 bg-[#008cff] hover:bg-blue-700">Filter</button>
        </form>
    )
}