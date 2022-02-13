import { FC, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/loader/loader";
import FavoritesGuard from "./guards/favorites.guard";
import HistoryGuard from "./guards/history.guard";

const Home = lazy(() => import('./pages/home/home'));
const History = lazy(() => import('./pages/history/history'));
const Favorites = lazy(() => import('./pages/favorites/favorites'));

const AppRouting: FC = () => {
    return (
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<div style={{ margin: 'auto' }}><Loader color='white' /></div>}>
                    <Home />
                </Suspense>
            } />
            <Route path="/favorites" element={
                <FavoritesGuard>
                    <Suspense fallback={<div style={{ margin: 'auto' }}><Loader color='white' /></div>}>
                        <Favorites />
                    </Suspense>
                </FavoritesGuard>
            } />
            <Route path="/history" element={
                <HistoryGuard>
                    <Suspense fallback={<div style={{ margin: 'auto' }}><Loader color='white' /></div>}>
                        <History />
                    </Suspense>
                </HistoryGuard>
            } />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouting;