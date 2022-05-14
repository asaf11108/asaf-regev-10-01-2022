import { lazy, Suspense, FC } from 'react';
import RouteFallback from '../../components/route-fallback/route-fallback';

const LazyFavorites = lazy(() => import('./favorites'));

const Favorites: FC = () => (
  <Suspense fallback={<RouteFallback />}>
    <LazyFavorites />
  </Suspense>
);

export default Favorites;
