import React from 'react';
import { useEffect } from "react";
import Facade from "../Facade/Facade";
import { FacadeLogo } from "../../ui/icons/svgIcons";
import { useGetFacadesQuery } from "../../store/api/apiFacadeSlice";
import { useAppDispatch } from "../../store/hooks/hooks";
import { openCreateFacadePopup } from "../../store/reducers/popupSlice";

function Facades() {
  const { data: facades, error } = useGetFacadesQuery();
  const dispatch = useAppDispatch();

  const handleCreateFacadeClick = () => {
    dispatch(openCreateFacadePopup());
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);


  return (
    <section className="facades">
      <div className="fasades__up-container">
        <div className="fasades__title-box">
          <FacadeLogo />
          <h2 className="fasades__title">Фасады</h2>
        </div>
        <button
          className="fasades__button"
          type="button"
          onClick={handleCreateFacadeClick}
        >
          Создать фасад
        </button>
      </div>
      
      <section className="elements">
      {facades && facades.map((facade) => <Facade key={facade.id} facade={facade} />)}
      </section>
    </section>
  );
}

export default Facades;
