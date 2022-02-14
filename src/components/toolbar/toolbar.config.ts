import { filter } from 'lodash-es';
import { IMenuItem } from "./toolbar.model";

export const MENU: IMenuItem[] = [
    {
        label: 'Home',
        navigatePath: '/'
    },
    {
        label: 'Favorites',
        navigatePath: '/favorites',
        disabled: favoriteLocations => !filter(favoriteLocations, 'isFavorite').length
    },
    {
        label: 'History',
        navigatePath: '/history',
        disabled: favoriteLocations => !favoriteLocations.length
    }
];

export const GITHUB_URL = 'https://github.com/asaf11108/asaf-regev-10-01-2022';
