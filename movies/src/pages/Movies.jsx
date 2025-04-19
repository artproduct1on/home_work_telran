import { Fragment, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Spinner from '../components/Spinner';
import TabsMovies from '../components/TabsMovies';
import CardMovies from '../components/CardMovies';

function Movies() {
  const { genre } = useParams();
  const { dataMovies, loading, error } = useSelector((state) => state.movies);
  const navigate = useNavigate();

  useEffect(() => {
    if (genre && !dataMovies?.genreList.includes(genre)) {
      navigate('/notfound', { replace: true });
    }
  }, [genre, dataMovies?.genreList, navigate]);


  if (loading) return <Spinner />;

  if (error) return <Typography variant="h4">Error: {error}</Typography>;

  return (
    <Container>
      <TabsMovies tabs={dataMovies?.genreList} genre={genre} />
      <Fab
        to="/add"
        component={NavLink}
        size="large"
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        <AddIcon fontSize='large' />
      </Fab>
      <List
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 2,
        }}
      >
        {dataMovies?.moviesList.map((movie) => {

          if (genre) {
            return movie.genre.includes(genre) ?
              <CardMovies key={movie.id} movie={movie} /> :
              <Fragment key={movie.id}></Fragment>
          }

          return <CardMovies key={movie.id} movie={movie} />;
        }
        )}
      </List>

    </Container>
  )
}

export default Movies;