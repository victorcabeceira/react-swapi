import React from 'react';

import CustomHeader from '../../components/Navigation/Header/Header';
import CustomFooter from '../../components/Navigation/Footer/Footer';
import Card from '@material-ui/core/Card';

import bgImage from '../../assets/images/bg.jpg';

import classes from './Layout.module.css';

const layout = props => {
  // Photo by Lubo Minar on Unsplash
  const layoutBackGround = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  }

  return (
    <div style={layoutBackGround}>
      <div className={classes.Layout}>
        <CustomHeader {...props} />

        <div className={classes.MainContent}>
          <Card style={{ background: '#363636' }} className={classes.Content}>
            {props.children}
          </Card>
        </div>

        <div className={classes.Footer}>
          <CustomFooter {...props} />
        </div>
      </div>
    </div>
  )
}


export default layout;