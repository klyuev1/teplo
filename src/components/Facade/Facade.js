import React from 'react';

function Facade(props) {
  return (
    <article className='element'>
      <button className='element__button' type='button'>
        <img className='element__photo' src={props.link} alt='facade'/>
        <div className='element__div'>
          <h3 className='element__number'>{props.name}</h3>
          <button className='element__button-delete'></button>
        </div>
      </button>
    </article>
  );
}

export default Facade;
