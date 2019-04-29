import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import CustomHeader from '../../components/Navigation/Header/Header';
import CustomFooter from '../../components/Navigation/Footer/Footer';

const layout = props => {
  return (
    <Fragment>
      <CustomHeader {...props} />

      <Grid fluid style={{ width: '100%', height: '100%' }}>
        <Row>
          <Col xs={12}>
            {props.children}
          </Col>
        </Row>
      </Grid>

      <CustomFooter />
    </Fragment>
  )
}


export default layout;