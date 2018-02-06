import data from '../utils/seed'
// set the data of the dash
export const setTodos = todos => ({
  type: 'SET_TODOS',
  todos,
})

export const startSetTodos = () => {
  return (dispatch, getState) => {
    return fetch('http://192.168.20.137:3000/')
      .then(response => {
        return response.json()
      })
      .then(json => {
        // console.log(json);
        dispatch(setTodos(json))
      })
      .catch(e => console.log('skrtt'))
    // return dispatch(setTodos(data))
  }
}

// Done data
export const addToDone = description => ({
  type: 'ADD_DONE',
  description,
})

// Done data
export const removeToDone = description => ({
  type: 'REMOVE_DONE',
  description,
})