import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TodoForm  from '../components/TodoForm';

// let AddTodo = ({ dispatch }) => {
//   let input

//   return (
//     <div>
//       <form
//         onSubmit={e => {
//           e.preventDefault()
//           if (!input.value.trim()) {
//             return
//           }
//           dispatch(addTodo(input.value))
//           input.value = ''
//         }}
//       >
//         <input
//           ref={node => {
//             input = node
//           }}
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//     </div>
//   )
// }

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