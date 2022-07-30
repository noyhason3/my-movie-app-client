import { FunctionComponent } from "react";
import { IMovie } from "../../../models/movie.model";
import ratingStar from '../../../assets/icons/rating-star.png'
import './MoviePreview.scss'

interface IMoviePreviewProps {
    movie: IMovie
}

export const MoviePreview: FunctionComponent<IMoviePreviewProps> = ({ movie }) => {

    return <section className="movie-preview">
        <div className="movie-data">
            <h2 className="movie-title title">{movie.title}</h2>
            <p className="movie-description">{movie.description}</p>
            <div className="rating-container">
                <img className="rating-img" src={ratingStar} alt='rating-img' />
                <p className="movie-rating">{movie.imdbRating}</p>
            </div>
        </div>
        <img className="movie-img" src={movie.img} alt='movie-img' />
    </section>
}