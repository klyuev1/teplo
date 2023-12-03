import React from 'react';
import { Link } from 'react-router-dom';

function Header({isLoggedIn, purpleThemeHeader, colorWhite}) {
  
  return (
    <>
      <header className= {`header ${purpleThemeHeader}`} >
        <section className='header__func'>
                  
          <div className='header__box'>

            <a className='header__logo-berp' href='#'>B.ERP</a>
            <div className={`header__br ${colorWhite}`}></div>
            <Link className='header__logo' to='/'>Брусника. Тепло</Link>
            {isLoggedIn === true &&<Link className='header__link' to='/projects'>Проекты</Link>}
            {isLoggedIn === true &&<Link className='header__link' to='/facades'>Фасады</Link>}
          
          </div>

          <div className='header__box'>
            
            {isLoggedIn === true &&<button className='header__notification' type='button'/>}
            {isLoggedIn === true &&<button className='header__profile' type='button'>
              <img className='header__photo' src='https://sopranoclub.ru/images/memy-na-avu-275-memnyh-avatarok/file56870.jpeg' alt='фото пользователя' />
            </button>}
            
            {isLoggedIn === false && <Link className='header__link' to='/signin'>Вход</Link>}
            {isLoggedIn === false && <Link className='header__link' to='/signup'>Регистрация</Link>}

          </div>
        </section>
      </header>
    </>
    
  );
}

export default Header;