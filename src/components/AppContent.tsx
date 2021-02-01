import React, { ReactNode } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import AboutMe from './AboutMe/AboutMe';

interface PropsType {
  children: ReactNode;
}
const AppContent = ({ children }: PropsType) => (
  <Grid container spacing={2} style={{ marginTop: 60 }}>
    <Hidden mdDown>
      <Grid item md={4} xs={12}>
        <AboutMe />
      </Grid>
    </Hidden>
    <Grid item md={8} xs={12}>
      {children}
    </Grid>
  </Grid>
);

export default AppContent;
