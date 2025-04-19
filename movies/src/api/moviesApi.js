const api = "https://www.freetestapi.com/api/v1/movies";

export const fetchMoviesApi = async () => {
  try {

    const response = await fetch(api);

    if (!response.ok) throw new Error('Failed to fetch movies');

    const moviesList = await response.json();

    const genreList = [
      ...new Set(moviesList.map(movie => movie.genre).flat())
    ];

    return { moviesList, genreList };

  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
};