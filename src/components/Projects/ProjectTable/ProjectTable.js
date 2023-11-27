import React from 'react';
import projFile from '../../../images/proj-file.svg';

function ProjectTable({}) {
  
  return (
  <table>
        
    <thead>
      <tr>
        <th>Наименование проекта</th>
        <th>Кол-во помещений</th>
        <th>Дата создания</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td><img src={projFile}/>Декабристов</td>
        <td>156</td>
        <td>24.04.2024 17:53</td>
        <td><button /></td>
      </tr>
    </tbody>

  </table>
    
  );
}

export default ProjectTable;