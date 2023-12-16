import React from 'react';
import Room from '../Room/Room';

function RoomTable({rooms, onRoomDelete, onClickRoom}) {

  

  return (
  <table className='table'>
        
    <thead>
      <tr className='table_header'>
        <th className='table_head room-column1'>Номер</th>
        <th className='table_head room-column2'>Наименование помещения</th>
        <th className='table_head room-column3'>Площадь</th>
        <th className='table_head room-column4'>Номер фасадного модуля</th>
        <th className='table_head room-column5'>Количество теплопотерь</th>
        <th className='table_head room-column6'></th>
      </tr>
    </thead>

    <tbody>

      {rooms.map(room => (

        <Room 
          room={room}
          key={room._id}
          onRoomDelete={onRoomDelete}
          onClickRoom={onClickRoom}
        />

      ))}
    </tbody>

  </table>
    
  );
}

export default RoomTable;