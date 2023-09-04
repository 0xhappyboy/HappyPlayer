import React from 'react';
import logo from './logo.svg';
import './App.css';
import HappyPlayer from './HappyPlayer';

function App() {
  return (
    <div className="App">
      <HappyPlayer width={200} height={200} url='' styles={{ border: '1px solid #000000', backgroundColor: 'red' }} />
    </div>
  );
}

export default App;
