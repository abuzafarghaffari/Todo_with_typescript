import React, {useContext} from 'react';

import './App.css';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';
import ContextProvider from './component/ContextProvider';
import {useMyList, listContext} from './component/ContextProvider';


function App() {

  return (
    <div className="App">
      <ContextProvider>
      <AddTodo />
      <TodoList/>

      </ContextProvider>
    </div>
  );
}

export default App;
