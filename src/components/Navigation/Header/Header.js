import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Header.module.css';

const header = props => {
  return (
    <div className={classes.Root}>
      <AppBar position="static" style={{ background: '#222' }}>
        <Toolbar>
          <Grid fluid style={{ width: '100%' }}>
            <Row>
              <Col xs={4}>
                <Typography variant="h6" color="inherit">
                  Logo
                </Typography>
              </Col>

              <Col xs={4}>
                <Row center="xs" middle="xs" style={{ height: '100%' }}>
                  <Col xs>
                    Star wars image
                  </Col>
                </Row>
              </Col>

              <Col xs={4}>
                <Row end="xs" middle="xs" style={{ height: '100%' }}>

                  <NavigationItems />

                </Row>
              </Col>

            </Row>

          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default header;