import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, checks, onTodoClick, onCheckClick, onCheckListSubmit }) => (
  <ul>
    {todos.map((todo) => (
      <Todo 
      key={todo.id} 
      text={todo.text} 
      completed={todo.completed} 
      onCheckBoxClick={() => onTodoClick(todo.id)} 
      pId={todo.id}
      checks={checks} 
      onCheckClick={onCheckClick} 
      onCheckListSubmit={onCheckListSubmit} 
      
      />
    ))}
  </ul>
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