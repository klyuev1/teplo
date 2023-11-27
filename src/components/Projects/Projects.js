import React from 'react';
import projLogo from '../../images/proj-logo.svg';
import ProjectTable from './ProjectTable/ProjectTable';

function Projects({isLoggedIn}) {
  
  return (
    <section className= 'projects' >

      <div className='projects__up-container'>

        <div className='projects__title-box'>
          <img className='projects__title-logo' src={projLogo}/>
          <h2 className='projects__title'>Проекты</h2>
        </div>
        
        <button className='projects__button' type='button'>Создать проект</button>
      
      </div>

      <ProjectTable />

    </section>
    
  );
}

export default Projects;