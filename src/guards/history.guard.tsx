import { flow } from 'lodash-es';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FavoriteLocation } from '../store-elf/favorite-locations/favorite-locations.model';
import { FCC } from '../interfaces/general';
import { useObservable } from '@ngneat/react-rxjs';
import { favoriteLocationsStore } from '../store-elf/favorite-locations/favorite-locations.state';
import { selectAllEntities } from '@ngneat/elf-entities/lib/all.query';
import { tap } from "rxjs";

const HistoryGuard: FCC = ({ children }) => {
    const navigate = useNavigate();

    useObservable(favoriteLocationsStore.pipe(
        selectAllEntities(),
        tap((favoriteLocations) => !favoriteLocations.length && setTimeout(() => navigate('/')))
    ));

    return (
        <>
            {children}
        </>
    )
};

export default HistoryGuard;