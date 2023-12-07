import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''} `}>
      <div className='popup__container'>
        <form className='popup__form'>
          <div className='popup__header'>
            <h2 className='popup__title'>{props.title}</h2>
            <button className='popup__button-close'> </button>
          </div>
          {props.children}
          <button className={`popup__button-submit popup__button-submit_type_${props.name}`} type='submit'>
            {props.buttonName}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;