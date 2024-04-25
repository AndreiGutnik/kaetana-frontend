import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header/Header';
import { Footer } from '@/components/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
