import React from 'react';
import photo1 from '../../../images/photo.jpg';
import photo2 from '../../../images/oleg.jpg';

function AboutMe() {

  
  return (
    <section className='about-me' id='about-me'>
      <h3 className='about-me__heading'>Авторы</h3>
      
      <div className='about-me__column'>
        
        <div className='about-me__resume'>
          <div className='about-me__info'>
            <h2 className='about-me__name'>Клюев Артём</h2>
            <p className='about-me__prof'>Фулстек-разработчик</p>
            <p className='about-me__text'>Реализация back-end части приложения. Реализация front-end части приложения. Работа с деплоем.</p>
            <a className='about-me__link' href='https://github.com/klyuev1' target='_blank' rel="noreferrer">Github</a>
          </div>
          <img className='about-me__photo' src={photo1} alt='мой аватар' />
        </div>

        <div className='about-me__resume'>
          <div className='about-me__info'>
            <h2 className='about-me__name'>Клюев Олег</h2>
            <p className='about-me__prof'>Фулстек-разработчик</p>
            <p className='about-me__text'>Согласование задач. Реализация макета в figma. Реализация front-end части приложения. Работа с деплоем.</p>
            <a className='about-me__link' href='https://github.com/Jojokora135791' target='_blank' rel="noreferrer">Github</a>
          </div>
          <img className='about-me__photo' src={photo2} alt='мой аватар' />
        </div>

      </div>

      
      
    </section>
  );
}

export default AboutMe;