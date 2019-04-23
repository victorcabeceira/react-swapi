import React from 'react';

import classes from './LoadingPage.module.css';

const loadingPage = props => {
  console.log('loadingPage', props)
  console.log('window', window)
  const { innerWidth, outerHeight } = window;
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: innerWidth,
      height: outerHeight,
      backgroundColor: '#222',
    }}>
      <p className={classes.LoadingPageText}>
        LOADING  THE  ENTIRE  GALAXY. . .
      </p>
      <div className={classes.Loader}>Loading...</div>
    </div>
  )
}

export default loadingPage;