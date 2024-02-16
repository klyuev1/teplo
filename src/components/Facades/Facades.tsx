import React from 'react';
import Facade from '../Facade/Facade';

import { FacadesProps } from '../../utils/interfaces';
import { FacadeLogo } from '../../ui/icons/svgIcons';
import { useGetFacadesQuery } from '../../store/api/apiFacadeSlice';
import { useAppDispatch } from '../../store/hooks/hooks';
import { openCreateFacadePopup } from '../../store/reducers/popupSlice';

function Facades({onCreareFacade, onCardDelete, onClickFacade}: FacadesProps) {
  
  const {data: facades} = useGetFacadesQuery();
  const dispatch = useAppDispatch();
  
  const handleCreateFacadeClick = () => {
    dispatch(openCreateFacadePopup())
  }
  
  return (
    <section className='facades'>
      
      <div className='fasades__up-container'>
        <div className='fasades__title-box'>
          <FacadeLogo/>
          <h2 className='fasades__title'>Фасады</h2>
        </div>
        <button className='fasades__button' type='button'
        onClick={handleCreateFacadeClick}>
          Создать фасад
        </button>
      </div>

      <section className='elements'>
        {facades && facades.map((facade) => (
          <Facade
            facade={facade}
            onCardDelete={onCardDelete}
            onClickFacade={onClickFacade}
          />
        ))}
      </section>
    </section>
  );
}

export default Facades;
