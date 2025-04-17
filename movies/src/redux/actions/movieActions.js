import { fetchMoviesApi } from '../../api/moviesApi';

export const FMR = 'FETCH_MOVIES_REQUEST';
export const FMS = 'FETCH_MOVIES_SUCCESS';
export const FMF = 'FETCH_MOVIES_FAILURE';
export const AM = 'ADD_MOVIES';

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch({ type: FMR });
    try {
      const data = await fetchMoviesApi();
      dispatch({ type: FMS, payload: data });
    } catch (error) {
      dispatch({ type: FMF, payload: error.message });
    }
  };
};

export const addMovies = (newMovie) => {
  const movie = { id: Date.now(), ...newMovie };
  return (dispatch) => {
    dispatch({ type: AM, payload: movie });
  };
};