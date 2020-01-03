import React from 'react';
import PropTypes from 'prop-types';
// import CheckBox from './CheckBox';
import green from '@material-ui/core/colors/green'
import Done from '@material-ui/icons/Done'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank'
import ListItemText from '@material-ui/core/ListItemText'
//import CheckList from './CheckList';

let buttonActivate = true;

const CheckCompleted = (completed) => {
  if(completed){
    return(
      <ListItemIcon>
        <Done nativeColor={green[500]} />
      </ListItemIcon>
    );
  }else{
    return (
      <ListItemIcon>
        <CheckBoxOutlineBlank />
      </ListItemIcon>
    );
  }
}

const Todo = ({pId, onTodoClick, completed, text, checks, onCheckClick, onCheckListSubmit}) => (
  <ListItem
    onClick={onTodoClick} 
    button={buttonActivate}
    /* style={{
      textDecoration: completed ? 'line-through' : 'none'
    }} */
  >
    {/* <CheckBox onClick={onCheckBoxClick} completed={completed} />  */}
    {CheckCompleted(completed)}
    <ListItemText>
      {text} 
    </ListItemText>
    
    {/* <br />
    <CheckList 
    pComponentId={pId} 
    checks={checks} 
    onCheckClick={onCheckClick} 
    onCheckListSubmit={onCheckListSubmit} 
     /> */}
  </ListItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo