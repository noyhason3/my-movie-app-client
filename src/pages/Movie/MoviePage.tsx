import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { MovieList } from "../../cmps/Movie/MovieList/MovieList";
import { getAllMovies } from "../../redux/movie.store";
import { AppDispatch, RootState } from "../../redux/store";

export const MoviePage: FunctionComponent = () => {
    const { movies } = useSelector((state: RootState) => state.movies)
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies())
    }, [])

    return <section className="movie-page">
        <MovieList movies={movies} />
        <Outlet />
    </section>
}