import { lazy, Suspense, VFC } from 'react';
import RouteFallback from '../../components/route-fallback/route-fallback';

const LazyHistory = lazy(() => import('./history'));

const History: VFC = () => (
  <Suspense fallback={<RouteFallback />}>
    <LazyHistory />
  </Suspense>
);

export default History;
