import React from 'react';

import Loader from '../Loader/Loader';

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
      <Loader />
    </div>
  )
}

export default loadingPage;