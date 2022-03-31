import React from 'react';
import './App.css';
import googleHandler from './example/auth';

function App() {
  return (
    <div className="App">
      <button type="button" onClick={googleHandler}>Login</button>
    </div>
  );
}

export default App;
