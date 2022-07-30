import { MoviePage } from './pages/Movie/MoviePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieModal } from './cmps/Movie/MovieModal/MovieModal';
import { Header } from './cmps/Header/Header';
import { Home } from './pages/Home/Home';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie" element={<MoviePage />} >
            <Route path=":id" element={<MovieModal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
