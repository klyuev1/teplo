import React from 'react';
import Techs from './Techs/Techs'

function Main() {
    
  return (
    <main className='main'>
      <div className='main__container'>
        <h1 className='main__title'>Проект Брусника Тепло Демо-версия</h1>
      </div>
      <Techs />
    </main>
  );
}

export default Main;