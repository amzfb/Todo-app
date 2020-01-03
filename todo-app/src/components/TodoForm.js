import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
        <TextField
          inputRef={node => {
            input = node
          }}
        />
        <Button variant="contained" color="secondary" type="submit">Add</Button>
      </form>
);

// TodoForm.PropTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

export default TodoForm;