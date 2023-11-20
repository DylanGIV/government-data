import { Paper } from '@mui/material';
import { MOERulesInformation } from '../../../../API';
import { TableVirtuoso } from 'react-virtuoso';
import {
  ColumnData,
  VirtuosoTableComponents,
  createFixedHeaderContent,
  createRowContent,
} from './sharedTableComponents';

interface MOERulesInformationProps {
  moeRulesInformation: MOERulesInformation[];
}

const columns: ColumnData[] = [
  { dataKey: 'moeRule', label: 'MOE Rule', numeric: false, width: 100 },
  { dataKey: 'formerMOER', label: 'Former MOER', numeric: false, width: 130 },
  { dataKey: 'effective', label: 'Effective', numeric: false, width: 120 },
  { dataKey: 'amc', label: 'AMC', numeric: false, width: 60 },
  { dataKey: 'amsc', label: 'AMSC', numeric: false, width: 60 },
  { dataKey: 'imc', label: 'IMC', numeric: false, width: 60 },
  { dataKey: 'imca', label: 'IMCA', numeric: false, width: 60 },
  {
    dataKey: 'collaborators',
    label: 'Collaborators',
    numeric: false,
    width: 140,
  },
  { dataKey: 'receivers', label: 'Receivers', numeric: false, width: 150 },
];

const fixedHeaderContent = createFixedHeaderContent(columns);
const rowContent = createRowContent(columns);

const MOERulesInformationTable = ({
  moeRulesInformation,
}: MOERulesInformationProps) => {
  return (
    <Paper style={{ height: 400 }}>
      <TableVirtuoso
        data={moeRulesInformation}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
};

export default MOERulesInformationTable;
