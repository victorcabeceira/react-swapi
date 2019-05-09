import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import SideDrawer from './SideDrawer/SideDrawer';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../components/Logo/Logo';
import Image from '../../../components/UI/Image/Image';
import swImg from '../../../assets/images/sw_logo_g_tm.png';

import classes from './Header.module.css';

const header = props => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const sideDrawerOpenHandler = () => {
    setOpenDrawer(true);
  }

  const sideDrawerCloseHandler = () => {
    setOpenDrawer(!openDrawer);
  }

  return (
    <div className={classes.Root}>
      <AppBar position='static' style={{ background: '#222', height: '100%' }}>
        <Toolbar className={classes.FullWH}>
          <Grid fluid className={classes.FullWH}>
            <Row middle='xs' className={classes.FullWH}>
              <Col xs={2} md={4} className={classes.FullWH}>
                <Row middle='xs' left='xs' className={classes.FullWH}>
                  <Col xs={2}>
                    <div className={classes.DesktopOnly}>
                      <NavLink
                        to={'/'}
                        exact
                      >
                        <Logo />
                      </NavLink>
                    </div>
                    <div className={classes.MobileOnly}>
                      <div className={classes.Icon}>
                        <FontAwesomeIcon
                          icon={faBars}
                          size='2x'
                          color='#FFFFFF'
                          onClick={() => sideDrawerOpenHandler()}
                        />
                        <SideDrawer
                          openDrawer={openDrawer}
                          sideDrawerCloseHandler={sideDrawerCloseHandler}
                          {...props}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col xs={10} md={4} className={classes.FullWH}>
                <Row center='xs' middle='xs' className={classes.FullWH}>
                  <Col xs>
                    <div className={classes.DesktopOnly}>
                      <Image
                        src={swImg}
                        alt='Star Wars logo'
                      />
                    </div>
                    <div className={classes.MobileOnly}>
                      <div className={classes.Image}>
                        <Image
                          src={swImg}
                          alt='Star Wars logo'
                        />
                      </div>
                    </div>

                  </Col>
                </Row>
              </Col>

              <Col xs={4} className={`${classes.DesktopOnly} ${classes.FullWH}`}>
                <Row end='xs' middle='xs' className={classes.FullWH}>

                  <NavigationItems {...props} />

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