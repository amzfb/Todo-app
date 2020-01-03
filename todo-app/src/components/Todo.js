import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';
//import CheckList from './CheckList';

const Todo = ({pId, onCheckBoxClick, completed, text, checks, onCheckClick, onCheckListSubmit}) => (
  <li
    /* onClick={onClick} */
    /* style={{
      textDecoration: completed ? 'line-through' : 'none'
    }} */
  >
    <CheckBox onClick={onCheckBoxClick} content={completed ? '☑' : '☐'} /> {text} 
    {/* <br />
    <CheckList 
    pComponentId={pId} 
    checks={checks} 
    onCheckClick={onCheckClick} 
    onCheckListSubmit={onCheckListSubmit} 
     /> */}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo