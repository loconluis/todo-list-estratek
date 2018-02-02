import React from 'react';
import { connect } from 'react-redux';
// actions
import { removeToDone } from '../actions'

const DoneList = (props) => {
  return (
    <div>
      <ul className="list-group">
      {
        props.dones.length === 0 ? '' : props.dones.map(done => (
          <li
            className="list-group-item"
            key={done + 'key'}
          >
            { done }
            <button
              className="btn btn-primary"
              onClick={() => props.removeToDone(done)}
            >
              No Hecho
            </button>
          </li>
        ))
      }
      </ul>
      <p>Tareas Realizadas {props.dones.length}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    dones: state.doneReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeToDone: (description) => dispatch(removeToDone(description))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneList);