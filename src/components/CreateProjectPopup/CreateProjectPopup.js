import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function CreateProjectPopupOpen(props) {
  return (
    <PopupWithForm
    name='create-project'
    title='Cоздание проекта'
    buttonName='Создать проект'
    isOpen={props.isOpen}
    >
      <label className='popup__label'>
        <h3 className='popup__input-name'>Наименование проекта:</h3>
        <input
          name='author'
          type='text'
          className='popup__input'
          value='Пшеница 2.1'
          minLength='2'
          maxLength='40'
          required
          onChange=''
        />
      </label>
      <label className='popup__label'>
        <h3 className='popup__input-name'>Регион:</h3>
        <select className='popup__select' id='region'>
          <option className='popup__select-item' value=''>
            Новосибирск
          </option>
          <option className='popup__select-item' value=''>
            Москва
          </option>
          <option className='popup__select-item' value=''>
            Екатеринбург
          </option>
        </select>
      </label>
    </PopupWithForm>
  );
}

export default CreateProjectPopupOpen
