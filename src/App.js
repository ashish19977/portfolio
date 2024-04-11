import React from 'react';
import Home from './components/Home';

function App() {

  let a = false
  
  return (
    <div className="font-mono">
      <Home/>
    {a && <div>Test rabbit</div>}
    </div>
  );
}

export default App;
