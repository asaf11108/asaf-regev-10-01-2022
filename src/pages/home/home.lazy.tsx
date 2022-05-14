import { lazy, Suspense, FC } from 'react';
import RouteFallback from '../../components/route-fallback/route-fallback';

const LazyHome = lazy(() => import('./home'));

const Home: FC = () => (
  <Suspense fallback={<RouteFallback />}>
    <LazyHome />
  </Suspense>
);

export default Home;
