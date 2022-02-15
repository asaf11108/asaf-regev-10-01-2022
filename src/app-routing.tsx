import { FC, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/loader/loader";
import { LoaderSize } from "./components/loader/loader.model";
import FavoritesGuard from "./guards/favorites.guard";
import HistoryGuard from "./guards/history.guard";

const Home = lazy(() => import('./pages/home/home'));
const History = lazy(() => import('./pages/history/history'));
const Favorites = lazy(() => import('./pages/favorites/favorites'));

const RouteFallback: FC = () => <div style={{margin: 'auto'}}><Loader color='white' size={LoaderSize.small} /></div>;

const AppRouting: FC = () => {
    return (
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<RouteFallback />}>
                    <Home />
                </Suspense>
            } />
            <Route path="/favorites" element={
                <FavoritesGuard>
                    <Suspense fallback={<RouteFallback />}>
                        <Favorites />
                    </Suspense>
                </FavoritesGuard>
            } />
            <Route path="/history" element={
                <HistoryGuard>
                    <Suspense fallback={<RouteFallback />}>
                        <History />
                    </Suspense>
                </HistoryGuard>
            } />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouting;