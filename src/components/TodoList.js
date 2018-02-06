import React from 'react';
import { connect } from 'react-redux';
// actions
import { addToDone } from '../actions'

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {
          props.todos.map((todo, i) => 
            <li 
              className="list-group-item"
              key={todo.descripction}
            >
            <div className="list-flex">
              { todo.descripction }
              <button
                className="btn btn-success"
                onClick={() => props.addToDone(todo.descripction)}
              >
                <i className="fas fa-check"></i>
              </button>
            </div>
            </li> ) 
        }
      </ul>
      <p className="text-center">Total de pendientes: <strong>{props.todos.length}</strong></p>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todoReducer,
})

const mapDispatchToProps = dispatch => ({
  addToDone: (description) => dispatch(addToDone(description))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);