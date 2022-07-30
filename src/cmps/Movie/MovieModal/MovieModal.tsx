import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/store";
import { getCurrMovie } from "../../../redux/movie.store";
import closeBtn from '../../../assets/icons/close-btn.png'
import ratingStar from '../../../assets/icons/rating-star.png'
import './MovieModal.scss'

export const MovieModal: FunctionComponent = () => {
    const { currMovie } = useSelector((state: RootState) => state.movies);

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if (!id) return;
        dispatch(getCurrMovie(id))
    }, [id])

    const handleClose = () => {
        navigate('/movie')
    }

    return <section className="movie-modal">
        {(currMovie && currMovie?.id === id) && <>
            <div className="modal-overlay" onClick={handleClose}></div>
            <div className="modal-container">
                <img className="close-btn" src={closeBtn} alt="close-button" onClick={handleClose} />
                <div className="modal-content">
                    <h2 className="title">{currMovie.title}</h2>
                    <p>{currMovie.description}</p>
                    <p>Released: {currMovie.released}</p>
                    <p>Language: {currMovie.language}</p>
                    <img className="movie-img" src={currMovie.img} alt='movie-img' />
                    <div className="rating-container">
                        <img className="rating-img" src={ratingStar} alt='rating-img' />
                        <p className="movie-rating">{currMovie.imdbRating}</p>
                    </div>
                </div>
            </div>
        </>
        }
    </section>
}