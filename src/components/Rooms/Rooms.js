import React from 'react';
import projLogo from '../../images/proj-logo.svg';
import RoomTable from './RoomTable/RoomTable'

function Rooms({isLoggedIn}) {
  
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
          <button className='rooms__button' type='button'>Создать помещение</button>
        </div>
        
      
      </div>

      <RoomTable />

    </section>
    
  );
}

export default Rooms;