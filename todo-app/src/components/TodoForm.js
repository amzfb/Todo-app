import React from 'react';
// import PropTypes from 'prop-types'
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
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
);

// TodoForm.PropTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

export default TodoForm;