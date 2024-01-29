import React from 'react';

import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';


function Main() {
    
  return (
    <main className='main'>
      <div className='main__container'>
        <h1 className='main__title'>Проект Брусника Тепло Демо-версия</h1>
      </div>
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;