import React from 'react';

function Facade(props) {

  function handleDeleteClick() {
    props.onCardDelete(props.facade)
  }

  function handleClick() {
    props.onClickFacade(props.facade);
  }

  return (
    <article className='element'>
      <button className='element__button' type='button' onClick={handleClick}>
        <img className='element__photo' src={props.link} alt='facade'/>
        <div className='element__div'>
          <h3 className='element__number'>{props.name}</h3>
          <button className='element__button-delete' type='button' onClick={handleDeleteClick}></button>
        </div>
      </button>
    </article>
  );
}

export default Facade;
