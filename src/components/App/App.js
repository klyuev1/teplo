import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Компоненты
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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import NotFound from '../NotFound/NotFound';

// API запросы
import {signup, signin, signout, getUser, updateUser} from '../../utils/ApiReg';
import {getProjects, postProject, deleteProject, getFacades, postFacades, deleteFacade} from '../../utils/Api';

// etc
import truth from '../../images/thurh.svg';
import fail from '../../images/fail.svg';


function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [isCreateProjectPopupOpen, setIsCreateProjectPopupOpen] = React.useState(false);
  const [isCreateFacadePopupOpen, setIsCreateFacadePopupOpen] = React.useState(false);
  const [isCreateRoomPopupOpen, setIsCreateRoomPopupOpen] = React.useState(false);
  
  const [projects, setProjects] = React.useState([]);
  const [facades, setFacades] = React.useState([]);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [titleInfo, setTitleInfo] = React.useState("");
  const [iconInfo, setIconInfo] = React.useState("");

  React.useEffect(() => {
    if (isLoggedIn){
    Promise.all([getUser(), getProjects(), getFacades()])
    .then(([userData, projectsData, facadesData]) => {
      setCurrentUser(userData);
      setProjects(projectsData);
      setFacades(facadesData)
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

  function handleCreateProject(project) {
    postProject({
      name: project.name, 
      tOutside: project.tOutside, 
      tInside: project.tInside, 
      rWall: project.rWall, 
      rWindow: project.rWindow, 
      beta: project.beta, 
      kHousehold: project.kHousehold
    })
    .then((newProject)=>{
      setProjects([newProject, ...projects]);
    })
    .catch((err) => console.log(err));
  }

  function handleDeleteProject(project) {
    deleteProject(project._id)
    .then(() => {
      setProjects((state) => state.filter((c) => c._id !== project._id));
    })
    .catch((err) => console.log(err));
  }
  // Доделал вкладку проекты

  function handleRegister(name, email, password) {
    signup(name, email, password)
      .then(() => {
        signin(email, password)
          .then(() => {
            setIsLoggedIn(true);
            setTitleInfo("Вы успешно зарегистрировались!");
            setIconInfo(truth);
            navigate('/projects', {replace: true});
          })
          .catch(() => {
            setTitleInfo("Что-то пошло не так! Попробуйте ещё раз");
            setIconInfo(fail);
          })
          .finally(() =>{
            handleInfoTooltipClick();
          })
      })
      .catch((error) => {
        if (error === 409){
            setTitleInfo("Пользователь с таким Email уже зарегистрирован");
            setIconInfo(fail);
        } else {
            setTitleInfo("Что-то не так с введенными данными");
            setIconInfo(fail);
        }
      })
      .finally(() =>{
        handleInfoTooltipClick();
      })
    
  }

  function handleLogin(email, password) {
    signin(email, password)
    .then(() => {
      setIsLoggedIn(true);
      setTitleInfo("Вы успешно авторизировались!");
      setIconInfo(truth);
      navigate('/projects', {replace: true});
    })
    .catch(() => {
      setTitleInfo("Что-то пошло не так! Попробуйте ещё раз.");
      setIconInfo(fail);
    })
    .finally(() =>{
      handleInfoTooltipClick();
    })
  }

  function handleUpdateUser(name, email) {
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
      .finally(() =>{
        handleInfoTooltipClick();
      })
  }

  function HandleSignOut() {
    signout()
    .then(() => {
      setIsLoggedIn(false);
      // setSavedMovies([]);
      // setFormValueFound('');
      // setShortMovies(false);
      // setMoviesFound([]);
      navigate('/')

    })
    .catch((err) => console.log(err))
    .finally(() =>{
      localStorage.clear();
    })
  }
  
  function handleCreateProjectClick() {
    setIsCreateProjectPopupOpen(true);
  }

  function handleCreateFacadeClick() {
    setIsCreateFacadePopupOpen(true);
  }

  function handleCreateRoomClick() {
    setIsCreateRoomPopupOpen(true);
  }

  function handleInfoTooltipClick() {
    setIsInfoTooltipOpen(true);
  }

  function closeAllPopups() {
    setIsCreateFacadePopupOpen(false);
    setIsInfoTooltipOpen(false);
    setIsCreateRoomPopupOpen(false);
    setIsCreateProjectPopupOpen(false);
  }

  function handleCreateFacade(name, link, height, width, areaWindow) {
    postFacades(name, link, height, width, areaWindow)
    .then((newFacade) => {
      setFacades([newFacade, ...facades]);
      closeAllPopups();
    })
    .catch((error) => {
      if (error === 409){
          setTitleInfo("Площадь стены не может быть меньше 0");
          setIconInfo(fail);
          closeAllPopups();
      handleInfoTooltipClick()                   
      } else {
        setTitleInfo("Что-то не так с введенными данными");
      }
      setIconInfo(fail);
      handleInfoTooltipClick()
    })
    .finally(() => {
      // closeAllPopups();
    });
  }

  function handleDeleteFacade(facade) {
    deleteFacade(facade._id).then(() => {
      setFacades((state) => state.filter((c) => c._id !== facade._id));
    });
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
                onCreateProjectClick={handleCreateProjectClick}
                onProjectDelete={handleDeleteProject}
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
                handleCreateRoomClick={handleCreateRoomClick}
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
                facades={facades}
                isLoggedIn={isLoggedIn}
                onCreareFacade={handleCreateFacadeClick}
                onCardDelete={handleDeleteFacade}
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

          {/* Попапы */}
        <CreateProjectPopup
          isOpen={isCreateProjectPopupOpen}
          onClose={closeAllPopups}
          handleCreateProject={handleCreateProject}
        />

        <CreateFacadePopupOpen
          isOpen={isCreateFacadePopupOpen}
          onClose={closeAllPopups}
          onCreateFacade={handleCreateFacade}
        />

        <CreateRoomPopup
          isOpen={isCreateRoomPopupOpen}
          onClose={closeAllPopups}
          facades={facades}
        />

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
