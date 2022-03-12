import React, { lazy, Suspense } from 'react';
import RouteFallback from '../../components/route-fallback/route-fallback';

const LazyHistory = lazy(() => import('./history'));

const History = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={<RouteFallback />}>
    <LazyHistory {...props} />
  </Suspense>
);

export default History;
