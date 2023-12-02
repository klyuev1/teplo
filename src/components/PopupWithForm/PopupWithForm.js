import React from 'react';

function PopupWithForm() {
  return (
    <div className={'popup'}>
      <div className='popup__container'>
        <form className='popup__form'>
          <div className='popup__header'>
            <h2 className='popup__title'>Создание проекта</h2>
            <button className='popup__button-close'> </button>
          </div>
          {/* props.children инпуты разместить*/}
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
              <option className='popup__select-item' value=''>Новосибирск</option>
              <option className='popup__select-item' value=''>Москва</option>
              <option className='popup__select-item' value=''>Екатеринбург</option>
            </select>
          </label>

          <button className='popup__button-submit' type='submit'>
            Создать проект
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
