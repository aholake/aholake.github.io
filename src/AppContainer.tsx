import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';

interface PropsType {
  children: ReactElement;
}
const AppContainer = ({ children }: PropsType) => (
  <>
    <Navigation />
    <Grid container style={{ height: 'calc(100vh - 160px)' }} justify="center">
      <Grid container item md={8} xs={12}>
        {children}
      </Grid>
    </Grid>
    <Footer />
  </>
);
export default AppContainer;
