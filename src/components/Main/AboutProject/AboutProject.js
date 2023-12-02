import React from 'react';

function AboutProject() {

  
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      
      <div className='about-project__info'>
        <div className='about-project__info-column'>
          <h3 className='about-project__subtitle'>Проект включал в себя 5 этапов</h3>
          <ul className='about-project__ul'>
            <li className='about-project__text'>Составление плана. Согласования</li>
            <li className='about-project__text'>Разработка макета в Figma</li>
            <li className='about-project__text'>Разработка Back-end части проекта</li>
            <li className='about-project__text'>Разработка Front-end части проекта</li>
            <li className='about-project__text'>Деплой работы на сервер. Создание домена</li>
          </ul>
          
        </div>
        <div className='about-project__info-column'>
          <h3 className='about-project__subtitle'>На выполнение проекта ушло 9 недель</h3>
          <p className='about-project__text'>На разработку проекта было затрачено 9 недель. Все время разработки трекалось в Toggl. Проек был реализован стараясь придерживаться стиля компании в дизайне. Макет разрабатывался с учетом фирменной айдентики. Соблюдение дедлайнов было обязательным условием, и благодаря этому подходу, мы завершили проект вовремя, предоставив заказчику готовый продукт.</p>
        </div>
      </div>

      <div className='about-project__time'>
        <p className='about-project__weeks first-week'>1 неделя</p>
        <p className='about-project__weeks second-week'>2 недели</p>
        <p className='about-project__weeks third-week'>2 недели</p>
        <p className='about-project__weeks fourth-week'>3 недели</p>
        <p className='about-project__weeks fifth-week'>1 неделя</p>
        
        <p className='about-project__part agreement'>Согласование</p>
        <p className='about-project__part design'>Макет</p>
        <p className='about-project__part back-end'>Back-end</p>
        <p className='about-project__part front-end'>Front-end</p>
        <p className='about-project__part deploy'>Deploy</p>
      </div>
    </section>
  );
}

export default AboutProject;
