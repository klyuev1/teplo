import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// Компоненты
import CurrentUserContext from '../../contexts/CurrentUserContext';
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

// API запросы
import {signup, signin, signout, getUser, updateUser} from '../../utils/ApiReg';

// etc
import truth from "../../images/thurh.svg"; // Поправить позже
import fail from "../../images/fail.svg";


function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(true);
  const [currentUser, setCurrentUser] = React.useState<{ name: string; email: string }>({ name: '', email: '' });
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState<boolean>(false);
  const [titleInfo, setTitleInfo] = React.useState<string>("");
  const [iconInfo, setIconInfo] = React.useState<React.FunctionComponent<React.SVGAttributes<SVGElement>> | null>(null);


  // Объяснить Олегу функционал и разделить работу!!!!!!!

  // Основные функции с api-запросами
  React.useEffect(() => {
    if (isLoggedIn) {
      Promise.all([getUser()])
        .then(([userData]) => {
          setCurrentUser(userData);
          // setProjects(projectsData);
          // setFacades(facadesData);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
        });
    }
  }, [isLoggedIn]);

  function handleRegister(name: string, email: string, password: string) {
    signup(name, email, password)
      .then(() => {
        signin(email, password)
          .then(() => {
            setIsLoggedIn(true);
            setTitleInfo("Вы успешно зарегистрировались!");
            setIconInfo(truth);
            navigate("/projects", { replace: true });
          })
          .catch(() => {
            setTitleInfo("Что-то пошло не так! Попробуйте ещё раз");
            setIconInfo(fail);
          })
          .finally(() => {
            handleInfoTooltipClick();
          });
      })
      .catch((error) => {
        if (error === 409) {
          setTitleInfo("Пользователь с таким Email уже зарегистрирован");
          setIconInfo(fail);
        } else {
          setTitleInfo("Что-то не так с введенными данными");
          setIconInfo(fail);
        }
      })
      .finally(() => {
        handleInfoTooltipClick();
      });
  }

  function handleLogin(email: string, password: string) {
    signin(email, password)
      .then(() => {
        setIsLoggedIn(true);
        setTitleInfo("Вы успешно авторизировались!");
        setIconInfo(truth);
        navigate("/projects", { replace: true });
      })
      .catch(() => {
        setTitleInfo("Что-то пошло не так! Попробуйте ещё раз.");
        setIconInfo(fail);
      })
      .finally(() => {
        handleInfoTooltipClick();
      });
  }

  function handleUpdateUser(name: string, email: string) {
    updateUser(name, email)
      .then((res) => {
        setTitleInfo("Данные о профиле изменены");
        setIconInfo(truth);
        setCurrentUser(res.user);
      })
      .catch(() => {
        setTitleInfo("Что-то пошло не так! Попробуйте ещё раз.");
        setIconInfo(fail);
      })
      .finally(() => {
        handleInfoTooltipClick();
      });
  }

  function HandleSignOut() {
    signout()
      .then(() => {
        setIsLoggedIn(false);
        navigate("/");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        localStorage.clear();
      });
  }

  function handleInfoTooltipClick() {
    setIsInfoTooltipOpen(true);
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

                onSignOut={HandleSignOut}
                onUpdateUser={handleUpdateUser}
              />
            </>
          }/>

          <Route path="*" element={<NotFound />} />

        </Routes>

        {/* Попапы */}
        <CreateProjectPopup />

        <CreateFacadePopupOpen />

        <CreateRoomPopup />

        <UpdateProjectPopup />

        <GetFacadePopup />
        
        <GetRoomPopup />

        <InfoTooltip />

      </div>
      
    </CurrentUserContext.Provider>
  );
}
export default App;
