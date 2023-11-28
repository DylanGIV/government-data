import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { FreightInformation } from '../../../../API';
import { ExpandMore } from '@mui/icons-material';

interface FreightInformationDataProps {
  freightInformation: FreightInformation;
}

const FreightInformationData = ({
  freightInformation,
}: FreightInformationDataProps) => {
  return (
    <Accordion
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '600px',
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
          Freight Information
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
            Freight Description:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.description}
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
            Originating Activity:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.originatingActivity}
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
            Hazardous Material:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.hazardousMaterial}
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
            National Motor Freight Classification Number:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.nationalMotorFreightClassificationNumber}
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
            Less Than One Truckload:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.lessThanOneTruckload}
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
            NMFC Sub Item:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.nmfcSubItem}
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
            Uniform Freight Classification Number:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.uniformFreightClassificationNumber}
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
            Rail Variance Code:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.railVarianceCode}
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
            Less Than One Carload:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.lessThanOneCarload}
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
            Water Commodity Code:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.waterCommodityCode}
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
            Type Of Cargo Code:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.typeOfCargoCode}
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
            Special Handling Code:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.specialHandlingCode}
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
            Air Commodity Special Handling Code:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.airCommoditySpecialHandlingCode}
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
            Air Dimension Code:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.airDimensionCode}
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
            Integrity Code:{' '}
          </text>
          <text
            style={{
              width: '60%',
              textAlign: 'right',
            }}
          >
            {freightInformation?.integrityCode}
          </text>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default FreightInformationData;
