import React, { Fragment } from 'react';
import { Grid, Row } from 'react-flexbox-grid';

import Backdrop from '../../../UI/Backdrop/Backdrop';
import NavigationItems from '../../NavigationItems/NavigationItems';
import Image from '../../../../components/UI/Image/Image';
import swImg from '../../../../assets/images/sw_logo_g_tm.png';

import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
  const { openDrawer, sideDrawerCloseHandler } = props;

  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (openDrawer) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }

  return (
    <Fragment>
      <Backdrop
        show={openDrawer}
        onClick={sideDrawerCloseHandler}
      />
      <Grid fluid className={attachedClasses.join(' ')} onClick={sideDrawerCloseHandler}>
        <Row center='xs' middle='xs' className={classes.LogoRow}>
          <div className={classes.Logo}>
            <Image
              src={swImg}
              alt='Star Wars logo'
              style={{ alignContent: 'center' }}
            />
          </div>
        </Row>

        <div className={classes.navigationItemsDiv}>
          <NavigationItems {...props} mobile />
        </div>
      </Grid>
    </Fragment>
  )
}
export default sideDrawer;