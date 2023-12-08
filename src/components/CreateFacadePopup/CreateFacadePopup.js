import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function CreateFacadePopupOpen(props) {
  return (
    <PopupWithForm
      name='create-project'
      title='Cоздание фасада'
      buttonName='Создать фасад'
      isOpen={props.isOpen}
      isClose={props.onClose}
    >
      <label className='popup__label'>
        <h3 className='popup__input-name'>Наименование фасада:</h3>
        <input
          name='author'
          type='text'
          className='popup__input'
          minLength='2'
          maxLength='40'
          required
          onChange=''
        />
      </label>
      <label className='popup__label'>
        <h3 className='popup__input-name'>Изображение:</h3>
        <input
          name='author'
          type='text'
          className='popup__input'
          minLength='2'
          maxLength='40'
          required
          onChange=''
        />
      </label>
      <div className='popup__input-section'>
        <label className='popup__label'>
          <h3 className='popup__input-name'>Высота фасада:</h3>
          <div className='popup__input-unit-block'>
            <input
              name='author'
              type='text'
              className='popup__input'
              minLength='2'
              maxLength='40'
              required
              onChange=''
            />
            <p className='popup__input-unit'>мм</p>
          </div>
        </label>
        <label className='popup__label'>
          <h3 className='popup__input-name'>Ширина фасада:</h3>
          <div className='popup__input-unit-block'>
            <input
              name='author'
              type='text'
              className='popup__input'
              minLength='2'
              maxLength='40'
              required
              onChange=''
            />
            <p className='popup__input-unit'>мм</p>
          </div>
        </label>
        <label className='popup__label'>
          <h3 className='popup__input-name'>Площадь окна/витража:</h3>
          <div className='popup__input-unit-block'>
            <input
              name='author'
              type='text'
              className='popup__input'
              minLength='2'
              maxLength='40'
              required
              onChange=''
            />
            <p className='popup__input-unit'>м2</p>
          </div>
        </label>
      </div>
    </PopupWithForm>
  );
}

export default CreateFacadePopupOpen;
