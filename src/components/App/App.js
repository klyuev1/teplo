import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Projects from '../Projects/Projects';
import Rooms from '../Rooms/Rooms';
import Facades from '../Facades/Facades';
import Profile from '../Profile/Profile';

import CreateProjectPopup from '../CreateProjectPopup/CreateProjectPopup';
import CreateFacadePopupOpen from '../CreateFacadePopup/CreateFacadePopup';
import CreateRoomPopup from '../CreateRoomPopup/CreateRoomPopup';

import {signup, signin, signout, getUser, updateUser} from '../../utils/ApiReg';
import {getProjects} from '../../utils/Api';

import InfoTooltip from '../InfoTooltip/InfoTooltip';
import truth from '../../images/thurh.svg';
import fail from '../../images/fail.svg';
import NotFound from '../NotFound/NotFound';

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [isCreateProjectPopupOpen, setIsCreateProjectPopupOpen] = React.useState(false);
  const [isCreateFacadePopupOpen, setIsCreateFacadePopupOpen] = React.useState(false);
  
  const [isCreateRoomPopupOpen, setIsCreateRoomPopupOpen] = React.useState(false);
  
  const [projects, setProjects] = React.useState([]);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [titleInfo, setTitleInfo] = React.useState("");
  const [iconInfo, setIconInfo] = React.useState("");

  React.useEffect(() => {
    if (isLoggedIn){
    Promise.all([getUser(), getProjects()])
    .then(([userData, projectsData]) => {
      setCurrentUser(userData);
      setProjects(projectsData);
      // console.log(projectsData);
      setIsLoggedIn(true);
    })
    .catch((err) => {
      console.log(err)
      setIsLoggedIn(false);
    });
  }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[isLoggedIn]);

  useEffect(() => {

  },[])

  
  function handleCreateFacadeClick() {
    setIsCreateFacadePopupOpen(true);
  }

  function closeAllPopups() {
    setIsCreateFacadePopupOpen(false);
  }
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

          <Route path='/projects' element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
              />
              <ProtectedRoute
                element={Projects}
                isLoggedIn={isLoggedIn}
                projects={projects}
              />
              <Footer/>
            </>
          }/>

          <Route path='/projects/:projectId/rooms' element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
              />
              <ProtectedRoute
                element={Rooms}
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
                onCreareFacade={handleCreateFacadeClick}
              />
              <Footer/>   
            </>
          

          }/>

          <Route path='/profile' element={
            <>
              <Header 
                isLoggedIn={isLoggedIn}
              />
              <ProtectedRoute
                element={Profile}
                isLoggedIn={isLoggedIn}

                onSignOut={HandleSignOut}
                onUpdateUser={handleUpdateUser}
              />
            </>
          }/>

          <Route path='*' element={
            <NotFound />
          }/>
          
        </Routes>

        <CreateProjectPopup
          isOpen={isCreateProjectPopupOpen}
        />

        <CreateFacadePopupOpen
        isOpen={isCreateFacadePopupOpen}
        />

        <CreateRoomPopup
          isOpen={isCreateRoomPopupOpen}
        />



        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closePopup}
          title={titleInfo}
          icon={iconInfo}
        />


      </div>
    </CurrentUserContext.Provider>    
  );
}

export default App;
