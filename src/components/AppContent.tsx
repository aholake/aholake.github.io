import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';
import AboutMe from './AboutMe/AboutMe';

interface PropsType {
  children: ReactNode;
}
const AppContent = ({ children }: PropsType) => (
  <Grid container spacing={2}>
    <Grid item xs={4}>
      <AboutMe />
    </Grid>
    <Grid item xs={8}>
      {children}
    </Grid>
  </Grid>
);

export default AppContent;
