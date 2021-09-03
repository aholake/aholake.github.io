import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import AppContainer from './AppContainer';
import Welcome from './Welcome/Welcome';

const AppRouter = () => (
  <BrowserRouter>
    <AppContainer>
      <Welcome />
    </AppContainer>
  </BrowserRouter>
);

export default AppRouter;
