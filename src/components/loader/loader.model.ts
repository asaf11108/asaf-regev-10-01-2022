export enum LoaderSize  {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

export interface LoaderProps {
    color?: string;
    size?: LoaderSize;
}