import React from 'react';
import Facade from '../Facade/Facade';
import iconFasades from '../../images/iconFasades.svg';

function Facades(props) {
  return (
    <section className='facades'>
      
      <div className='fasades__up-container'>
        <div className='fasades__title-box'>
          <img className='fasades__title-logo' src={iconFasades} alt='logo'/>
          <h2 className='fasades__title'>Фасады</h2>
        </div>
        <button className='fasades__button' type='button'
        onClick={props.onCreareFacade}>
          Создать фасад
        </button>
      </div>

      <section className='elements'>
        {props.facades.map((facade) => (
          <Facade
            facade={facade}
            name={facade.name}
            link={facade.link}
            height={facade.height}
            width={facade.width}
            areaWall={facade.areaWall}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </section>
  );
}

export default Facades;
