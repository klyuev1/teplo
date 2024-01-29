import React from 'react';
function Techs() {

  
  return (
    <section className='techs' id='techs'>
      <h3 className='techs__heading'>Технологии</h3>
      <div className='techs__box'>
        <h2 className='techs__title'>7 технологий</h2>
        <p className='techs__subtitle'>были применены в проекте в процессе его написания. Благодаря которым можно достичь семантически чистого и интерактивного интерфейса, модульности, эффективной работы с сервером и гибкости в работе с данными.</p>
        <ul className='techs__list'>
          <li className='techs__item'>HTML</li>
          <li className='techs__item'>CSS</li>
          <li className='techs__item'>JS</li>
          <li className='techs__item'>React</li>
          <li className='techs__item'>Git</li>
          <li className='techs__item'>Express.js</li>
          <li className='techs__item'>mongoDB</li>
        </ul>
      </div>
      
    </section>
  );
}

export default Techs;