import React from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import {Toolbar, Paper, Typography, AppBar, Container, Box} from '@material-ui/core'
// import Toolbar from '@material-ui/core/Toolbar'
// import Card from '@material-ui/core/Card'
// import Typography from '@material-ui/core/Typography'
// import AppBar from '@material-ui/core/AppBar'
// import Container from '@material-ui/core/Container'
// import Box from '@material-ui/core/Box'
import VisibleTodoList from '../containers/VisibleTodoList'

// const useStyles = makeStyles({
//   myContainer:{
//     margin:48,
//   },
// });

const App = () => (
  <div>
    <AppBar color="primary" position="relative">
      <Toolbar>
        <Typography variant="title">
          TODO-DOIT
        </Typography>
      </Toolbar>
    </AppBar>
    <Box p={1} m={5}>
      <Container maxWidth="md">
        <Paper style={{margin: 16, padding: 16}}>
          <AddTodo />
          <Footer />
        </Paper>
        <VisibleTodoList />
      </Container>
    </Box>
  </div>
)
  


export default App;
