import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { closeSelectedFacade } from '../../store/reducers/selectedFacadeSlice';
import { BASE_URL } from '../../utils/constants';

function GetFacadePopup() {

  const dispatch = useAppDispatch();
  const facade = useAppSelector(state => state.selectedFacade.selectedFacade);

  const handleClose = () => {
    dispatch(closeSelectedFacade())
  }



  return (
    <div className={`popup popup_type ${facade.link ? 'popup_opened' : ''} `}>
      <div className='popup__container'>
        <div className='popup__div'></div>
        <div className='popup__form'>
          
          <div className='popup__header'>
            <h2 className='popup__title'>Информация о фасаде</h2>
            <button className='popup__button-close' onClick={handleClose} type='button'> </button>
          </div>

          <div className='popup__common-div'>

            <div className='popup__label popup__main-label'>
              <img className='popup__img' src={`${BASE_URL}/${facade.link}`} alt='facade'/>
              <h3 className='popup__input-name popup__name-start'>Наименование фасада:</h3>
              <p className='popup__input popup__text'>{facade.name}</p>
            </div>

            <div className='popup__input-section'>
              
              <div className='popup__label'>
                <h3 className='popup__input-name'>Высота фасада:</h3>
                <div className='popup__input-unit-block'>
                  <p className='popup__input popup__text'>{facade.height}</p>
                  <p className='popup__input-unit'>мм</p>
                </div>
              </div>
              
              <div className='popup__label'>
                <h3 className='popup__input-name'>Ширина фасада:</h3>
                <div className='popup__input-unit-block'>
                  <p className='popup__input popup__text'>{facade.width}</p>
                  <p className='popup__input-unit'>мм</p>
                </div>
              </div>
              
              <div className='popup__label'>
                <h3 className='popup__input-name'>Площадь окна/витража:</h3>
                <div className='popup__input-unit-block'>
                  <p className='popup__input popup__text'>{facade.areaWindow}</p>
                  <p className='popup__input-unit'>м²</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default GetFacadePopup;