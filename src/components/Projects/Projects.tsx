import React from 'react';
import {ProjLogo} from '../../ui/icons/svgIcons';
import ProjectTable from './ProjectTable/ProjectTable';

import {ProjectsProps} from "../../utils/interfaces";

function Projects({isLoggedIn, projects, onCreateProjectClick, onProjectDelete}: ProjectsProps) {

  return (
    <section className= 'projects' >

      <div className='projects__up-container'>

        <div className='projects__title-box'>
          <ProjLogo/>
          <h2 className='projects__title'>Проекты</h2>
        </div>
        
        <button className='projects__button' type='button' onClick={onCreateProjectClick}>Создать проект</button>
      
      </div>

      <ProjectTable 
        isLoggedIn={isLoggedIn}
        projects={projects}
        onProjectDelete={onProjectDelete}
        
      />

    </section>
    
  );
}

export default Projects;