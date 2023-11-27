import React from 'react';

function Footer() {

  return (
    <footer className='footer'>
      <div className='footer__bottom'>
        <p className='footer__year'>© 2023</p>
        <div className='footer__links'>
          <a className='footer__link' href='https://moskva.brusnika.ru/' target='_blank' rel='noreferrer'>Брусника</a>
          <a className='footer__link' href='https://github.com/' target='_blank' rel='noreferrer'>Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;