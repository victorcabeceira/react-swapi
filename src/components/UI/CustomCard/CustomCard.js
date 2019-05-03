import React, { Fragment } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import { apiPropertyParser, apiValueParser } from '../../../shared/utility';

import classes from './CustomCard.module.css';

const card = props => {
  let card = props.children;

  if (props.filteredCollection) {
    card = (
      <Fragment>
        <div className={classes.CardContentTitle}>
          {props.collection} : {props.title}
        </div>
        {props.filteredCollection.map(fp => {
          const property = apiPropertyParser(fp[0]);
          const value = apiValueParser(fp[1]);
          return (
            <div key={`${props.objectId}_${property}`} className={classes.CardContent}>
              <div className={classes.ContentProperty}>{property} : </div>
              <div className={classes.ContentData}>{value}</div>
            </div>
          )
        })}
      </Fragment>
    )
  }

  return (
    <Card style={{ ...props.cardStyle }}>
      <CardActionArea>
        <CardContent>
          {card}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default card;