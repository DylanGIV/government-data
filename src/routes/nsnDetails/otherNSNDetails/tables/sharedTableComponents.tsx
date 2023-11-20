// SharedTableComponents.tsx
import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { TableComponents } from 'react-virtuoso';

export interface ColumnData {
  dataKey: string;
  label: string;
  numeric?: boolean;
  width: number;
}

export const VirtuosoTableComponents: TableComponents<any> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      size='small'
      {...props}
      sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

export function createFixedHeaderContent(columns: ColumnData[]) {
  return () => (
    <TableRow
      sx={{
        height: '50px',
      }}
    >
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant='head'
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

export function createRowContent(columns: ColumnData[]) {
  return (_index: number, row: any) => {
    if (!row) return null;
    return (
      <>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric ? 'right' : 'left'}
            sx={{ wordWrap: 'break-word' }}
          >
            {row[column.dataKey]?.toString() || ''}
          </TableCell>
        ))}
      </>
    );
  };
}
