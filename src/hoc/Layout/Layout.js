import React from 'react';

import CustomHeader from '../../components/Navigation/Header/Header';
import CustomFooter from '../../components/Navigation/Footer/Footer';

const layout = props => {
  return (
    <div style={{ background: '#363636' }}>
      <CustomHeader {...props} />

        {props.children}

      <CustomFooter {...props} />
    </div>
  )
}


export default layout;