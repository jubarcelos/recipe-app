import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Profile />
    </BrowserRouter>
  );
}

export default App;
