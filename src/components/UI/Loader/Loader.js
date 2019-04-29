import React from 'react';

import classes from './Loader.module.css';

const loader = props => {
  return (
    <div className={classes.Loader} style={{ ...props.style }}/>
  )
}

export default loader;