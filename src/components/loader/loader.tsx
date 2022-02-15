import { FC } from 'react';
import { LoaderProps, LoaderSize } from './loader.model';
import './loader.scss';
import { CircularProgress } from '@mui/material';
import clsx from 'clsx';

const Loader: FC<LoaderProps> = ({ color, size = LoaderSize.Medium }) => {

    return (
        <div className={clsx('loader', `loader--${size}`)}>
            <CircularProgress style={{color}} />
        </div>
    );
}

export default Loader;
