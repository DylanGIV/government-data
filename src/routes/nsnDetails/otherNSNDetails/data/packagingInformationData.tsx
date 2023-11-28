import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { PackagingInformation } from '../../../../API';
import { ExpandMore } from '@mui/icons-material';

interface PackagingInformationProps {
  packagingInformation: PackagingInformation;
}

const PackagingInformationData = ({
  packagingInformation,
}: PackagingInformationProps) => {
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
          Packaging Information
        </h3>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          columnGap: '10px',
        }}
      >
        <div
          style={{
            width: '50%',
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
                width: '50%',
              }}
            >
              Category Code:{' '}
            </text>
            <text
              style={{
                width: '50%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.categoryCode}
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
                width: '60%',
              }}
            >
              Clean/Dry Procedure:{' '}
            </text>
            <text
              style={{
                width: '40%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.cleanDryProcedure}
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
                width: '50%',
              }}
            >
              Container FSC:{' '}
            </text>
            <text
              style={{
                width: '50%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.containerFSC}
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
                width: '50%',
              }}
            >
              Container NSN:{' '}
            </text>
            <text
              style={{
                width: '50%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.containerNSN}
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
                width: '55%',
              }}
            >
              Cush/Dun Material:{' '}
            </text>
            <text
              style={{
                width: '45%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.cushDunMaterial}
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
                width: '60%',
              }}
            >
              Cush/Dun Thickness:{' '}
            </text>
            <text
              style={{
                width: '40%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.cushDunThickness}
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
                width: '60%',
              }}
            >
              Inter Container Code:{' '}
            </text>
            <text
              style={{
                width: '40%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.interContainerCode}
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
                width: '60%',
              }}
            >
              Inter Container Qty:{' '}
            </text>
            <text
              style={{
                width: '40%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.interContainerQty}
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
                width: '60%',
              }}
            >
              Item Type Storage:{' '}
            </text>
            <text
              style={{
                width: '40%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.itemTypeStorage}
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
              Lvl A Pkg Req:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.lvlAPkgReq}
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
              Lvl B Pkg Req:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.lvlBPkgReq}
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
              Lvl C Pkg Req:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.lvlCPkgReq}
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
              Opt Proc Ind:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.optProcInd}
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
                width: '55%',
              }}
            >
              Pkg Design Activity:{' '}
            </text>
            <text
              style={{
                width: '45%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.pkgDesignActivity}
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
                width: '50%',
              }}
            >
              Pres Material:{' '}
            </text>
            <text
              style={{
                width: '50%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.presMaterial}
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
              Pres Method:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.presMethod}
            </text>
          </div>
        </div>

        <div
          style={{
            width: '50%',
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
              Pri/Sec ICC:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.priSecICC}
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
              Source:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.source}
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
              Spec Marking:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.specMarking}
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
              SPI Date:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.spiDate}
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
              SPI Number:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.spiNumber}
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
              SPI Revision:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.spiRevision}
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
              Status:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.status}
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
              Supp Inst:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.suppInst}
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
                width: '60%',
              }}
            >
              Unit Container:{' '}
            </text>
            <text
              style={{
                width: '40%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.unitContainer}
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
                width: '60%',
              }}
            >
              Unit Container Level:{' '}
            </text>
            <text
              style={{
                width: '40%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.unitContainerLevel}
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
                width: '50%',
              }}
            >
              Unit Pack Cube:{' '}
            </text>
            <text
              style={{
                width: '50%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.unitPackCube}
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
                width: '50%',
              }}
            >
              Unit Pack Size:{' '}
            </text>
            <text
              style={{
                width: '50%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.unitPackSize}
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
                width: '50%',
              }}
            >
              Unit Pack Weight:{' '}
            </text>
            <text
              style={{
                width: '50%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.unitPackWeight}
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
                width: '50%',
              }}
            >
              Unpkg Item Dims:{' '}
            </text>
            <text
              style={{
                width: '50%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.unpkgItemDims}
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
                width: '50%',
              }}
            >
              Unpkg Weight:{' '}
            </text>
            <text
              style={{
                width: '50%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.unpkgWeight}
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
              Wrapping Mat:{' '}
            </text>
            <text
              style={{
                width: '60%',
                textAlign: 'right',
              }}
            >
              {packagingInformation?.wrappingMat}
            </text>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default PackagingInformationData;
