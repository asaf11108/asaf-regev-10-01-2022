import { get } from "lodash-es";
import { useMemo } from "react";
import Favorite from "../favorite/favorite";
import { ColumnType, TableColumn, _TableColumn } from "./table.model";

export const useColumns = (columns: TableColumn[]): _TableColumn[] => {
    return useMemo(() =>
        columns.map(col => {
            let cell: _TableColumn['cell'] = () => <></>;

            switch (col.type) {
                case ColumnType.Favorite:
                    cell = (row) => <span style={{ fontSize: '1.2em' }}><Favorite isFavorite={get(row, col.prop)} /></span>
                    break;
                default:
                    cell = (row) => <span>{get(row, col.prop)}</span>
                    break;
            }

            return {
                ...col,
                cell
            }
        })
        , [columns]);
}