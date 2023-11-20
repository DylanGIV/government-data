import { Paper } from '@mui/material';
import { PartInformation } from '../../../../API';
import { TableVirtuoso } from 'react-virtuoso';
import {
  ColumnData,
  VirtuosoTableComponents,
  createFixedHeaderContent,
  createRowContent,
} from './sharedTableComponents';

interface PartInformationProps {
  partInformation: PartInformation[];
}

const columns: ColumnData[] = [
  { dataKey: 'partNumber', label: 'Part Number', numeric: false, width: 140 },
  { dataKey: 'cage', label: 'Cage', numeric: false, width: 80 },
  { dataKey: 'company', label: 'Company', numeric: false, width: 250 },
  { dataKey: 'status', label: 'Status', numeric: false, width: 60 },
  { dataKey: 'rncc', label: 'RNCC', numeric: false, width: 60 },
  { dataKey: 'rnvc', label: 'RNVC', numeric: false, width: 60 },
  { dataKey: 'dac', label: 'DAC', numeric: false, width: 60 },
  { dataKey: 'rnaac', label: 'RNAAC', numeric: false, width: 60 },
  { dataKey: 'rnfc', label: 'RNFC', numeric: false, width: 60 },
  { dataKey: 'rnsc', label: 'RNSC', numeric: false, width: 60 },
  { dataKey: 'rnjc', label: 'RNJC', numeric: false, width: 60 },
  { dataKey: 'sadc', label: 'SADC', numeric: false, width: 60 },
  { dataKey: 'hcc', label: 'HCC', numeric: false, width: 60 },
  { dataKey: 'msds', label: 'MSDS', numeric: false, width: 60 },
];

const fixedHeaderContent = createFixedHeaderContent(columns);
const rowContent = createRowContent(columns);

const PartInformationTable = ({ partInformation }: PartInformationProps) => {
  return (
    <Paper style={{ height: 400 }}>
      <TableVirtuoso
        data={partInformation}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
};

export default PartInformationTable;
