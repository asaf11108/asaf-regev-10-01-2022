import { VFC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FavoritesGuard from "./guards/favorites.guard";
import HistoryGuard from "./guards/history.guard";
import Favorites from "./pages/favorites/favorites.lazy";
import History from "./pages/history/history.lazy";
import Home from "./pages/home/home.lazy";

const AppRouting: VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/favorites"
        element={
          <FavoritesGuard>
            <Favorites />
          </FavoritesGuard>
        }
      />
      <Route
        path="/history"
        element={
          <HistoryGuard>
            <History />
          </HistoryGuard>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouting;
