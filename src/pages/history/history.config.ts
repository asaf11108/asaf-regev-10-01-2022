import { TableColumn, ColumnType } from '../../components/table/table.model';

export const COLUMNS: TableColumn[] = [
    { type: ColumnType.Favorite, prop: 'isFavorite', name: '', width: '1em' },
    { type: ColumnType.Text, prop: 'key', name: 'Key' },
    { type: ColumnType.Text, prop: 'localizedName', name: 'Name' },
    { type: ColumnType.Text, prop: 'weatherText', name: 'Weather' },
    { type: ColumnType.Temperature, prop: 'temperature', name: 'Temperature' },
    { type: ColumnType.Date, prop: 'searchedDate', name: 'Searched date' },
];
