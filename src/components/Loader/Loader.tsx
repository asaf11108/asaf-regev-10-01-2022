import { FC } from 'react';
import { LoaderProps } from './Loader.model';
import './Loader.scss';
import { CircularProgress } from '@mui/material';


const Loader: FC<LoaderProps> = ({ color }) => {

    return (
        <div className="loader">
            <CircularProgress style={{color}} />
        </div>
    );
}

export default Loader;
