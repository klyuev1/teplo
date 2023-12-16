import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function CreateFacadePopupOpen(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [width, setWidth] = React.useState('');
  const [areaWindow, setAreaWindow] = React.useState('');

  React.useEffect(() => {
    setName('');
    setLink('');
    setHeight('');
    setWidth('');
    setAreaWindow('');
  }, []);

  // Заполнение стейт переменных
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }
  function handleChangeHeight(e) {
    setHeight(e.target.value);
  }
  function handleChangeWidth(e) {
    setWidth(e.target.value);
  }
  function handleChangeAreaWindow(e) {
    setAreaWindow(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onCreateFacade({
      name,
      link,
      height,
      width,
      areaWindow,
    });
  }

  return (
    <PopupWithForm
      name='create-project'
      title='Cоздание фасада'
      buttonName='Создать фасад'
      isOpen={props.isOpen}
      isClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className='popup__label'>
        <h3 className='popup__input-name'>Наименование фасада:</h3>
        <input
          name='author'
          type='text'
          className='popup__input'
          minLength='2'
          maxLength='40'
          value={name}
          required
          onChange={handleChangeName}
        />
      </label>
      <label className='popup__label'>
        <h3 className='popup__input-name'>Изображение:</h3>
        <input
          name='author'
          type='url'
          className='popup__input'
          value={link}
          required
          onChange={handleChangeLink}
        />
      </label>
      <div className='popup__input-section'>
        <label className='popup__label'>
          <h3 className='popup__input-name'>Высота фасада:</h3>
          <div className='popup__input-unit-block'>
            <input
              name='author'
              type='number'
              step='10'
              className='popup__input'
              value={height}
              required
              onChange={handleChangeHeight}
            />
            <p className='popup__input-unit'>мм</p>
          </div>
        </label>
        <label className='popup__label'>
          <h3 className='popup__input-name'>Ширина фасада:</h3>
          <div className='popup__input-unit-block'>
            <input
              name='author'
              type='number'
              step='10'
              className='popup__input'
              value={width}
              required
              onChange={handleChangeWidth}
            />
            <p className='popup__input-unit'>мм</p>
          </div>
        </label>
        <label className='popup__label'>
          <h3 className='popup__input-name'>Площадь окна/витража:</h3>
          <div className='popup__input-unit-block'>
            <input
              name='author'
              type='number'
              step='0.1'
              className='popup__input'
              value={areaWindow}
              required
              onChange={handleChangeAreaWindow}
            />
            <p className='popup__input-unit'>м2</p>
          </div>
        </label>
      </div>
    </PopupWithForm>
  );
}

export default CreateFacadePopupOpen;
