import { Button } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <Typography variant="h4">Page not found 404</Typography>
      <Button to="/" component={Link}>Back to Home</Button>
    </Container>
  )
}

export default NotFound