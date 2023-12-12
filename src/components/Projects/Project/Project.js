import React from 'react';
import { Link } from 'react-router-dom';


function Project({isLoggedIn, project, onProjectDelete}) {
  
  

  // React.useEffect(() => {
  //   // if (isLoggedIn){
  //   Promise.all([getRooms(project._id)])
  //   .then(([roomsData]) => {
  //     console.log(roomsData);
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   });
  // // }
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // },[isLoggedIn]);

  function handleDeleteproject() {
    onProjectDelete(project)
  }

  return (
        <tr className='table_row' key={project._id}>
          <td className='table_d column1'>
            <Link className='table__td-button' to={`/projects/${project._id}/rooms`}>
              <div className='table__icon' />{project.name}
            </Link>
          </td>
          <td className='table_d column2'>{project.tOutside}</td>
          <td className='table_d column3'>1111</td>
          <td className='table_d column4'><button className='table__delete' type='button' onClick={handleDeleteproject}/></td>
        </tr>
  );
}

export default Project;