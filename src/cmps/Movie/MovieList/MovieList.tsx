import { FunctionComponent } from "react";
import { IMovie } from "../../../models/movie.model";
import { MoviePreview } from "../MoviePreview/MoviePreview";
import { Link } from "react-router-dom";
import './MovieList.scss'

interface IMovieListProps {
    movies: IMovie[]
}

export const MovieList: FunctionComponent<IMovieListProps> = ({ movies }) => {
    return <ul className="movie-list">
        {movies.length ? movies.map((movie: IMovie, idx: number) => {
            return (
                <li className="list-item" key={movie.id || idx}>
                    <Link to={movie.id} className='link' >
                        <MoviePreview movie={movie} />
                    </Link>
                </li>
            );
        }) : <h2>No data matches the request</h2>}
    </ul>
}