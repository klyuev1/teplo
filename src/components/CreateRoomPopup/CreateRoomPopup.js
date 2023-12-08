import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import facadesData from '../../utils/facade-data';
import Facade from '../Facade/Facade';

function CreateRoomPopup(props) {
  

  return(
    <PopupWithForm
    name='create-project'
    title='Cоздание комнаты'
    buttonName='Создать комнату'
    isOpen={props.isOpen}
    isClose={props.onClose}
    >
      <label className='popup__label'>
        <h3 className='popup__input-name'>Номер комнаты:</h3>
        <input
          name='numberRoom' type='text' className='popup__input' required
          // onChange=''
        />
      </label>
      
      <label className='popup__label'>
        <h3 className='popup__input-name'>Наименование комнаты:</h3>
        <input
          name='nameRoom' type='text' className='popup__input' required
          // onChange=''
        />
      </label>
      
      <label className='popup__label'>
        <h3 className='popup__input-name'>Площадь помещения:</h3>
        <input
          name='areaRoom' type='number' className='popup__input' required
          // onChange=''
        />
      </label>
      
      <label className='popup__label'>
        <h3 className='popup__input-name'>Тип фасада</h3>
        <div className='popup-facade-room__box'>
          {facadesData.map((facade) => (
            <article className='popup-facade-room'>
            <input type='radio' name="facade" className='popup-facade-room__input'/>
            <div className='popup-facade-room__card'>
              <img src={facade.link} className='popup-facade-room__img'  alt='facade'/>
              <h3 className='popup-facade-room__title'>{facade.name}</h3>
            </div >
          </article>
          ))}
        </div>
      </label>

    </PopupWithForm>
  )
}

export default CreateRoomPopup;