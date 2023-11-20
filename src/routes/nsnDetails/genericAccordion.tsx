import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface GenericAccordionProps {
  title: string;
  expanded: boolean;
  onChange: () => void;
  children: React.ReactNode;
  searchChildren: React.ReactNode;
  itemLength: number;
  maxWidth?: string;
  width?: string;
}

const GenericAccordion: React.FC<GenericAccordionProps> = ({
  title,
  expanded,
  onChange,
  children,
  searchChildren,
  itemLength,
  maxWidth = '1250px',
  width = '100%',
}) => {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: width,
        maxWidth: !expanded ? '800px' : maxWidth,
        borderRadius: 1,
        p: 0,
        transition: 'max-width 0.2s ease-in-out',
        '::before': {
          content: 'none',
        },
        border: '1px solid rgba(0, 0, 0, .125)',
      }}
    >
      <AccordionSummary
        sx={{
          height: '50px',
        }}
        expandIcon={<ExpandMoreIcon />}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <h3>{title}</h3>
          {expanded && (
            <div
              style={{
                marginLeft: 'auto',
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'text',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {searchChildren}
            </div>
          )}
          <h3
            style={{
              marginLeft: 'auto',
              marginRight: '10px',
              color: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            {itemLength}
          </h3>
        </div>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>{children}</AccordionDetails>
    </Accordion>
  );
};

export default GenericAccordion;
