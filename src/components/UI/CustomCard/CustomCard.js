import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const card = props => (
  <Card style={{ ...props.cardStyle }}>
    <CardActionArea>
      <CardContent>
        {props.children}
      </CardContent>
    </CardActionArea>
  </Card>
)

export default card;