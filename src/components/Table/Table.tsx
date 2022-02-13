import { FC } from "react";
import { TableContainer, Table as MuiTable, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useColumns } from "./columns.hook";
import { TableProps } from "./table.model";
import './table.scss';


const Table: FC<TableProps> = ({ columns, rows, rowClick, idProp = 'id' }) => {

    const cols = useColumns(columns);

    return (
        <TableContainer className="table" sx={{ maxHeight: 440 }}>
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
                                <TableRow hover key={row[idProp]} onClick={() => rowClick && rowClick(row)}>
                                    {cols.map((col) =>
                                        <TableCell key={col.prop} sx={{width: col.width}}>
                                            {col.cell(row)}
                                        </TableCell>
                                    )}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
}

export default Table;
