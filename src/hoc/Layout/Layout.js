import React from 'react';

import CustomHeader from '../../components/Navigation/Header/Header';
import CustomFooter from '../../components/Navigation/Footer/Footer';

import classes from './Layout.module.css';

const layout = props => {
  return (
    <div className={classes.Layout}>
      <CustomHeader {...props} />

      <div className={classes.Content}>
        {props.children}
      </div>

      <div className={classes.Footer}>
        <CustomFooter {...props} />
      </div>
    </div>
  )
}


export default layout;