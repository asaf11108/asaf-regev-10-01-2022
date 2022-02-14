import { FC } from 'react';
import { LoaderProps } from './loader.model';
import './loader.scss';
import { CircularProgress } from '@mui/material';


const Loader: FC<LoaderProps> = ({ color }) => {

    return (
        <div className="loader">
            <CircularProgress style={{color}} />
        </div>
    );
}

export default Loader;
