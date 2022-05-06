import { lazy, Suspense, VFC } from 'react';
import RouteFallback from '../../components/route-fallback/route-fallback';

const LazyFavorites = lazy(() => import('./favorites'));

const Favorites: VFC = props => (
  <Suspense fallback={<RouteFallback />}>
    <LazyFavorites {...props} />
  </Suspense>
);

export default Favorites;
