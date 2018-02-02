import { combineReducers } from 'redux'; 

// todo reducer
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TODOS':
      let todos = [...action.todos]
      return todos;
    case 'ADD_DONE':
      todos = state.filter(item => item.descripction !== action.description);
      return todos;
    case 'REMOVE_DONE':
      todos = [...state, { 'descripction': action.description }];
      return todos;
    default:
      return state;
  }
}

const doneReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DONE':
      let done = [...state, action.description ];
      return done;
    case 'REMOVE_DONE':
      done = state.filter(item => item !== action.description);
      return done;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todoReducer,
  doneReducer
})

export default rootReducer;