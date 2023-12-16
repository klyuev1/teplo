import React from 'react';
import { useRooms } from '../../../contexts/RoomsContext';


function Room({room, onRoomDelete, onClickRoom}) {

  const { projectID } = useRooms();

  function handleDeleteRoom() {
    onRoomDelete(projectID, room)
  }

  function handleClick() {
    onClickRoom(room);
    console.log(room)
  }

  return (
    <tr className='table_row' key={room._id}>
      <td className='table_d room-column1'>{room.number}</td>
      <td className='table_d room-column2'>
        <button className='table__td-button' type='button' onClick={handleClick}>
          {room.name}
        </button>
      </td>
      <td className='table_d room-column3'>{room.areaRoom} м²</td>
      <td className='table_d room-column4'>{room.numberFacade}</td>
      <td className='table_d room-column5'>{room.heatLoss} Вт</td>
      <td className='table_d room-column6'><button className='table__delete' type='button' onClick={handleDeleteRoom}/></td>
    </tr>
  );
}

export default Room;