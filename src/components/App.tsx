import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../Globalstyle';
import { lightTheme } from '../Themes';
import { routes } from '../routes';

import { Layout } from './Layout';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
const Contacts = lazy(() => import('@/pages/Contacts/Contacts'));
const Delivery = lazy(() => import('@/pages/Delivery/Delivery'));
const Profile = lazy(() => import('@/pages/Profile/Profile'));
const Favorites = lazy(() => import('@/pages/Favorites/Favorites'));
const Cart = lazy(() => import('@/pages/Cart/Cart'));

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
            path={routes.FAVORITES}
            element={<Favorites />}
          />
          <Route
            path={routes.CART}
            element={<Cart />}
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
