import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './Container';
import { Header } from './Header/Header';
import { Footer } from '@/components/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};
