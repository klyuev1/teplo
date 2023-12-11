import React from 'react';

function Project({project, onProjectDelete}) {
  
  function handleDeleteproject() {
    onProjectDelete(project)
  }

  return (
        <tr className='table_row' key={project._id}>
          <td className='table_d column1'>
            <button className='table__td-button'>
              <div className='table__icon' />{project.name}
            </button>
          </td>
          <td className='table_d column2'>{project.tOutside}</td>
          <td className='table_d column3'>1111</td>
          <td className='table_d column4'><button className='table__delete' type='button' onClick={handleDeleteproject}/></td>
        </tr>
  );
}

export default Project;