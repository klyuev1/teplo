import React from 'react';
import { Link } from 'react-router-dom';
import {HeaderProps} from "../../models/props";

function Header({isLoggedIn, purpleThemeHeader}: HeaderProps) {
  
  return (
    <>
      <header className= {`header ${purpleThemeHeader}`} >
        <section className='header__func'>
                  
          <div className='header__box'>

            <Link className='header__logo' to='/'>Брусника. Тепло</Link>
            {isLoggedIn === true &&<Link className='header__link' to='/projects'>Проекты</Link>}
            {isLoggedIn === true &&<Link className='header__link' to='/facades'>Фасады</Link>}
          
          </div>

          <div className='header__box'>
            
            {isLoggedIn === true && <Link className="header__user" to='/profile'><div className={`header__user-logo`}/></Link>}
            
            {isLoggedIn === false && <Link className='header__link' to='/signin'>Вход</Link>}
            {isLoggedIn === false && <Link className='header__link' to='/signup'>Регистрация</Link>}

          </div>
        </section>
      </header>
    </>
    
  );
}

export default Header;