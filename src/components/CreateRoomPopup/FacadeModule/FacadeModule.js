import React from 'react';


function FacadeModule({facade, setHeight, setWidth, setAreaWall, setAreaWindow, setNumberFacade}) {
  
  // setHeight(facade.height);
  const handleRadioChange = () => {
    setHeight((facade.height)/1000); // Убрать этот кусок кода после редактирования БЭКа
    setWidth((facade.width)/1000); // Убрать этот кусок кода после редактирования БЭКа
    setAreaWall(facade.areaWall);
    setAreaWindow(facade.areaWindow);
    setNumberFacade(facade.name);
  };


  return(
    <article className='popup-facade-room'>
      <input type='radio' name="facade" className='popup-facade-room__input' onChange={handleRadioChange} required/ >
      <div className='popup-facade-room__card'>
        <img src={facade.link} className='popup-facade-room__img'  alt='facade'/>
        <h3 className='popup-facade-room__title'>{facade.name}</h3>
      </div >
    </article>
  )
}

export default FacadeModule;