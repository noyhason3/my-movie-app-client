import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import homeImg from '../../assets/imgs/home-img.png'
import './Home.scss'

export const Home: FunctionComponent = () => {

    return <section className="home">
        <div className="main">
            <img src={homeImg} alt="home-img" />
            <div className="container">
                <div className="title-container">
                    <p className="title">
                        Movies online - Take a look of our best movies
                    </p>
                </div>
                <Link to={'/movie'} className="arrow-link">
                    <div className="icon ">
                        <div className="arrow"></div>
                    </div>
                </Link>
            </div>
        </div>
    </section>
}