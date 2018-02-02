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
              
            >
            { todo.descripction }
            <button
              className="btn btn-primary"
              onClick={() => props.addToDone(todo.descripction)}
            >
              Hecho
            </button>
            </li> ) 
        }
      </ul>
      <p className="text-center">Total de pendientes: {props.todos.length}</p>
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