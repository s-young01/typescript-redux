import React from 'react';
import './App.css';
import CounterContainer from './container/CounterContainer';
import TodoListContainer from './container/TodoListContainer';

function App() {
  return (
    <div className="App">
     <CounterContainer/>
     <TodoListContainer/>
    </div>
  );
}

export default App;
