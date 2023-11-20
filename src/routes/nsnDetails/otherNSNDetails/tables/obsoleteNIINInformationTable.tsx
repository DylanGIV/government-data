import { Paper } from '@mui/material';
import { ObsoleteNIINInformation } from '../../../../API';
import { TableVirtuoso } from 'react-virtuoso';
import {
  ColumnData,
  VirtuosoTableComponents,
  createFixedHeaderContent,
  createRowContent,
} from './sharedTableComponents';

interface ObsoleteNIINInformationProps {
  obsoleteNIINInformation: ObsoleteNIINInformation[];
}

const columns: ColumnData[] = [
  { dataKey: 'fsc', label: 'FSC', numeric: false, width: 80 },
  { dataKey: 'niin', label: 'NIIN', numeric: false, width: 120 },
  { dataKey: 'demil', label: 'Demil', numeric: false, width: 60 },
  { dataKey: 'nsc', label: 'NSC', numeric: false, width: 60 },
  { dataKey: 'cancelled', label: 'Cancelled', numeric: false, width: 110 },
];

const fixedHeaderContent = createFixedHeaderContent(columns);
const rowContent = createRowContent(columns);

const ObsoleteNIINInformationTable = ({
  obsoleteNIINInformation,
}: ObsoleteNIINInformationProps) => {
  return (
    <Paper style={{ height: 400 }}>
      <TableVirtuoso
        data={obsoleteNIINInformation}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
};

export default ObsoleteNIINInformationTable;
