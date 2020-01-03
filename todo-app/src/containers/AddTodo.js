import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TodoForm  from '../components/TodoForm';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (text) => {
      dispatch(addTodo(text))
    }
  }
}

const AddTodo = connect(
  null,
  mapDispatchToProps
  )(TodoForm)

export default AddTodo