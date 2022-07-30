import { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchMovie } from "../Movie/SearchMovie/SearchMovie";
import './Header.scss'

export const Header: FunctionComponent = () => {
    const location = useLocation();

    return <section className="header">
        <div className="nav-bar title">
            <Link className="link" to='/'>
                Home
            </Link>
            <Link className="link" to='/movie'>
                Movies
            </Link>
        </div>
            {location && location?.pathname?.includes('movie') ? <SearchMovie /> : <></>}
    </section>
}