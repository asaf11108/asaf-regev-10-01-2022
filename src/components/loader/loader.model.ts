export enum LoaderSize  {
    Small,
    Medium,
    Large
}

export interface LoaderProps {
    color?: string;
    size?: LoaderSize;
}