import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
// import { getFacades } from '../../utils/Api';
import { useRooms } from '../../contexts/RoomsContext';
import FacadeModule from './FacadeModule/FacadeModule'


function CreateRoomPopup(props) {


  const { projectID } = useRooms();
  

  const [number, setNumber] = React.useState('');
  const [name, setName] = React.useState('');
  const [areaRoom, setAreaRoom] = React.useState('');
  

  React.useEffect(() => {
    setNumber('');
    setName('');
    setAreaRoom('');
  }, [props.isOpen]);


  function handleChangeNumber(e) {
    setNumber(e.target.value);
  }
  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeAreaRoom(e) {
    setAreaRoom(e.target.value);
  }

  const [height,setHeight ] = React.useState('');
  const [width,setWidth ] = React.useState('');
  const [areaWall,setAreaWall ] = React.useState('');
  const [areaWindow,setAreaWindow ] = React.useState('');
  const [numberFacade, setNumberFacade] = React.useState('');


  // Убрать этот кусок кода после редактирования БЭКа
  // height, width, areaWall, areaWindow

  function handleSubmit(e) {
    e.preventDefault();
    props.onCreateRoom(projectID, {number, name, height, width, areaWall, areaWindow, areaRoom, numberFacade})
    props.onClose();
  } 

  return(
    <PopupWithForm
    name='create-project'
    title='Cоздание комнаты'
    buttonName='Создать комнату'
    isOpen={props.isOpen}
    isClose={props.onClose}
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
        
        <select name='name' type='text' className='popup__select' required onChange={handleChangeName} value={name}>

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
          {props.facades.map((facade) => (
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