import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './Container';
import { Footer } from '@/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};
