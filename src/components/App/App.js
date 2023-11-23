import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import Register from '../../components/Register/Register';


function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });

  // Функции авторизации
  function handleRegister() {
    console.log("hi, bro")
  }
  
  

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="app">
        <Routes>

          <Route path='signup' element={
            <Register
              isLoggedIn={isLoggedIn}
              onRegister={handleRegister}
            />
          }/>

          {/* <Route path='/signin' element={
            <Login
              // isLoggedIn={isLoggedIn}
              // onLogin={handleLogin}
            />
          }/> */}

        </Routes>

      </div>
    </CurrentUserContext.Provider>
    
  );
}

export default App;
