import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {Project, Facade, Room} from "../../utils/interfaces"


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
import { useRooms } from '../../contexts/RoomsContext';
import UpdateProjectPopup from '../UpdateProjectPopup/UpdateProjectPopup';

import GetFacadePopup from '../GetFacadePopup/GetFacadePopup';
import GetRoomPopup from '../GetRoomPopup/GetRoomPopup';

// API запросы
import {signup, signin, signout, getUser, updateUser} from '../../utils/ApiReg';
import {getProjects, postProject, deleteProject, getFacades, postFacades, deleteFacade, postRoom, deleteRoom, updateProject, downloadRooms} from '../../utils/Api';

// etc
import truth from "../../images/thurh.svg"; // Поправить позже
import fail from "../../images/fail.svg";


function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(true);
  const [currentUser, setCurrentUser] = React.useState<{ name: string; email: string }>({ name: '', email: '' });
  const [isCreateFacadePopupOpen, setIsCreateFacadePopupOpen] = React.useState<boolean>(false);
  const [facades, setFacades] = React.useState<Facade[]>([]);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState<boolean>(false);
  const [titleInfo, setTitleInfo] = React.useState<string>("");
  const [iconInfo, setIconInfo] = React.useState<React.FunctionComponent<React.SVGAttributes<SVGElement>> | null>(null);
  const [selectedFacade, setSelectedFacade] = React.useState<Facade>({ _id: '', name: '', link: '', height: 0, width: 0, areaWindow: 0 , areaWall: 0});

  // Основные функции с api-запросами
  React.useEffect(() => {
    if (isLoggedIn) {
      Promise.all([getUser(), getFacades()])
        .then(([userData, facadesData]) => {
          setCurrentUser(userData);
          // setProjects(projectsData)
          setFacades(facadesData);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
        });
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
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

  function handleCreateFacade(facade: Facade) {
    const {name, link, height, width, areaWindow, areaWall} = facade;
    postFacades({name, link, height, width, areaWindow, areaWall})
      .then((newFacade) => {
        setFacades([newFacade, ...facades]);
        closeAllPopups();
      })
      .catch((error) => {
        if (error === 409) {
          setTitleInfo("Площадь стены не может быть меньше 0");
        } else {
          setTitleInfo("Что-то не так с введенными данными");
        }
        setIconInfo(fail);
        handleInfoTooltipClick();
      });
  }

  function handleDeleteFacade(facade: Facade) {
    deleteFacade(facade._id!).then(() => {
      setFacades((state) => state.filter((c) => c._id !== facade._id));
    });
  }

  function handleCreateFacadeClick() {
    setIsCreateFacadePopupOpen(true);
  }

  function handleInfoTooltipClick() {
    setIsInfoTooltipOpen(true);
  }

  function closeAllPopups() {
    setIsCreateFacadePopupOpen(false);
    setIsInfoTooltipOpen(false);
    setSelectedFacade({ _id: '', name: '', link: '', height: 0, width: 0, areaWindow: 0 , areaWall: 0});
  }

  function handleFacadeClick(facade: Facade) {
    setSelectedFacade(facade);
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
                facades={facades}
                isLoggedIn={isLoggedIn}
                onCreareFacade={handleCreateFacadeClick}
                onCardDelete={handleDeleteFacade}
                onClickFacade={handleFacadeClick}
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

        <CreateFacadePopupOpen
          isOpen={isCreateFacadePopupOpen}
          onClose={closeAllPopups}
          onCreateFacade={handleCreateFacade}
        />

        <CreateRoomPopup
          facades={facades}
        />

        <UpdateProjectPopup />

        <GetFacadePopup
          facade={selectedFacade}
          onClose = {closeAllPopups}
        />
        
        <GetRoomPopup />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          title={titleInfo}
          icon={iconInfo}
        />


      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
