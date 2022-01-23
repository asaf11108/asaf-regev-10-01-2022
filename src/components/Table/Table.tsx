import { TableContainer, Table as MuiTable, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useColumns } from "./columns.hook";
import { TableProps, _TableColumn } from "./Table.model";


const Table: React.FC<TableProps> = ({columns, rows}) => {

    const cols = useColumns(columns);

    return (
        <TableContainer className="table" sx={{ maxHeight: 440 }}>
        <MuiTable stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {cols.map((col) => (
                <TableCell key={col.prop}>
                  {col.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {cols.map((col) => 
                        <TableCell key={col.prop}>
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
  