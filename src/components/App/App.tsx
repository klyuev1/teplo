import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {Project, Facade, Room, ApiResponse, InfoTooltipProps} from "../../utils/interfaces"
// Продолжить с логина и тд



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
  const [isCreateProjectPopupOpen, setIsCreateProjectPopupOpen] = React.useState<boolean>(false);
  const [isUpdateProjectPopupOpen, setIsUpdateProjectPopupOpen] = React.useState<boolean>(false);
  const [isCreateFacadePopupOpen, setIsCreateFacadePopupOpen] = React.useState<boolean>(false);
  const [isCreateRoomPopupOpen, setIsCreateRoomPopupOpen] = React.useState<boolean>(false);
  
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [facades, setFacades] = React.useState<Facade[]>([]);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState<boolean>(false);
  const [titleInfo, setTitleInfo] = React.useState<string>("");
  const [iconInfo, setIconInfo] = React.useState<React.FunctionComponent<React.SVGAttributes<SVGElement>> | null>(null);

  const { rooms, setRooms } = useRooms();
  const [selectedFacade, setSelectedFacade] = React.useState<Facade>({ _id: '', name: '', link: '', height: 0, width: 0, areaWindow: 0 });
  const [selectedRoom, setSelectedRoom] = React.useState<Room>({ _id: '', number: 0, name: '', height: 0, width: 0, areaWall: 0, areaWindow: 0, areaRoom: 0, numberFacade: 0 });

  // Основные функции с api-запросами
  React.useEffect(() => {
    if (isLoggedIn) {
      Promise.all([getUser(), getProjects(), getFacades()])
        .then(([userData, projectsData, facadesData]) => {
          setCurrentUser(userData);
          setProjects(projectsData);
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

  function handleCreateProject(project: Project) {
    postProject({
      name: project.name,
      tOutside: project.tOutside,
      tInside: project.tInside,
      rWall: project.rWall,
      rWindow: project.rWindow,
      beta: project.beta,
      kHousehold: project.kHousehold,
    })
      .then((newProject) => {
        setProjects([newProject, ...projects]);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteProject(project: Project) {
    deleteProject(project._id)
      .then(() => {
        setProjects((state) => state.filter((c) => c._id !== project._id));
      })
      .catch((err) => console.log(err));
  }

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
    const {name, link, height, width, areaWindow} = facade;
    postFacades({name, link, height, width, areaWindow})
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
    deleteFacade(facade._id).then(() => {
      setFacades((state) => state.filter((c) => c._id !== facade._id));
    });
  }

  function handleCreateRoom(projectID: string, room: Room) {
    postRoom(projectID, {
      number: room.number,
      name: room.name,
      height: room.height,
      width: room.width,
      areaWall: room.areaWall,
      areaWindow: room.areaWindow,
      areaRoom: room.areaRoom,
      numberFacade: room.numberFacade
    })
    
    .then((newRoom)=>{
      setRooms([...rooms, newRoom]);
    })
    .catch((err) => console.log(err));

  }

  function handleUpdateProject(projectID: string, project: Project) {
    updateProject(projectID, {
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

  // function handleDeleteRoom(projectID: string, room: Room) {
  //   deleteRoom(projectID, room._id)
  //   .then(() => {
  //     setRooms((state) => state.filter((c) => c._id !== room._id));
  //   })
  //   .catch((err) => console.log(err));
  // }

  function handleDownloadCSV(projectID: string) {
    downloadRooms(projectID)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Ошибка загрузки: ${res.status} ${res.statusText}`);
        }
        return res.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'output.csv');
        document.body.appendChild(link);
        console.log(link)
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => {
        console.error("Произошла ошибка:", error);
      });
  }
  
  // Функции кликеры
  function handleCreateProjectClick() {
    setIsCreateProjectPopupOpen(true);
  }

  function handleCreateFacadeClick() {
    setIsCreateFacadePopupOpen(true);
  }

  function handleCreateRoomClick() {
    setIsCreateRoomPopupOpen(true);
  }
  
  function handleUpdateProjectClick() {
    setIsUpdateProjectPopupOpen(true);
  }

  function handleInfoTooltipClick() {
    setIsInfoTooltipOpen(true);
  }

  function closeAllPopups() {
    setIsCreateFacadePopupOpen(false);
    setIsInfoTooltipOpen(false);
    setIsCreateRoomPopupOpen(false);
    setIsCreateProjectPopupOpen(false);
    setIsUpdateProjectPopupOpen(false);
    setSelectedFacade({ _id: '', name: '', link: '', height: 0, width: 0, areaWindow: 0 });
    setSelectedRoom({ _id: '', number: 0, name: '', height: 0, width: 0, areaWall: 0, areaWindow: 0, areaRoom: 0, numberFacade: 0 });
  }

  function handleFacadeClick(facade: Facade) {
    setSelectedFacade(facade);
  }

  function handleRoomClick(room: Room) {
    setSelectedRoom(room);
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
              isLoggedIn={isLoggedIn}
              onLogin={handleLogin}
            />
          }/> */}

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
                purpleThemeHeader=''
                colorWhite=''
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

          <Route path={`/projects/:projectID/rooms`} element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                purpleThemeHeader=''
                colorWhite=''
              />
              <ProtectedRoute
                element={Rooms}
                isLoggedIn={isLoggedIn}
                handleCreateRoomClick={handleCreateRoomClick}
                onUpdateProjectClick={handleUpdateProjectClick}
                // onRoomDelete={handleDeleteRoom}
                onClickRoom={handleRoomClick}
                onDownloadCSV={handleDownloadCSV}
              />
              <Footer/>
            </>
          }/>

          <Route path='/facades' element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                purpleThemeHeader=''
                colorWhite=''
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

          {/* <Route path='/profile' element={
            <>
              <Header 
                isLoggedIn={isLoggedIn}
                purpleThemeHeader=''
                colorWhite=''
              />
              <ProtectedRoute
                element={Profile}
                isLoggedIn={isLoggedIn}

                onSignOut={HandleSignOut}
                onUpdateUser={handleUpdateUser}
              />
            </>
          }/> */}

          <Route path="*" element={<NotFound />} />
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
          onCreateRoom={handleCreateRoom}
        />

        <UpdateProjectPopup 
          isOpen={isUpdateProjectPopupOpen}
          onClose={closeAllPopups}
          onUpdateProject={handleUpdateProject}
        />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          title={titleInfo}
          icon={iconInfo}
        />
        
        <GetFacadePopup
          facade={selectedFacade}
          onClose = {closeAllPopups}
        />
        
        <GetRoomPopup
          room={selectedRoom}
          onClose = {closeAllPopups}
        />


      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
