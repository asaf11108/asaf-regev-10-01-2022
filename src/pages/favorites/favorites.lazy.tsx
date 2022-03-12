import React, { lazy, Suspense } from 'react';
import RouteFallback from '../../components/route-fallback/route-fallback';

const LazyFavorites = lazy(() => import('./favorites'));

const Favorites = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={<RouteFallback />}>
    <LazyFavorites {...props} />
  </Suspense>
);

export default Favorites;
