import React, { useState } from 'react';
import Routes from './Routes';
import '../src/App.css'
import io from 'socket.io-client'

function App() {

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
