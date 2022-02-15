export enum LoaderSize  {
    small = 'small',
    medium = 'medium',
    large = 'large'
}

export interface LoaderProps {
    color?: string;
    size?: LoaderSize;
}