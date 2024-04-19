import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './Container';

export const Layout = () => {
  return (
    <>
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
