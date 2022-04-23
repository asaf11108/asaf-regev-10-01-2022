import { FC } from 'react';
import { flow } from 'lodash-es';
import { FavoriteLocationSelectors } from '../store/favorite-locations/favorite-locations.selector';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FavoriteLocation } from '../store/favorite-locations/favorite-locations.model';

const HistoryGuard: FC = ({ children }) => {
    const navigate = useNavigate();

    const canActivate = (favoriteLocations: FavoriteLocation[]): void => {
        !favoriteLocations.length && setTimeout(() => navigate('/'));
    };

    flow([
        useSelector,
        canActivate
    ])(FavoriteLocationSelectors.selectAll);


    return (
        <>
            {children}
        </>
    )
};

export default HistoryGuard;