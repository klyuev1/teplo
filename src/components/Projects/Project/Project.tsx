import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import {ProjectProps} from "../../../utils/interfaces";
import { useDeleteProjectMutation } from '../../../store/api/api';

function Project({project}: ProjectProps) {
  
  const [handleDeleteProject, {}] = useDeleteProjectMutation();
  
  const parsedDate = new Date(project.createdAt!);
  const formattedDate = format(parsedDate, 'dd.MM.yyyy');

  function handleDeleteproject() {
    handleDeleteProject(project)
  }

  return (
        <tr className='table_row' key={project._id}>
          <td className='table_d column1'>
            <Link className='table__td-button' to={`/projects/${project._id}/rooms`}>
              <div className='table__icon' />{project.name}
            </Link>
          </td>
          <td className='table_d column2'>{project.tOutside}</td>
          <td className='table_d column3'>{formattedDate}</td>
          <td className='table_d column4'><button className='table__delete' type='button' onClick={handleDeleteproject}/></td>
        </tr>
  );
}

export default Project;