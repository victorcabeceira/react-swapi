import React, { Fragment } from 'react';

import CustomHeader from '../../components/Navigation/Header/Header';
import CustomFooter from '../../components/Navigation/Footer/Footer';

import classes from './Layout.module.css';

const layout = props => {
  return (
    <Fragment>
      <CustomHeader {...props}/>
      <main className={classes.Content}>
        {props.children}
      </main>
      <CustomFooter />
    </Fragment>
  )
}


export default layout;