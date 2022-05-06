import { lazy, Suspense, VFC } from 'react';
import RouteFallback from '../../components/route-fallback/route-fallback';

const LazyFavorites = lazy(() => import('./favorites'));

const Favorites: VFC = () => (
  <Suspense fallback={<RouteFallback />}>
    <LazyFavorites />
  </Suspense>
);

export default Favorites;
