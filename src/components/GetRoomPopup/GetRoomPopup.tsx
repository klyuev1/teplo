import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { closeSelectedRoom } from '../../store/reducers/selectedRoomSlice';

function GetRoomPopup() {
  
  const dispatch = useAppDispatch();
  const room = useAppSelector(state => state.selectedRoom.selectedRoom);

  const onClose = () => {
    dispatch(closeSelectedRoom());
  }


  const widthInMM = room.width*1000;
  const heightInMM = room.height*1000;
  const areaWallRounded = Math.round(room.areaWall * 100) / 100;
  const areaWindowRounded = Math.round(room.areaWindow * 100) / 100;

  return (
    <div className={`popup popup_type ${room.name ? 'popup_opened' : ''} `}>
      <div className='popup__container'>
        <div className='popup__div'></div>
        <div className='popup__form'>
          
          <div className='popup__header'>
            <h2 className='popup__title'>Информация о комнате</h2>
            <button className='popup__button-close' onClick={onClose} type='button'> </button>
          </div>

          <div className='popup__room-div'>
              
              <div className='popup__room-info td1'>
                <h3 className='popup__input-name popup__name-start'>Номер:</h3>
                <p className='popup__input popup__text'>{room.number}</p>
              </div>

              <div className='popup__room-info td2'>
                <h3 className='popup__input-name popup__name-start'>Наименование комнаты:</h3>
                <p className='popup__input popup__text'>{room.name}</p>
              </div>
              
              <div className='popup__room-info td3'>
                <h3 className='popup__input-name popup__name-start'>Номер фасада:</h3>
                <p className='popup__input popup__text'>{room.numberFacade}</p>
              </div>
            
              <div className='popup__room-info td4'>
                <h3 className='popup__input-name'>Ширина:</h3>
                <div className='popup__input-unit-block'>
                  <p className='popup__input popup__text'>{widthInMM}</p>
                  <p className='popup__input-unit'>мм</p>
                </div>
              </div>
              
              <div className='popup__room-info td5'>
                <h3 className='popup__input-name'>Высота:</h3>
                <div className='popup__input-unit-block'>
                  <p className='popup__input popup__text'>{heightInMM}</p>
                  <p className='popup__input-unit'>мм</p>
                </div>
              </div>
              
              <div className='popup__room-info td6'>
                <h3 className='popup__input-name'>Площадь стены:</h3>
                <div className='popup__input-unit-block'>
                  <p className='popup__input popup__text'>{areaWallRounded}</p>
                  <p className='popup__input-unit'>м²</p>
                </div>
              </div>
             
              <div className='popup__room-info td7'>
                <h3 className='popup__input-name'>Площадь окна:</h3>
                <div className='popup__input-unit-block'>
                  <p className='popup__input popup__text'>{areaWindowRounded}</p>
                  <p className='popup__input-unit'>м²</p>
                </div>
              </div>
              
              <div className='popup__room-info td8'>
                <h3 className='popup__input-name'>Теплопотери</h3>
                <div className='popup__input-unit-block'>
                  <p className='popup__input popup__text'>{room.heatLoss}</p>
                  <p className='popup__input-unit'>Вт</p>
                </div>
              </div>
              
          </div>

        </div>
      </div>
    </div>
  );
}

export default GetRoomPopup;