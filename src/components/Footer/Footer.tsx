import React from 'react';
import {FooterLogo} from '../../ui/icons/svgIcons'

function Footer() {

  return (
    <footer className='footer'>
      <div className='footer__bottom'>
        <p className='footer__year'>Copyright © 2023. All rights reserved</p>
        <div className='footer__links'>
          <a className='footer__link' href='https://brusnika.ru/' target='_blank' rel='noreferrer'> <FooterLogo/> Брусника</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;