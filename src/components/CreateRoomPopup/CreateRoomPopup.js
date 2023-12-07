import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import facadesData from '../../utils/facade-data';
import Facade from '../Facade/Facade';

function CreateRoomPopup({isOpen}) {
  

  return(
    <PopupWithForm
    name='create-project'
    title='Cоздание комнаты'
    buttonName='Создать комнату'
    isOpen={isOpen}
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
        <h3 className='popup__input-name'>Площадь помещения</h3>
        <input
          name='areaRoom' type='number' className='popup__input' required
          // onChange=''
        />
      </label>
      
      {/* <label className='popup__label'>
        <h3 className='popup__input-name'>Тип фасада</h3>
        <div>
          {facadesData.map((facade) => (
            <article className='element'>
            <input type='radio' />
            <button className='element__button' type='button'>
              <img className='element__photo'  alt='facade'/>
              <h3 className='element__number'>{facade.name}</h3>
            </button>
          </article>
          ))}
        </div>
      </label> */}

    </PopupWithForm>
  )
}

export default CreateRoomPopup;