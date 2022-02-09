import { FC, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import FavoritesGuard from "./guards/Favorites.guard";
import HistoryGuard from "./guards/History.guard";

const Home = lazy(() => import('./pages/Home/Home'));
const History = lazy(() => import('./pages/History/History'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

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