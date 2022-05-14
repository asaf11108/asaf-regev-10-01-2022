import { FC } from 'react';
import { LoaderProps, LoaderSize } from './loader.model';
import * as S from "./loader.style";

const Loader: FC<LoaderProps> = ({ color, size = LoaderSize.Medium }) => {

    return (
        <S.Loader size={size}>
            <S.CircularProgress style={{color}} />
        </S.Loader>
    );
}

export default Loader;
