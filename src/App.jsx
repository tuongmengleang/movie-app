import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/Main'
import IndexPage from './pages/Index'
import NewsPage from './pages/News'
import MoviesPage from './pages/Movies'
import SeriesPage from './pages/Series'
import CartoonsPage from './pages/Cartoons'
import DetailPage from './pages/Detail'

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<IndexPage />}></Route>
          <Route path="movie/:id" element={<DetailPage />}></Route>
          <Route path="news" element={<NewsPage />}></Route>
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="series" element={<SeriesPage />}></Route>
          <Route path="cartoons" element={<CartoonsPage />}></Route>
        </Route>
    </Routes>
  );
}

export default App;
