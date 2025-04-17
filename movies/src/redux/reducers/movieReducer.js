import {
  FMR,
  FMS,
  FMF,
  AM,
} from '../actions/movieActions';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export const movieReducer = (state = initialState, { type, payload } = {}) => {

  switch (type) {
    case FMR:
      return { ...state, loading: true, error: null };
    case FMS:
      return { ...state, loading: false, dataMovies: payload };
    case FMF:
      return { ...state, loading: false, error: payload };
    case AM:
      const { dataMovies } = state;
      const { moviesList } = dataMovies;
      return {
        ...state,
        dataMovies: {
          ...dataMovies,
          moviesList: [...moviesList, payload]
        }
      };

    default:
      return state;
  };

};