import React from 'react';
import Facade from '../Facade/Facade';

import { FacadesProps } from '../../utils/interfaces';
import { FacadeLogo } from '../../ui/icons/svgIcons';

function Facades({onCreareFacade, onCardDelete, onClickFacade, facades}: FacadesProps) {
  return (
    <section className='facades'>
      
      <div className='fasades__up-container'>
        <div className='fasades__title-box'>
          <FacadeLogo/>
          <h2 className='fasades__title'>Фасады</h2>
        </div>
        <button className='fasades__button' type='button'
        onClick={onCreareFacade}>
          Создать фасад
        </button>
      </div>

      <section className='elements'>
        {facades.map((facade) => (
          <Facade
            facade={facade}
            onCardDelete={onCardDelete}
            onClickFacade={onClickFacade}
          />
        ))}
      </section>
    </section>
  );
}

export default Facades;
