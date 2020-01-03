import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  ADD_CHECKLISTCHILDREN,
  TOGGLE_CHECKLISTCHILDREN,
  VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

let nextTodoId = 0;

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: ++nextTodoId,
          text: action.text,
          completed: false,
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

let nextCheckListChildrenId = 0;

function checks(state = [], action){
  switch(action.type){
    case ADD_CHECKLISTCHILDREN:
      return [
        ...state,
        {
          pId: action.parentComponentId,
          id: ++nextCheckListChildrenId,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_CHECKLISTCHILDREN:
      return state.map((check) => {
        if(check.id === action.id){
          return Object.assign({}, check, {
            completed: !check.completed
          })
        }
        return check
      }) 
    default :
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  checks
})

export default todoApp