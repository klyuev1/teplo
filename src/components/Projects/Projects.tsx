import React from 'react';
import {ProjLogo} from '../../ui/icons/svgIcons';
import ProjectTable from './ProjectTable/ProjectTable';

import {ProjectsProps} from "../../utils/interfaces";
import { useGetProjectsQuery } from '../../store/api/api';


function Projects({isLoggedIn, projects, onCreateProjectClick, onProjectDelete}: ProjectsProps) {

  

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error || !data) {
  //   return <div>Error occurred or no data available.</div>;
  // }
  
  

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
        onProjectDelete={onProjectDelete}
        projects={[]}
      />

    </section>
    
  );
}

export default Projects;