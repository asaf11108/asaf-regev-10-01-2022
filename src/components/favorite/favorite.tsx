import { FC } from 'react';
import { FavoriteProps } from './favorite.model';
import './favorite.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Favorite: FC<FavoriteProps> = ({ isFavorite }) => {


    return (
        <>
            {
                isFavorite
                    ? <FavoriteIcon fontSize="inherit" color="error" />
                    : <FavoriteBorderIcon fontSize="inherit" />
            }
        </>
    );
}

export default Favorite;
