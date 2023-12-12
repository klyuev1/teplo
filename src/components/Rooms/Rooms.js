import React from 'react';
import projLogo from '../../images/proj-logo.svg';
import RoomTable from './RoomTable/RoomTable'
import { useParams } from 'react-router-dom';
import {getRooms} from '../../utils/Api';

function Rooms({isLoggedIn, handleCreateRoomClick, onRoomCreate}) {

  const {projectID} = useParams();
  const [rooms, setRooms] = React.useState([]);

  React.useEffect(() => {
      if (isLoggedIn){
    getRooms(projectID)
    .then((rooms) => {
      setRooms(rooms);
    })
    .catch((err) => {
      console.log(err)
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }},[isLoggedIn]);
  
  return (
    <section className= 'rooms' >

      <div className='rooms__up-container'>

        <div className='rooms__title-box'>
          <img className='rooms__title-logo' src={projLogo}/>
          <h2 className='rooms__title'>Проекты | Помещения</h2>
        </div>
        
        <div className='rooms__button-box'>
          <button className='rooms__button' type='button'>Выгрузить в CSV</button>
          <button className='rooms__button' type='button'>Редактировать проект</button>
          <button className='rooms__button' type='button' onClick={handleCreateRoomClick}>Создать помещение</button>
        </div>
        
      
      </div>

      <RoomTable
        projectID={projectID}
        rooms={rooms}
        onRoomCreate={onRoomCreate}
      />

    </section>
    
  );
}

export default Rooms;