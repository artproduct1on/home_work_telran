import React from 'react'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function CardMovies({ movie }) {
  return (
    <ListItem
      sx={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderRadius: 3,
        backgroundColor: "background.default",
        boxShadow: 2,
        gap: 1
      }}
    >
      <Avatar
        variant="rounded"
        src={movie.poster}
        alt={movie.title}
        sx={{
          width: "100%",
          height: 120
        }}
      />

      <ListItemText
        primary={movie.title}
        secondary={movie.plot}
      />
      <ListItemText
        primary={movie.genre.join(', ')}
      />
      <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
        <Rating
          defaultValue={2.5}
          value={movie.rating / 2}
          precision={0.2}
          readOnly
        />
        <Typography variant="body2" sx={{ ml: 2 }}>{movie.rating}</Typography>
      </Box>
    </ListItem>
  )
}

export default CardMovies