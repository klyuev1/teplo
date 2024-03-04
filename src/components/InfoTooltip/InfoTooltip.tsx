import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { closeInfoTooltipFacade } from '../../store/reducers/infoTooltipSlice';

function InfoTooltip() {

  const isInfoTooltipOpen = useAppSelector(state => state.infoTooltip.isInfoTooltipOpen);
  const titleInfo = useAppSelector(state => state.infoTooltip.titleInfo);

  const dispatch = useAppDispatch();
  
  const handleClose = () => {
    dispatch(closeInfoTooltipFacade());
  }

  return (
    <div className = {`Info-tooltip ${isInfoTooltipOpen ? 'Info-tooltip_opened' : ''} `}>
      <div className="Info-tooltip__container">
        <div className="Info-tooltip__form">
          {/* <img className="Info-tooltip__logo-auth" src={icon} alt={title}/> */}
          <h2 className="Info-tooltip__text-auth">{titleInfo}</h2>
          <button type="button" className="Info-tooltip__button-close" onClick={handleClose} />
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;