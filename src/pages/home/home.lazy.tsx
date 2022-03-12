import React, { lazy, Suspense } from 'react';
import RouteFallback from '../../components/route-fallback/route-fallback';

const LazyHome = lazy(() => import('./home'));

const Home = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={<RouteFallback />}>
    <LazyHome {...props} />
  </Suspense>
);

export default Home;
