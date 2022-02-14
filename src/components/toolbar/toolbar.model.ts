import { FavoriteLocation } from "../../store/favorite-locations/favorite-locations.model";

export interface IMenuItem {
    label: string;
    navigatePath: string;
    disabled?: (arg1: FavoriteLocation[]) => boolean;
};
