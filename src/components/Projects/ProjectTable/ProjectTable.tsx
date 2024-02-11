import React from 'react';
import Project from '../Project/Project';

import {ProjectTableProps} from "../../../utils/interfaces";
import { useGetProjectsQuery } from '../../../store/api/api';

function ProjectTable({isLoggedIn, onProjectDelete}: ProjectTableProps) {

  const {data: projects} = useGetProjectsQuery();

  return (
  <table className='table'>
        
    <thead>
      <tr className='table_header'>
        <th className='table_head column1'>Наименование проекта</th>
        <th className='table_head column2'>Наружняя температура</th>
        <th className='table_head column3'>Дата создания</th>
        <th className='table_head column4'></th>
      </tr>
    </thead>

    <tbody>

      {projects && projects.map(project => (
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