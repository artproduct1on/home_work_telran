import { lazy, Suspense, useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner";
import { fetchMovies } from './redux/actions/movieActions';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const AddMovies = lazy(() => import('./pages/AddMovies'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#b2102f',
      },
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:genre" element={<Movies />} />
        <Route path="/add" element={<AddMovies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </ThemeProvider >

};




