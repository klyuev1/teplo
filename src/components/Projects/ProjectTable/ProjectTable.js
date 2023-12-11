import React from 'react';
import Project from '../Project/Project';

function ProjectTable({projects, onProjectDelete}) {
  


  return (
  <table className='table'>
        
    <thead>
      <tr className='table_header'>
        <th className='table_head column1'>Наименование проекта</th>
        <th className='table_head column2'>Наруржняя температура</th>
        <th className='table_head column3'>Дата создания</th>
        <th className='table_head column4'></th>
      </tr>
    </thead>

    <tbody>

      {projects.map(project => (
        <Project 
          project={project}
          key={project._id}
          onProjectDelete={onProjectDelete}
        />
      ))}
    </tbody>

  </table>
    
  );
}

export default ProjectTable;