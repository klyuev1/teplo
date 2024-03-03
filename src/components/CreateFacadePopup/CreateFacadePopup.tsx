import React, { useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { usePostFacadeMutation } from '../../store/api/apiFacadeSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { closeCreateFacadePopup } from '../../store/reducers/popupSlice';
import { openInfoTooltipFacade } from '../../store/reducers/infoTooltipSlice';

function CreateFacadePopupOpen() {
  const [isLoading, setIsLoading] = useState(false);
  
  const [handleCreateFacade, {error}] = usePostFacadeMutation();

  const dispatch = useAppDispatch();
  const isCreateFacadePopupOpen = useAppSelector(state => state.popup.isCreateFacadePopupOpen);
  
  const handleOpenInfoToolTip = () => {
    if (error) {
      dispatch(openInfoTooltipFacade('Что-то не так с введенными данными'))
    }
  }
  const handleClose = () => {
    dispatch(closeCreateFacadePopup())
  }

  const [name, setName] = React.useState<string>('');
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [height, setHeight] = React.useState<number>();
  const [width, setWidth] = React.useState<number>();
  const [areaWindow, setAreaWindow] = React.useState<number>();
  const [areaWall, setAreaWall] = React.useState<number>();

  useEffect(() => {
    setName('');
    setImageFile(null);
    setHeight(undefined);
    setWidth(undefined);
    setAreaWindow(undefined);
    setAreaWall(undefined);
  }, [isCreateFacadePopupOpen]);

  // Заполнение стейт переменных
  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  }
  function handleChangeHeight(e: React.ChangeEvent<HTMLInputElement>) {
    setHeight(Number(e.target.value));
  }
  function handleChangeWidth(e: React.ChangeEvent<HTMLInputElement>) {
    setWidth(Number(e.target.value));
  }
  function handleChangeAreaWindow(e: React.ChangeEvent<HTMLInputElement>) {
    setAreaWindow(Number(e.target.value));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    console.log({ facade: { name, height, width, areaWindow, areaWall }, image: imageFile! })
    try {
      await handleCreateFacade({ facade: { name, height, width, areaWindow, areaWall }, image: imageFile! });
      handleClose();
    } catch(e) {
      console.error('Error creating facade:', error);
      handleOpenInfoToolTip();
    }
    setIsLoading(false);
  }

  return (
    <PopupWithForm name='create-project'
      title='Cоздание фасада'
      buttonName={isLoading ? 'Создание...' : 'Создать фасад'}
      isOpen={isCreateFacadePopupOpen}
      isClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label className='popup__label'>
        <h3 className='popup__input-name'>Наименование фасада:</h3>
        <input
          name='author' type='text' className='popup__input' minLength={2} maxLength={40}
          value={name} required onChange={handleChangeName}
        />
      </label>
      
      <label className='popup__label'>
        <h3 className='popup__input-name'>Изображение:</h3>
        <input
          name='author' type='file' className='popup__input popup__input_file' required onChange={handleImageChange}
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
            <p className='popup__input-unit'>м²</p>
          </div>
        </label>
      </div>

    </PopupWithForm>
  );
}

export default CreateFacadePopupOpen;
