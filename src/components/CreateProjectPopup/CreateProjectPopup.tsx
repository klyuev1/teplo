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
import { Project } from "../../models/models";
import { usePostProjectMutation } from '../../store/api/apiProjectSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { closeCreateProjectPopup } from '../../store/reducers/popupSlice';

function CreateProjectPopupOpen() {

  const [handleCreateProject, {error, isLoading}] = usePostProjectMutation();

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.popup.isCreateProjectPopupOpen);
  const handleClose = () => {
    dispatch(closeCreateProjectPopup());
  }

  const [name, setName] = React.useState<string>('');
  const [region, setRegion] = React.useState<string>('');
  const [tOutside, setTOutside] = React.useState<number>();
  const [tInside, setTInside] = React.useState<number>();
  const [rWall, setRWall] = React.useState<number>();
  const [rWindow, setRWindow] = React.useState<number>();
  const [beta, setBeta] = React.useState<number>();
  const [kHousehold, setKHousehold] = React.useState<number>();

  React.useEffect(() => {
    if (error) {
      console.log(error)
    }
  },[error])

  React.useEffect(() => {
    setName('');
    setRegion('');
  }, [isOpen]);
  
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

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleChangeRegion(e: React.ChangeEvent<HTMLSelectElement>) {
    setRegion(e.target.value);
  }

  

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const project: Project = {
      name: name!,
      tOutside: tOutside!,
      tInside: tInside!,
      rWall: rWall!,
      rWindow: rWindow!,
      beta: beta!,
      kHousehold: kHousehold!,
    };
    await handleCreateProject(project)
    handleClose();
  }
   

  return (
    <PopupWithForm
      name='create-project'
      title='Cоздание проекта'
      buttonName={isLoading ? 'Создание...' : 'Создать проект'}
      isOpen={isOpen}
      isClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label className='popup__label'>
        <h3 className='popup__input-name'>Наименование проекта:</h3>
        <input
          name='name' type='text'
          className='popup__input'
          minLength={2}
          maxLength={40}
          required
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label className='popup__label'>
        <h3 className='popup__input-name'>Регион:</h3>
        <select className='popup__select' id='region' onChange={handleChangeRegion} value={region} required >
          
          <option className='popup__select-item' value='' disabled>
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
