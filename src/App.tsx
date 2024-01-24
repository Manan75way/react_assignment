import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppSelector } from './store/store';

function App() {

const {name,email,age}  = useAppSelector(state=> state.users)

  return (
    <div className="App">
      <h1>Name {name}</h1>
      <h1>Email {email}</h1>
      <h1>Age {age}</h1>
    </div>
  );
}

export default App;
