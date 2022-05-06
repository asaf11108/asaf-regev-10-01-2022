import { lazy, Suspense, VFC } from 'react';
import RouteFallback from '../../components/route-fallback/route-fallback';

const LazyHome = lazy(() => import('./home'));

const Home: VFC = props => (
  <Suspense fallback={<RouteFallback />}>
    <LazyHome {...props} />
  </Suspense>
);

export default Home;
