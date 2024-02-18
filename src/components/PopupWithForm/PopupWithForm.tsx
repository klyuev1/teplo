import React from 'react';
import {PopupWithFormProps} from "../../models/props";

function PopupWithForm({name, title, buttonName, isOpen, isClose, onSubmit, children}: PopupWithFormProps) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''} `}>
      <div className='popup__container'>
        <div className='popup__div'></div>
        <form className='popup__form' onSubmit={onSubmit}>
          <div className='popup__header'>
            <h2 className='popup__title'>{title}</h2>
            <button className='popup__button-close' onClick={isClose} type='button'> </button>
          </div>
          {children}
          <button className={`popup__button-submit popup__button-submit_type_${name}`} type='submit'>
            {buttonName}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
