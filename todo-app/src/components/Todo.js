import React from 'react'
import PropTypes from 'prop-types'
import CheckBox from './CheckBox'

const Todo = ({ onClick, completed, text }) => (
  <li
    /* onClick={onClick} */
    /* style={{
      textDecoration: completed ? 'line-through' : 'none'
    }} */
  >
    {text} <CheckBox onClick={onClick} content={completed ? '☑' : '☐'} />
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo