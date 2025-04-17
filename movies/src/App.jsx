import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner";
import { fetchMovies } from './redux/actions/movieActions';

const Movies = lazy(() => import('./pages/Movies'));
const AddMovies = lazy(() => import('./pages/AddMovies'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:genre" element={<Movies />} />
        <Route path="/add" element={<AddMovies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )

};




