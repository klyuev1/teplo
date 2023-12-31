import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import {
  T_OUTSIDE_MSK, T_INSIDE_MSK, R_WALL_MSK, R_WINDOW_MSK,
  T_OUTSIDE_EKB, T_INSIDE_EKB, R_WALL_EKB, R_WINDOW_EKB,
  T_OUTSIDE_TMN, T_INSIDE_TMN, R_WALL_TMN, R_WINDOW_TMN,
  T_OUTSIDE_OMK, T_INSIDE_OMK, R_WALL_OMK, R_WINDOW_OMK,
  T_OUTSIDE_KRG, T_INSIDE_KRG, R_WALL_KRG, R_WINDOW_KRG,
  T_OUTSIDE_NSB, T_INSIDE_NSB, R_WALL_NSB, R_WINDOW_NSB, 
  T_OUTSIDE_SRG, T_INSIDE_SRG, R_WALL_SRG, R_WINDOW_SRG,
  BETA, K_HOUSEHOLD
} from '../../utils/Regions';

function CreateProjectPopupOpen(props) {
  const [name, setName] = React.useState('');
  const [region, setRegion] = React.useState('');
  const [tOutside, setTOutside] = React.useState();
  const [tInside, setTInside] = React.useState();
  const [rWall, setRWall] = React.useState();
  const [rWindow, setRWindow] = React.useState();
  const [beta, setBeta] = React.useState();
  const [kHousehold, setKHousehold] = React.useState();

  React.useEffect(() => {
    setName('');
    setRegion('');
  }, [props.isOpen]);
  
  React.useEffect(() => {
    setBeta(BETA);
    setKHousehold(K_HOUSEHOLD);

    if (region === 'Москва') {
      setTOutside(T_OUTSIDE_MSK);
      setTInside(T_INSIDE_MSK);
      setRWall(R_WALL_MSK);
      setRWindow(R_WINDOW_MSK);
    } else if (region === 'Екатеринбург') {
      setTOutside(T_OUTSIDE_EKB);
      setTInside(T_INSIDE_EKB);
      setRWall(R_WALL_EKB);
      setRWindow(R_WINDOW_EKB);
    } else if (region === 'Тюмень') {
      setTOutside(T_OUTSIDE_TMN);
      setTInside(T_INSIDE_TMN);
      setRWall(R_WALL_TMN);
      setRWindow(R_WINDOW_TMN);
    } else if (region === 'Омск') {
      setTOutside(T_OUTSIDE_OMK);
      setTInside(T_INSIDE_OMK);
      setRWall(R_WALL_OMK);
      setRWindow(R_WINDOW_OMK);
    } else if (region === 'Курган') {
      setTOutside(T_OUTSIDE_KRG);
      setTInside(T_INSIDE_KRG);
      setRWall(R_WALL_KRG);
      setRWindow(R_WINDOW_KRG);
    } else if (region === 'Новосибирск') {
      setTOutside(T_OUTSIDE_NSB);
      setTInside(T_INSIDE_NSB);
      setRWall(R_WALL_NSB);
      setRWindow(R_WINDOW_NSB);
    } else if (region === 'Сургут') {
      setTOutside(T_OUTSIDE_SRG);
      setTInside(T_INSIDE_SRG);
      setRWall(R_WALL_SRG);
      setRWindow(R_WINDOW_SRG);
    } 
  }, [region]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeRegion(e) {
    setRegion(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleCreateProject({name, tOutside, tInside, rWall, rWindow, beta, kHousehold});
    props.onClose();
  } 
   

  return (
    <PopupWithForm
      name='create-project'
      title='Cоздание проекта'
      buttonName='Создать проект'
      isOpen={props.isOpen}
      isClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className='popup__label'>
        <h3 className='popup__input-name'>Наименование проекта:</h3>
        <input
          name='name' type='text'
          className='popup__input'
          minLength='2'
          maxLength='40'
          required
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label className='popup__label'>
        <h3 className='popup__input-name'>Регион:</h3>
        <select className='popup__select' id='region' onChange={handleChangeRegion} value={region} required >
          
          <option className='popup__select-item' value='' selected disabled>
            Выберите город
          </option>
          <option className='popup__select-item' value='Москва'>
            Москва
          </option>
          <option className='popup__select-item' value='Екатеринбург'>
            Екатеринбург
          </option>
          <option className='popup__select-item' value='Тюмень'>
            Тюмень
          </option>
          <option className='popup__select-item' value='Омск'>
            Омск
          </option>
          <option className='popup__select-item' value='Курган'>
            Курган
          </option>
          <option className='popup__select-item' value='Новосибирск'>
            Новосибирск
          </option>
          <option className='popup__select-item' value='Сургут'>
            Сургут
          </option>
        
        </select>
      </label>
    </PopupWithForm>
  );
}

export default CreateProjectPopupOpen;
