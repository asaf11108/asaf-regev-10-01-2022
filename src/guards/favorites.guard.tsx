import { useNavigate } from 'react-router-dom';
import { FCC } from '../interfaces/general';
import { map, tap } from "rxjs";
import { selectAllEntities } from '@ngneat/elf-entities';
import { favoriteLocationsStore } from '../store-elf/favorite-locations/favorite-locations.state';
import { useObservable } from '@ngneat/react-rxjs';

const FavoritesGuard: FCC = ({ children }) => {
    const navigate = useNavigate();

    useObservable(favoriteLocationsStore.pipe(
        selectAllEntities(),
        map(favoriteLocations => favoriteLocations.filter(favoriteLocation => favoriteLocation.isFavorite)),
        tap((favoriteLocations) => !favoriteLocations.length && setTimeout(() => navigate('/')))
    ));


    return (
        <>
            {children}
        </>
    )
};

export default FavoritesGuard;