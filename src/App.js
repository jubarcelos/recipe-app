import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import FoodsProvider from './context/FoodsProvider';
import DrinksProvider from './context/DrinksProvider';
// import UserProvider from './context/UserProvider';

function App() {
  return (
    <BrowserRouter>
      {/* <UserProvider> */ }
      <FoodsProvider>
        <DrinksProvider>
          <Routes />
        </DrinksProvider>
      </FoodsProvider>
      {/* </UserProvider> */ }
    </BrowserRouter>
  );
}

export default App;
