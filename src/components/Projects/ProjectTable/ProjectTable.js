import React from 'react';
import projFile from '../../../images/proj-file.svg';

import data from '../../../utils/data';

function ProjectTable({projects}) {
  
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

      {projects.map(card => (

        <tr className='table_row' key={card._id}>
          <td className='table_d column1'>
            <button className='table__td-button'>
              <div className='table__icon' />{card.name}
            </button>
          </td>
          <td className='table_d column2'>1111</td>
          <td className='table_d column3'>1111</td>
          <td className='table_d column4'><button className='table__delete'/></td>
        </tr>

      ))}
    </tbody>

  </table>
    
  );
}

export default ProjectTable;