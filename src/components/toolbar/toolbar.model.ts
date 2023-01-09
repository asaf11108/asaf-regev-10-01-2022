import { FavoriteLocation } from "../../store-elf/favorite-locations/favorite-locations.model";

export interface IMenuItem {
    label: string;
    navigatePath: string;
    disabled?: (arg1: FavoriteLocation[]) => boolean;
};
