import { lazy, Suspense, VFC } from 'react';
import RouteFallback from '../../components/route-fallback/route-fallback';

const LazyHome = lazy(() => import('./home'));

const Home: VFC = () => (
  <Suspense fallback={<RouteFallback />}>
    <LazyHome />
  </Suspense>
);

export default Home;
