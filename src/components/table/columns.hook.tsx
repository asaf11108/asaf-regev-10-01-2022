import { useMemo } from "react";
import Favorite from "../favorite/favorite";
import { ColumnType, TableColumn, _TableColumn } from "./table.model";
import { get } from "lodash-es";
import { format } from "date-fns";
import { useLocale } from "../../providers/locale/locale.hook";

export const useColumns = <T extends any>(columns: TableColumn[]): _TableColumn<T>[] => {
    const locale = useLocale();

    return useMemo(() =>
        columns.map(col => {
            let cell: _TableColumn<T>['cell'] = () => <></>;

            switch (col.type) {
                case ColumnType.Favorite:
                    cell = row => <span style={{ fontSize: '1.2em' }}><Favorite isFavorite={get(row, col.prop)} /></span>
                    break;
                case ColumnType.Date:
                    cell = row => <span>{format(new Date(get(row, col.prop)), 'P', { locale })}</span>
                    break;
                case ColumnType.LongDate:
                    cell = row => <span>{format(new Date(get(row, col.prop)), 'Pp', { locale })}</span>
                    break;
                default:
                    cell = row => <span>{get(row, col.prop)}</span>
                    break;
            }

            return {
                ...col,
                cell
            }
        })
        , [columns, locale]);
}