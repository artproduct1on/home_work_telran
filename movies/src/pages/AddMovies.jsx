import React, { use, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Checkbox from '@mui/material/Checkbox'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { addMovies } from '../redux/actions/movieActions'

function AddMovies() {
  const dispatch = useDispatch();
  const { dataMovies } = useSelector((state) => state.movies);
  const [done, setDone] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    poster: '',
    plot: '',
    genre: []
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
    if (done) setDone(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovies(newMovie));
    setNewMovie({ title: '', poster: '', plot: '', genre: [] });
    setDone(true);
  };

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "flex-start",
      alignItems: 'center',
      gap: 2,
      pt: 3,
    }}>
      <Button
        to="/"
        component={NavLink}
        size="large"
        variant="outlined"
      >
        <ArrowBackIcon />
        Come back
      </Button>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "flex-start",
          alignItems: 'center',
          width: 300,
          gap: 1,
          pt: 3
        }}
      >
        <Typography
          variant="h6"
          color={done ? "success.main" : "primary.main"}
        >{done ? "Movie added!" : "Add a movie"}</Typography>
        <TextField
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
          onChange={handleChange}
          value={newMovie.title}
          required
        />
        <FormControl
          fullWidth sx={{ maxWidth: "100%" }}
          required
        >
          <InputLabel id="genre">Genre</InputLabel>
          <Select
            multiple
            labelId="genre"
            name="genre"
            label="Genre"
            variant="outlined"
            onChange={handleChange}
            value={newMovie.genre}
            input={<OutlinedInput label="Genres" />}
          >
            {
              dataMovies?.genreList.map(genre =>
                <MenuItem value={genre}>
                  <Checkbox checked={newMovie.genre.indexOf(genre) > -1} />
                  {genre}
                </MenuItem>
              )
            }
          </Select>
        </FormControl>

        <TextField
          fullWidth
          name="poster"
          label="Poster"
          variant="outlined"
          onChange={handleChange}
          value={newMovie.poster}
          required
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          name="plot"
          label="Plot"
          variant="outlined"
          onChange={handleChange}
          value={newMovie.plot}
          required
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
        > Add movie
        </Button>
      </Box>

    </Container >
  )
}

export default AddMovies