import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../Globalstyle';
import { lightTheme } from '../Themes';
import { routes } from '../routes';

import { Layout } from './Layout';
import Profile from '@/pages/Profile';

const MainPage = lazy(() => import('../pages/MainPage'));

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes>
        <Route
          path={routes.HOME}
          element={<Layout />}
        >
          <Route
            index
            element={<MainPage />}
          />
          <Route
            path={routes.CATALOGY}
            element={<p>Catalogy</p>}
          />
          <Route
            path={routes.CONTACT}
            element={<p>Contact</p>}
          />
          <Route
            path={routes.DELIVERY}
            element={<p>Delivery</p>}
          />
          <Route
            path={routes.PROFILE}
            element={<Profile />}
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
  );
};
