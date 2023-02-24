import React from 'react';
import './App.css';
import CounterContainer from './container/CounterContainer';
import GitHubContainer from './container/GitHubContainer';
import TodoListContainer from './container/TodoListContainer';

function App() {
  return (
    <div className="App">
     <CounterContainer/>
     <TodoListContainer/>
     <GitHubContainer/>
    </div>
  );
}

export default App;
