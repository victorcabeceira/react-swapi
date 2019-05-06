import React from 'react';

import CustomHeader from '../../components/Navigation/Header/Header';
import CustomFooter from '../../components/Navigation/Footer/Footer';

import classes from './Layout.module.css';

const layout = props => {
  return (
    <div style={{ background: '#363636' }}>
      <CustomHeader {...props} />

        <div className={classes.Content}>
          {props.children}
        </div>

      <CustomFooter {...props} />
    </div>
  )
}


export default layout;