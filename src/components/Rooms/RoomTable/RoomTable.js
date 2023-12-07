import React from 'react';
import projFile from '../../../images/proj-file.svg';

import roomsData from '../../../utils/room-data';

function RoomTable({}) {
  
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

      {roomsData.map(card => (

        <tr className='table_row' key={card._id}>
          <td className='table_d room-column1'>{card.number}</td>
          <td className='table_d room-column2'>
            <button className='table__td-button'>
              {card.name}
            </button>
          </td>
          <td className='table_d room-column3'>{card.area}</td>
          <td className='table_d room-column4'>{card.nameFacade}</td>
          <td className='table_d room-column5'>{card.heatLoss}</td>
          <td className='table_d room-column6'><button className='table__delete'/></td>
        </tr>

      ))}
    </tbody>

  </table>
    
  );
}

export default RoomTable;