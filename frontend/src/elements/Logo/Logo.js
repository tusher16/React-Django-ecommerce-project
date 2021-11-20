import React from 'react';

import mainlogo from '../../assets/img/logo/logo.png';
import classes from './Logo.module.css';

function logo() {
    return(
        
      <img

        alt=""
        src={mainlogo}
        className={classes.logo_size} />
        
    );
}

export default logo;