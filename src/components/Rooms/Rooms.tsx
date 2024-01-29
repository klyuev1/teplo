import React from 'react';
import { useParams, Link } from 'react-router-dom';
import RoomTable from './RoomTable/RoomTable'
import {getRooms} from '../../utils/Api';
import { useRooms } from '../../contexts/RoomsContext';

import { RoomsProps } from "../../utils/interfaces";


function Rooms({ isLoggedIn, handleCreateRoomClick, onRoomDelete, onUpdateProjectClick, onClickRoom , onDownloadCSV}: RoomsProps) {
  
  const {projectID} = useParams();
  const { rooms, setRooms, setProjectID } = useRooms() || { rooms: [], setRooms: () => {}, setProjectID: () => {} };

  React.useEffect(() => {
      if (isLoggedIn){
    getRooms(projectID!)
    .then((fetchedRooms) => {
      setRooms(fetchedRooms);
      if (typeof projectID === 'string') {
      setProjectID(projectID);
      }
    })
    .catch((err) => {
      console.log(err)
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }},[isLoggedIn, setRooms, setProjectID]);

  function downloadCSV() {
    if (typeof projectID === 'string') {
      onDownloadCSV(projectID);
    }
  }
  
  return (
    <section className= 'rooms' >

      <div className='rooms__up-container'>

        <div className='rooms__title-box'>
          <Link to='/projects' className='rooms__title-logo' />
          <h2 className='rooms__title'>Проекты | Помещения</h2>
        </div>
        
        <div className='rooms__button-box'>
          <button className='rooms__button rooms__button_csv' type='button'onClick={downloadCSV}>Выгрузить в CSV</button>
          <button className='rooms__button' type='button' onClick={onUpdateProjectClick}>Редактировать проект</button>
          <button className='rooms__button' type='button' onClick={handleCreateRoomClick}>Создать помещение</button>
        </div>
        
      
      </div>

      <RoomTable
        rooms={rooms}
        onRoomDelete={onRoomDelete}
        onClickRoom={onClickRoom}
      />

    </section>
    
  );
}

export default Rooms;