
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

export interface _TableColumn<T = any> extends TableColumn {
    cell: (row: T) => JSX.Element;
}

export interface TableProps<T = any> {
    rows: T[];
    columns: TableColumn[];
    rowClick?: (row: T) => void;
    idProp?: string;
}