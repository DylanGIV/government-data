import { Paper } from '@mui/material';
import { PhraseInformation } from '../../../../API';
import { TableVirtuoso } from 'react-virtuoso';
import {
  ColumnData,
  VirtuosoTableComponents,
  createFixedHeaderContent,
  createRowContent,
} from './sharedTableComponents';

interface PhraseInformationProps {
  phraseInformation: PhraseInformation[];
}

const columns: ColumnData[] = [
  { dataKey: 'moec', label: 'MOEC', numeric: false, width: 100 },
  { dataKey: 'pc', label: 'PC', numeric: false, width: 80 },
  { dataKey: 'phrase', label: 'Phrase', numeric: false, width: 250 },
  { dataKey: 'qpa', label: 'QPA', numeric: false, width: 80 },
  { dataKey: 'uom', label: 'UOM', numeric: false, width: 80 },
  { dataKey: 'oou', label: 'OOU', numeric: false, width: 80 },
  { dataKey: 'jtc', label: 'JTC', numeric: false, width: 80 },
];

const fixedHeaderContent = createFixedHeaderContent(columns);
const rowContent = createRowContent(columns);

const PhraseInformationTable = ({
  phraseInformation,
}: PhraseInformationProps) => {
  return (
    <Paper style={{ height: 400 }}>
      <TableVirtuoso
        data={phraseInformation}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
};

export default PhraseInformationTable;
