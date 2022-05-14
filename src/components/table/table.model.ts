
export enum ColumnType {
    Text,
    Number,
    Date,
    LongDate,
    Temperature,
    Favorite
}

export interface TableColumn {
    type: ColumnType;
    prop: string;
    name: string;
    width?: string;
}

export interface _TableColumn<T> extends TableColumn {
    cell: (row: T) => JSX.Element;
}

export interface TableProps<T> {
    rows: T[];
    columns: TableColumn[];
    rowClick?: (row: T) => void;
    idProp?: string;
}