import React from 'react';
import projFile from '../../../images/proj-file.svg';

import data from '../../../utils/data';

function ProjectTable({}) {
  
  return (
  <table className='table'>
        
    <thead>
      <tr className='table_header'>
        <th className='table_head column1'>Наименование проекта</th>
        <th className='table_head column2'>Кол-во помещений</th>
        <th className='table_head column3'>Дата создания</th>
        <th className='table_head column4'></th>
      </tr>
    </thead>

    <tbody>

      {data.map(card => (

        <tr className='table_row' key={card._id}>
          <td className='table_d column1'><img className='table__icon' src={projFile}/>{card.name}</td>
          <td className='table_d column2'>{card.rooms}</td>
          <td className='table_d column3'>{card.date}</td>
          <td className='table_d column4'><button className='table__delete'/></td>
        </tr>

      ))}
    </tbody>

  </table>
    
  );
}

export default ProjectTable;