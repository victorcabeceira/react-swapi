import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Page from '../../UI/Page/Page';

import classes from './Footer.module.css';

const footer = props => {
  return (
    <div className={classes.Footer}>
      <AppBar style={{ background: '#222', top: 'auto' }} className={classes.FooterRoot}>
        <Toolbar>
          <Page>
            <Row center="xs" middle="xs" style={{ minHeight: '120px' }}>

              <Col xs={4} style={{ height: '100%' }}>
                <Row center="xs" middle="xs">
                  <Col xs>
                    <FontAwesomeIcon icon={['fab', 'github-alt']} size='2x' color='#FFFFFF'/>
                  </Col>
                </Row>

                <hr />

                <Row center="xs" middle="xs">
                  <Col xs>
                    Section 2
                  </Col>
                </Row>
              </Col>

              <Col xs={4}>
                <Row center="xs" middle="xs">
                  <Col xs>
                    Section 3
                  </Col>
                </Row>

              </Col>

              <Col xs={4}>
                <Row center="xs" middle="xs">
                  <Col xs>
                    Section 4
                  </Col>
                </Row>

                <hr />

                <Row center="xs" middle="xs">
                  <Col xs>
                    Section 5
                  </Col>
                </Row>

                <hr />

                <Row center="xs" middle="xs">
                  <Col xs>
                    Section 6
                  </Col>
                </Row>
              </Col>

            </Row>

          </Page>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default footer;