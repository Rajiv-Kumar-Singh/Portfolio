import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Footer/Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <p>
            Made with <FontAwesomeIcon icon={faHeart} size="0.3x" /> by Rajiv
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
