import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function CreateFacadePopupOpen(props) {
  return(
    <PopupWithForm
    name='create-project'
    title='Cоздание фасада'
    buttonName='Создать фасад'
    isOpen={props.isOpen}
    >
      <label className='popup__label'>
        <h3 className='popup__input-name'>Наименование фасада:</h3>
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
        <h3 className='popup__input-name'>Изображение:</h3>
        <input
          name='author'
          type='text'
          className='popup__input'
          value='https://i.pinimg.com/236x/34/78/3b/34783b77c9cff4059bdf44ce8934bb35.jpg'
          minLength='2'
          maxLength='40'
          required
          onChange=''
        />
      </label>
      <div className='popup__input-section'>
      <label className='popup__label'>
        <h3 className='popup__input-name'>Изображение:</h3>
        <input
          name='author'
          type='text'
          className='popup__input'
          value='https://i.pinimg.com/236x/34/78/3b/34783b77c9cff4059bdf44ce8934bb35.jpg'
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
          value='https://i.pinimg.com/236x/34/78/3b/34783b77c9cff4059bdf44ce8934bb35.jpg'
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
          value='https://i.pinimg.com/236x/34/78/3b/34783b77c9cff4059bdf44ce8934bb35.jpg'
          minLength='2'
          maxLength='40'
          required
          onChange=''
        />
      </label>
      </div>
    </PopupWithForm>
  )
}

export default CreateFacadePopupOpen
