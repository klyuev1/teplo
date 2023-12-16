import React from 'react';

function GetFacadePopup(props) {
  return (
    <div className={`popup popup_type ${props.facade.link ? 'popup_opened' : ''} `}>
      <div className='popup__container'>
        <div className='popup__div'></div>
        <div className='popup__form'>
          
          <div className='popup__header'>
            <h2 className='popup__title'>Информация о фасаде</h2>
            <button className='popup__button-close' onClick={props.onClose} type='button'> </button>
          </div>

          <div className='popup__common-div'>

            <div className='popup__label popup__main-label'>
              <img className='popup__img' src={props.facade.link} alt={props.facade.name}/>
              <h3 className='popup__input-name popup__name-start'>Наименование фасада:</h3>
              <p className='popup__input popup__text'>{props.facade.name}</p>
            </div>

            <div className='popup__input-section'>
              
              <div className='popup__label'>
                <h3 className='popup__input-name'>Высота фасада:</h3>
                <div className='popup__input-unit-block'>
                  <p className='popup__input popup__text'>{props.facade.height}</p>
                  <p className='popup__input-unit'>мм</p>
                </div>
              </div>
              
              <div className='popup__label'>
                <h3 className='popup__input-name'>Ширина фасада:</h3>
                <div className='popup__input-unit-block'>
                  <p className='popup__input popup__text'>{props.facade.width}</p>
                  <p className='popup__input-unit'>мм</p>
                </div>
              </div>
              
              <div className='popup__label'>
                <h3 className='popup__input-name'>Площадь окна/витража:</h3>
                <div className='popup__input-unit-block'>
                  <p className='popup__input popup__text'>{props.facade.areaWindow}</p>
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