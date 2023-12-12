import React from 'react';


function Room({room, projectID, onRoomCreate}) {

  onRoomCreate(projectID, room)
  
  React.useEffect(() => {
    onRoomCreate(projectID, room)
    console.log(projectID)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <tr className='table_row' key={room._id}>
      <td className='table_d room-column1'>{room.number}</td>
      <td className='table_d room-column2'>
        <button className='table__td-button'>
          {room.name}
        </button>
      </td>
      <td className='table_d room-column3'>{room.area}</td>
      <td className='table_d room-column4'>{room.nameFacade}</td>
      <td className='table_d room-column5'>{room.heatLoss}</td>
      <td className='table_d room-column6'><button className='table__delete'/></td>
    </tr>
  );
}

export default Room;