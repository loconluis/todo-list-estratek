import React from 'react';
import { connect } from 'react-redux';
// actions
import { removeToDone } from '../actions'

const DoneList = (props) => {
  return (
    <div className="list-area">
      <ul className="list-group">
      {
        props.dones.length === 0 ? '' : props.dones.map(done => (
          <li
            className="list-group-item"
            key={done + 'key'}
          >
            <div className="list-flex">
              { done }
              <button
                className="btn btn-danger"
                onClick={() => props.removeToDone(done)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </li>
        ))
      }
      </ul>
      <p>Tareas Realizadas <strong>{props.dones.length}</strong></p>
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