import React from 'react';

import classes from './Image.module.css';

const image = (props) => (
  <div className={classes.Image} style={{...props.style}}>
    <img src={props.src} alt={props.alt} />
  </div>
);

export default image;