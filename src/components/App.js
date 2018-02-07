import React, { Component } from 'react';
import AddNew from './AddNew';
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
            <div className="col add-new">
              <AddNew />
            </div>
          </div>
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6">
              <TodoList />
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6">
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
