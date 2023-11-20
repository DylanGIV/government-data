import { Paper } from '@mui/material';
import { ManagementInformation } from '../../../../API';
import { TableVirtuoso } from 'react-virtuoso';
import {
  ColumnData,
  VirtuosoTableComponents,
  createFixedHeaderContent,
  createRowContent,
} from './sharedTableComponents';

interface ManagementInformationProps {
  managementInformation: ManagementInformation[];
}

const columns: ColumnData[] = [
  { dataKey: 'moec', label: 'MOEC', numeric: false, width: 60 },
  { dataKey: 'sos', label: 'SOS', numeric: false, width: 65 },
  { dataKey: 'aac', label: 'AAC', numeric: false, width: 50 },
  { dataKey: 'rc', label: 'RC', numeric: false, width: 40 },
  { dataKey: 'slc', label: 'SLC', numeric: false, width: 50 },
  { dataKey: 'ciic', label: 'CIIC', numeric: false, width: 50 },
  { dataKey: 'upq', label: 'UPQ', numeric: false, width: 50 },
  { dataKey: 'usc', label: 'USC', numeric: false, width: 50 },
  { dataKey: 'unitPrice', label: 'Unit Price', numeric: false, width: 100 },
  { dataKey: 'ui', label: 'UI', numeric: false, width: 60 },
  { dataKey: 'uicf', label: 'UICF', numeric: false, width: 60 },
  { dataKey: 'mcd', label: 'MCD', numeric: false, width: 90 },
  { dataKey: 'actionDate', label: 'Action Date', numeric: false, width: 150 },
  { dataKey: 'ch', label: 'CH', numeric: false, width: 50 },
];

const fixedHeaderContent = createFixedHeaderContent(columns);
const rowContent = createRowContent(columns);

const ManagementInformationTable = ({
  managementInformation,
}: ManagementInformationProps) => {
  return (
    <Paper sx={{ height: 400 }}>
      <TableVirtuoso
        data={managementInformation}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
};

export default ManagementInformationTable;
