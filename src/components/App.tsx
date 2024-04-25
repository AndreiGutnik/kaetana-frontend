import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../Globalstyle';
import { lightTheme } from '../Themes';
import { routes } from '../routes';

import { Layout } from './Layout';

const MainPage = lazy(() => import('@/pages/MainPage'));
const Contacts = lazy(() => import('@/pages/Contacts/Contacts'));
const Delivery = lazy(() => import('@/pages/Delivery/Delivery'));
const Profile = lazy(() => import('@/pages/Profile/Profile'));

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
            element={<Contacts />}
          />
          <Route
            path={routes.DELIVERY}
            element={<Delivery />}
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
