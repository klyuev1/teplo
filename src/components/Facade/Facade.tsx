import React from 'react';
import { FacadeProps } from '../../utils/interfaces';

function Facade({facade, onCardDelete, onClickFacade}: FacadeProps) {

  function handleDeleteClick() {
    onCardDelete(facade)
  }

  function handleClick() {
    onClickFacade(facade);
  }

  return (
    <article className='element'>
      <button className='element__button' type='button' onClick={handleClick}>
        <img className='element__photo' src={facade.link} alt='facade'/>
        <div className='element__div'>
          <h3 className='element__number'>{facade.name}</h3>
          <button className='element__button-delete' type='button' onClick={handleDeleteClick}></button>
        </div>
      </button>
    </article>
  );
}

export default Facade;
