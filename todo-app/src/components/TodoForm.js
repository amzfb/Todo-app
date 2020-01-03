import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core'

let input;

const TodoForm = ({onSubmit}) => (
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          onSubmit(input.value.trim());
          input.value = ''
        }}
      >
        <Grid container>
          <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
            <TextField
            fullWidth
            placeholder="Enter your task"
            inputRef={node => {
              input = node
            }}
            />
          </Grid>
          <Grid xs={2} md={1} item>
            <Button variant="contained" color="secondary" type="submit">
            Add
            </Button>
          </Grid>
        </Grid>
      </form>
);

// TodoForm.PropTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

export default TodoForm;