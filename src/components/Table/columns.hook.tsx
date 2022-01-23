import { get } from "lodash-es";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { ColumnType, TableColumn, _TableColumn } from "./Table.model";

export const useColumns = (columns: TableColumn[]) => {
    const [cols, setCols] = useState<_TableColumn[]>([]);

    useEffect(() => {
        setCols(
            columns.map(col => {
                let cell: _TableColumn['cell'] = () => <Fragment></Fragment>;

                switch (col.type) {
                    case ColumnType.Number:
                        
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
        )
    }, [columns]);

    return cols;
}