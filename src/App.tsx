import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Users from './components/Users';

function App() {
  return (
    <div className='page'>
      <Users />
    </div>
  );
}

export default App;
