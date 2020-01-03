import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import {List, Paper} from '@material-ui/core'

const TodoList = ({ todos, checks, onTodoClick, onCheckClick, onCheckListSubmit }) => (
  <Paper style={{ margin: 16 }}>
    <List>
      {todos.map((todo) => (
        <Todo 
        key={todo.id} 
        text={todo.text} 
        completed={todo.completed} 
        onTodoClick={() => onTodoClick(todo.id)} 
        pId={todo.id}
        checks={checks} 
        onCheckClick={onCheckClick} 
        onCheckListSubmit={onCheckListSubmit} 
        
        />
      ))}
    </List>
  </Paper>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList