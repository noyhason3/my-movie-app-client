import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { getAllMovies, getSearchedMovie } from "../../../redux/movie.store";
import { AppDispatch } from "../../../redux/store";
import './SearchMovie.scss'

export const SearchMovie: FunctionComponent = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.toLocaleLowerCase();
        val ? dispatch(getSearchedMovie(val)) : dispatch(getAllMovies())
    }

    return <section className="search-movie">
        <label htmlFor="search-input">
            <input placeholder="Search" id="search-input" type='text' onChange={(e) => handleSearch(e)} />
        </label>
    </section>
}