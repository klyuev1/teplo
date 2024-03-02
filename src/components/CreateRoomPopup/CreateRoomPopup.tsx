import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FacadeModule from './FacadeModule/FacadeModule';
import { Room } from "../../models/models";
import { usePostRoomMutation } from '../../store/api/apiRoomSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { closeCreateRoomPopup } from '../../store/reducers/popupSlice';
import { useGetFacadesQuery } from '../../store/api/apiFacadeSlice';

function CreateRoomPopup() {


  const { data: facades } = useGetFacadesQuery();

  const projectID = useAppSelector((state) => state.projectID);
  const [handleCreateRoom, {error, isLoading}] = usePostRoomMutation();

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.popup.isCreateRoomPopupOpen);
  const handleClose = () => {
    dispatch(closeCreateRoomPopup());
  }

  const [number, setNumber] = React.useState('');
  const [name, setName] = React.useState('');
  const [areaRoom, setAreaRoom] = React.useState<number | undefined>();
  

  React.useEffect(() => {
    if (error) {
      console.log(error)
    }
  },[error])

  React.useEffect(() => {
    setNumber('');
    setName('');
    setAreaRoom(undefined);
  }, [isOpen]);


  function handleChangeNumber(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value);
  }
  function handleChangeName(e: React.ChangeEvent<HTMLSelectElement>) {
    setName(e.target.value);
  }
  function handleChangeAreaRoom(e: React.ChangeEvent<HTMLInputElement>) {
    setAreaRoom(e.target.value === '' ? undefined : +e.target.value);
  }

  const [height,setHeight ] = React.useState<number>();
  const [width,setWidth ] = React.useState<number>();
  const [areaWall,setAreaWall ] = React.useState<number>();
  const [areaWindow,setAreaWindow ] = React.useState<number>();
  const [numberFacade, setNumberFacade] = React.useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const room: Room = {
      number: number!,
      name: name!,
      height: height!,
      width: width!,
      areaWall: areaWall!,
      areaWindow: areaWindow!,
      areaRoom: areaRoom!,
      numberFacade: numberFacade!,
    };
    if (typeof projectID === 'string') {
      await handleCreateRoom({ projectID, room })
      handleClose();
    }
  } 

  return(
    <PopupWithForm
    name='create-project'
    title='Cоздание комнаты'
    buttonName={isLoading ? 'Создание...' : 'Создать комнату'}
    isOpen={isOpen}
    isClose={handleClose}
    onSubmit={handleSubmit}
    >
      <label className='popup__label'>
        <h3 className='popup__input-name'>Номер комнаты:</h3>
        <input
          name='numberRoom' type='text' className='popup__input' required
          onChange={handleChangeNumber} value={number}
        />
      </label>
      
      <label className='popup__label'>
        <h3 className='popup__input-name'>Наименование комнаты:</h3>
        
        <select name='name' className='popup__select' required onChange={handleChangeName} value={name}>

          <option className='popup__select-item' value='' selected disabled>
            Выберите тип помещения
          </option>
          <option className='popup__select-item' value='Жилая комната'>
            Жилая комната
          </option>
          <option className='popup__select-item' value='Кухня-гостинная'>
            Кухня-гостинная
          </option>

        </select>
      
      </label>
      
      <label className='popup__label'>
        <h3 className='popup__input-name'>Площадь помещения:</h3>
        <input
          name='areaRoom' type='number' className='popup__input' required
          onChange={handleChangeAreaRoom} value={areaRoom && areaRoom }
        />
      </label>
      
      <label className='popup__label'>
        
        <h3 className='popup__input-name'>Тип фасада</h3>
        
        <div className='popup-facade-room__box'>
          {facades && facades.map((facade) => (
            <FacadeModule 
              facade={facade}
              key={facade.id}
              setHeight={setHeight}
              setWidth={setWidth}
              setAreaWall={setAreaWall}
              setAreaWindow={setAreaWindow}
              setNumberFacade={setNumberFacade}
            />
          ))}
        </div>

      </label>

    </PopupWithForm>
  )
}

export default CreateRoomPopup;