import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import React from 'react';
// Компоненты
import Register from '../Register/Register';
import Login from '../Login/Login';
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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import NotFound from '../NotFound/NotFound';
import UpdateProjectPopup from '../UpdateProjectPopup/UpdateProjectPopup';
import GetFacadePopup from '../GetFacadePopup/GetFacadePopup';
import GetRoomPopup from '../GetRoomPopup/GetRoomPopup';
import { setIsLoggedIn } from "../../store/reducers/authSlice";

function App() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  
  useEffect(() => {
    const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('jwt='));
    if (!jwtCookie) {
      dispatch(setIsLoggedIn(false));
    }
  }, [dispatch]);
  
  return (
      <div className="app">
        <Routes>

          <Route path='signup' element={ <Register /> }/>

          <Route path='/signin' element={ <Login /> }/>

          <Route path='/' element={
            <>
              <Header 
                isLoggedIn={isLoggedIn}
                purpleThemeHeader='header_purple'
              />
              <Main />
              <Footer />
            </>
          }/>
          
          <Route path='/projects' element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                purpleThemeHeader=''
              />
              <ProtectedRoute
                element={Projects}
                isLoggedIn={isLoggedIn}
              />
              <Footer/>
            </>
          }/>

          <Route path={`/projects/:projectID/rooms`} element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                purpleThemeHeader=''
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
                purpleThemeHeader=''
              />
              <ProtectedRoute
                element={Facades}
                isLoggedIn={isLoggedIn}
              />
              <Footer/>   
            </>
          }/>

          <Route path='/profile' element={
            <>
              <Header 
                isLoggedIn={isLoggedIn}
                purpleThemeHeader=''
              />
              <ProtectedRoute
                element={Profile}
                isLoggedIn={isLoggedIn}
              />
            </>
          }/>

          <Route path="*" element={<NotFound />} />

        </Routes>

        <CreateProjectPopup />

        <CreateFacadePopupOpen />

        <CreateRoomPopup />

        <UpdateProjectPopup />

        <GetFacadePopup />
        
        <GetRoomPopup />

        <InfoTooltip />

      </div>
  );
}
export default App;
