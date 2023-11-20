import { Paper } from '@mui/material';
import { TableVirtuoso } from 'react-virtuoso';
import { AdditionalPartInformation } from '../../../../API';
import {
  ColumnData,
  VirtuosoTableComponents,
  createFixedHeaderContent,
  createRowContent,
} from './sharedTableComponents';

interface AdditionalPartInformationProps {
  additionalPartInformation: AdditionalPartInformation[];
}

const columns: ColumnData[] = [
  { dataKey: 'partNumber', label: 'Part Number', width: 140 },
  { dataKey: 'cage', label: 'Cage', width: 80 },
  { dataKey: 'company', label: 'Company', width: 250 },
  { dataKey: 'source', label: 'Source', width: 100 },
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

const AdditionalPartInformationTable = ({
  additionalPartInformation,
}: AdditionalPartInformationProps) => {
  return (
    <Paper sx={{ height: 400 }}>
      <TableVirtuoso
        data={additionalPartInformation}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
};

export default AdditionalPartInformationTable;
