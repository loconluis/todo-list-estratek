import React, { Component } from 'react';
import TodoList from './TodoList';
import DoneList from './DoneList';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Pendientes por realizar</h1>
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
      </div>
    );
  }
}

export default App;
