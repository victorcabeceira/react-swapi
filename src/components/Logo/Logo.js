import React from 'react';

import logoImg from '../../assets/images/stt.png';

import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo} style={{...props.style}}>
    <img src={logoImg} alt="SW Logo" />
  </div>
);

export default logo;