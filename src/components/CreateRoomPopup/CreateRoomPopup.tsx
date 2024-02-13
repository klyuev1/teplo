import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
// import { getFacades } from '../../utils/Api';
import { useRooms } from '../../contexts/RoomsContext';
import FacadeModule from './FacadeModule/FacadeModule';
import {CreateRoomPopupProps, Room} from "../../utils/interfaces";

function CreateRoomPopup({isOpen, onClose, facades, onCreateRoom}: CreateRoomPopupProps) {

  const { projectID = null } = useRooms() || {};
  const [number, setNumber] = React.useState('');
  const [name, setName] = React.useState('');
  const [areaRoom, setAreaRoom] = React.useState<number>();
  

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


  // Убрать этот кусок кода после редактирования БЭКа
  // height, width, areaWall, areaWindow

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
      onCreateRoom(projectID, room)
      onClose();
    }
  } 

  return(
    <PopupWithForm
    name='create-project'
    title='Cоздание комнаты'
    buttonName='Создать комнату'
    isOpen={isOpen}
    isClose={onClose}
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
          onChange={handleChangeAreaRoom} value={areaRoom}
        />
      </label>
      
      <label className='popup__label'>
        
        <h3 className='popup__input-name'>Тип фасада</h3>
        
        <div className='popup-facade-room__box'>
          {facades.map((facade) => (
            <FacadeModule 
              facade={facade}
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