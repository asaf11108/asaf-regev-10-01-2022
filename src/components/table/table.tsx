import { FC } from "react";
import { TableContainer, Table as MuiTable, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useColumns } from "./columns.hook";
import { TableProps } from "./table.model";
import * as S from "./table.style";
import { get } from "lodash-es";


const Table = <T extends {}>({ columns, rows, rowClick, idProp = 'id' }: TableProps<T>): ReturnType<FC> => {

    const cols = useColumns(columns);

    return (
        <TableContainer sx={{ maxHeight: 440 }}>
            <MuiTable stickyHeader>
                <TableHead>
                    <TableRow>
                        {cols.map((col) => (
                            <TableCell key={col.prop} sx={{width: col.width}}>
                                {col.name}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .map((row) => {
                            return (
                                <S.TableRow hover key={get(row, idProp)} onClick={() => rowClick?.(row)}>
                                    {cols.map((col) =>
                                        <TableCell key={col.prop} sx={{width: col.width}}>
                                            {col.cell(row)}
                                        </TableCell>
                                    )}
                                </S.TableRow>
                            );
                        })}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
}

export default Table;
