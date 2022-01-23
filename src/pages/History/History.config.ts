import { TableColumn, ColumnType } from './../../components/Table/Table.model';

export const COLUMNS: TableColumn[] = [
    { type: ColumnType.Text, prop: 'key', name: 'Key' },
    { type: ColumnType.Text, prop: 'localizedName', name: 'Name' },
];
