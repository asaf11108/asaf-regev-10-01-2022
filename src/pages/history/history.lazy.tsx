import { lazy, Suspense, FC } from 'react';
import RouteFallback from '../../components/route-fallback/route-fallback';

const LazyHistory = lazy(() => import('./history'));

const History: FC = () => (
  <Suspense fallback={<RouteFallback />}>
    <LazyHistory />
  </Suspense>
);

export default History;
