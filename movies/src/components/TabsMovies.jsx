import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function TabsMovies({ tabs, genre }) {

  return (
    <Box
      border={1}
      borderColor="divider"
      borderRadius={1}
      sx={{
        display: 'flex',
        gap: 2,
        my: 2,
        p: 1,
        backgroundColor: 'background.paper',
        flexWrap: 'nowrap',
        overflowX: 'auto'
      }}
    >
      <Button
        to={`/movies`}
        component={Link}
        sx={{
          width: '100%',
          minWidth: 100,
          whiteSpace: 'nowrap',
          backgroundColor: !genre ? 'primary.main' : '',
          color: !genre ? 'primary.contrastText' : '',
        }}
      >
        All
      </Button>


      {tabs?.map((tab) => (
        <Button
          key={tab}
          to={`/movies/${tab}`}
          component={Link}
          sx={{
            width: '100%',
            minWidth: 100,
            whiteSpace: 'nowrap',
            backgroundColor: genre === tab ? 'primary.main' : '',
            color: genre === tab ? 'primary.contrastText' : '',
          }}
        >
          {tab}
        </Button>
      ))}
    </Box>
  )

}

export default TabsMovies;