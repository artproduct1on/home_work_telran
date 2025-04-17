import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


function TabsMovies({ tabs }) {

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
        to={`/`}
        component={NavLink}
        sx={{
          width: '100%',
          minWidth: 100,
          whiteSpace: 'nowrap',
          "&.active": {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText'
          }
        }}
      >
        All
      </Button>


      {tabs?.map((tab) => (
        <Button
          key={tab}
          to={`/movies/${tab}`}
          component={NavLink}
          sx={{
            width: '100%',
            minWidth: 100,
            whiteSpace: 'nowrap',
            "&.active": {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText'
            }
          }}
        >
          {tab}
        </Button>
      ))}
    </Box>
  )

}

export default TabsMovies;