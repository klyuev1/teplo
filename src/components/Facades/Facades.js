import React from 'react';
import Facade from '../Facade/Facade';
import iconFasades from '../../images/iconFasades.svg'
// import ProjectTable from './ProjectTable/ProjectTable';

function Facades() {
  
  return (
    <section className= 'facades' >

      <div className='fasades__up-container'>

        <div className='fasades__title-box'>
          <img className='fasades__title-logo' src={iconFasades}/>
          <h2 className='fasades__title'>Фасады</h2>
        </div>
        
        <button className='fasades__button' type='button'>Создать фасад</button>
      </div>

      <section className="elements">
        {/* Создать JSON - сделать как было во фронте место(спринт 9) */}
        {/* {props.cards.map((card) => ( */} 
          <Facade
            // key={card._id}
            // card={card}
            // onCardClick={props.onCardClick}
            // onCardLike={props.onCardLike}
            // onCardDelete={props.onCardDelete}
          />
        {/* ))} */}
      </section>
    </section>
    
  );
}

export default Facades;