import React from 'react';
import { Grid } from 'react-flexbox-grid';

const page = props => (
  <Grid fluid style={{ width: '100%', height: '100%', ...props.style }} >
    {props.children}
  </Grid>
)

export default page;