import { flow } from 'lodash-es';
import { FavoriteLocationSelectors } from '../store/favorite-locations/favorite-locations.selector';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FavoriteLocation } from '../store-elf/favorite-locations/favorite-locations.model';
import { FCC } from '../interfaces/general';

const HistoryGuard: FCC = ({ children }) => {
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