import React, { Component } from 'react';
import TodoList from './TodoList';
import DoneList from './DoneList';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="container">
          <div className="row title">
            <div className="col">
              <h1 className="text-center">Todo List</h1>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col">
              <TodoList />
            </div>
            <div className="col">
              <DoneList />
            </div>
          </div>
        </div>
        <footer className="container">
          <div className="row">
            <div className="col">
              <p className="text-center"><a href="https://github.com/loconluis/todo-list-estratek" target="_blank" rel="noopener noreferrer"><i className="fas fa-code"></i></a> with <i className="fas fa-heart"></i> and <a href="www.reactjs.org" target="_blank" rel="noopener noreferrer"><i className="fab fa-react"></i></a> by <a href="www.twitter.com/LoconLuis" target="_blank" rel="noopener noreferrer" ><i className="fab fa-twitter"></i> @LoconLuis</a></p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
