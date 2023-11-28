import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

interface NSNDetailDataProps {
  nsnDetail: NSNDetail;
}

export type NSNDetail = {
  nsn: string;
  niin?: string | null;
  itemName?: string | null;
  inc?: string | null;
  fsc?: string | null;
  assignmentDate?: string | null;
  crit?: string | null;
  iig?: string | null;
  isc?: string | null;
  dateStandardized?: string | null;
  hmic?: string | null;
  dodic?: string | null;
  nsc?: string | null;
  cancellationDate?: string | null;
  pmic?: string | null;
  fiig?: string | null;
  esd?: string | null;
  scheduleB?: string | null;
  demil?: string | null;
  demilint?: string | null;
  tiic?: string | null;
  originator?: string | null;
  adpec?: string | null;
  rpdmrc?: string | null;
};

const NSNDetailData = ({ nsnDetail }: NSNDetailDataProps) => {
  return (
    <Accordion
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1210px',
        width: '100%',
        borderRadius: '15px',
        p: 0,
        transition: 'max-width 0.2s ease-in-out',
        border: '1px solid rgba(0, 0, 0, .125)',
        '::before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        sx={{
          height: '50px',
        }}
        expandIcon={<ExpandMore />}
      >
        <h3
          style={{
            textAlign: 'center',
            width: '100%',
          }}
        >
          NSN Information
        </h3>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          p: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
            borderTop: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            FSC:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.fsc}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            NIIN:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.niin}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            NSC:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.nsc}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            DEMIL:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.demil}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            DEMIL INT:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.demilint}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            DODIC:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.dodic}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            ESD:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.esd}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            FIIG:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.fiig}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            HMIC:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.hmic}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            IIG:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.iig}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            INC:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.inc}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            ISC:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.isc}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            NSC:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.nsc}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            PMIC:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.pmic}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            ADPEC:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.adpec}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            TIIC:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.tiic}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            RPDMRC:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.rpdmrc}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            Assignment Date:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.assignmentDate}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            Cancellation Date:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.cancellationDate}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            CRIT:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.crit}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            Schedule B:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.scheduleB}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            Date Standardized:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.dateStandardized}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            Item Name:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.itemName}
          </text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
        >
          <text
            style={{
              width: '40%',
            }}
          >
            Originator:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {nsnDetail?.originator}
          </text>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default NSNDetailData;
