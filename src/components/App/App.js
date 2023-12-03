import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Projects from '../Projects/Projects';
import Facades from '../Facades/Facades';

// import PopupWithForm from '../PopupWithForm/PopupWithForm';
import CreateProjectPopup from '../CreateProjectPopup/CreateProjectPopup';


function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [isCreateProjectPopupOpen, setIsCreateProjectPopupOpen] = React.useState(false);

  // Функции авторизации
  function handleRegister() {
    console.log("hi, bro");
  }
  
  function handleLogin() {
    console.log("hi, bro");
  }
 

    // Global state переменная открытия попапов
    const isOpen = isCreateProjectPopupOpen;
  
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

          <Route path='/signin' element={
            <Login
              isLoggedIn={isLoggedIn}
              onLogin={handleLogin}
            />
          }/>

          <Route path='/' element={
            <>
              <Header 
                isLoggedIn={isLoggedIn}
                purpleThemeHeader='header_purple'
                colorWhite='header_white-back'
              />
              <Main />
              <Footer />
            </>
          }/>

          {/* Остановился здесь */}
          <Route path='/projects' element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
              />
              <ProtectedRoute
                element={Projects}
                isLoggedIn={isLoggedIn}
              />
              <Footer/>
            </>
          }/>
          <Route path='/facades' element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
              />
              <ProtectedRoute
                element={Facades}
                isLoggedIn={isLoggedIn}
              />
              <Footer/>   
            </>
          

          }/>

        </Routes>

        <CreateProjectPopup
        isOpen={isCreateProjectPopupOpen}
        /> 



      </div>
    </CurrentUserContext.Provider>
    
  );
}

export default App;
