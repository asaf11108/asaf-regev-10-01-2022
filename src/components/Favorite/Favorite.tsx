import { Fragment } from 'react';
import { FavoriteProps } from './Favorite.model';
import './Favorite.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Favorite: React.FC<FavoriteProps> = ({ isFavorite }) => {


    return (
        <Fragment>
            {
                isFavorite
                    ? <FavoriteIcon fontSize="inherit" color="error" />
                    : <FavoriteBorderIcon fontSize="inherit" />
            }
        </Fragment>
    );
}

export default Favorite;
