import React, { Fragment } from 'react';

import CustomHeader from '../../components/Navigation/Header/Header';
import CustomFooter from '../../components/Navigation/Footer/Footer';

const layout = props => {
  return (
    <Fragment>
      <CustomHeader {...props} />

        {props.children}

      <CustomFooter />
    </Fragment>
  )
}


export default layout;