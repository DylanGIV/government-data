import { Paper } from '@mui/material';
import { ReplacedReplacementNIINInformation } from '../../../../API';
import { TableVirtuoso } from 'react-virtuoso';
import {
  ColumnData,
  VirtuosoTableComponents,
  createFixedHeaderContent,
  createRowContent,
} from './sharedTableComponents';

interface ReplacedReplacementNIINInformationProps {
  replacedReplacementNIINInformation: ReplacedReplacementNIINInformation[];
}

const columns: ColumnData[] = [
  { dataKey: 'fsc', label: 'FSC', numeric: false, width: 80 },
  { dataKey: 'niin', label: 'NIIN', numeric: false, width: 120 },
  { dataKey: 'isc', label: 'ISC', numeric: false, width: 80 },
  { dataKey: 'originator', label: 'Originator', numeric: false, width: 80 },
  { dataKey: 'nsc', label: 'NSC', numeric: false, width: 60 },
  { dataKey: 'stdDate', label: 'STD Date', numeric: false, width: 120 },
  { dataKey: 'status', label: 'Status', numeric: false, width: 60 },
];

const fixedHeaderContent = createFixedHeaderContent(columns);
const rowContent = createRowContent(columns);

const ReplacedReplacementNIINInformationTable = ({
  replacedReplacementNIINInformation,
}: ReplacedReplacementNIINInformationProps) => {
  return (
    <Paper style={{ height: 400 }}>
      <TableVirtuoso
        data={replacedReplacementNIINInformation}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
};

export default ReplacedReplacementNIINInformationTable;
