import React from 'react';
import {ProjLogo} from '../../ui/icons/svgIcons';
import ProjectTable from './ProjectTable/ProjectTable';

import { useAppDispatch } from '../../store/hooks/hooks';
import { openCreateProjectPopup } from '../../store/reducers/popupSlice';


function Projects() {  

  const dispatch = useAppDispatch();

  const handleCreateProjectClick = () => {
    dispatch(openCreateProjectPopup())
  }

  return (
    <section className= 'projects' >

      <div className='projects__up-container'>

        <div className='projects__title-box'>
          <ProjLogo/>
          <h2 className='projects__title'>Проекты</h2>
        </div>
        
        <button className='projects__button' type='button' onClick={handleCreateProjectClick}>Создать проект</button>
      
      </div>
        
      <ProjectTable />

    </section>
    
  );
}

export default Projects;