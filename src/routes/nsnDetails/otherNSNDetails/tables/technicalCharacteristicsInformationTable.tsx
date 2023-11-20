import { Paper } from '@mui/material';
import { TechnicalCharacteristicsInformation } from '../../../../API';
import { TableVirtuoso } from 'react-virtuoso';
import {
  ColumnData,
  VirtuosoTableComponents,
  createFixedHeaderContent,
  createRowContent,
} from './sharedTableComponents';

interface TechnicalCharacteristicsInformationProps {
  technicalCharacteristicsInformation: TechnicalCharacteristicsInformation[];
}

const columns: ColumnData[] = [
  { dataKey: 'mrc', label: 'MRC', numeric: false, width: 100 },
  {
    dataKey: 'requirementStatement',
    label: 'Requirement Statement',
    numeric: false,
    width: 250,
  },
  {
    dataKey: 'replyStatement',
    label: 'Reply Statement',
    numeric: false,
    width: 250,
  },
];

const fixedHeaderContent = createFixedHeaderContent(columns);
const rowContent = createRowContent(columns);

const TechnicalCharacteristicsInformationTable = ({
  technicalCharacteristicsInformation,
}: TechnicalCharacteristicsInformationProps) => {
  return (
    <Paper style={{ height: 400 }}>
      <TableVirtuoso
        data={technicalCharacteristicsInformation}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
};

export default TechnicalCharacteristicsInformationTable;
