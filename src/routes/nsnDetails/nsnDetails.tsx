import { useParams } from 'react-router';
import { GetNSNDetails } from '../../utils/lqlite';
import {
  AdditionalPartInformation,
  MOERulesInformation,
  ManagementInformation,
  NSNDetail,
  ObsoleteNIINInformation,
  PartInformation,
  PhraseInformation,
  ReplacedReplacementNIINInformation,
  TechnicalCharacteristicsInformation,
} from '../../API';
import { useContext, useEffect, useState } from 'react';
import PartInformationTable from './otherNSNDetails/tables/partInformationTable';
import AdditionalPartInformationTable from './otherNSNDetails/tables/additionalPartInformationTable';
import { Button } from '@mui/material';
import { UserContext } from '../../context/user.context';
import GenericAccordion from './genericAccordion';
import ManagementInformationTable from './otherNSNDetails/tables/managementInformationTable';
import MOERulesInformationTable from './otherNSNDetails/tables/moeRulesInformationTable';
import PhraseInformationTable from './otherNSNDetails/tables/phraseInformationTable';
import { ArrowUpward, UnfoldLess, UnfoldMore } from '@mui/icons-material';
import { Box } from '@mui/system';
import { SearchField, useTheme } from '@aws-amplify/ui-react';
import TechnicalCharacteristicsInformationTable from './otherNSNDetails/tables/technicalCharacteristicsInformationTable';
import ObsoleteNIINInformationTable from './otherNSNDetails/tables/obsoleteNIINInformationTable';
import ReplacedReplacementNIINInformationTable from './otherNSNDetails/tables/replacedReplacementAndObsoleteInformationTable';
import FreightInformationData from './otherNSNDetails/data/freightInformationData';
import PackagingInformationData from './otherNSNDetails/data/packagingInformationData';
import NSNDetailData from './otherNSNDetails/data/nsnDetailData';

const NSNDetails = () => {
  const { searchTerm } = useParams();
  const [nsnDetail, setNSNDetail] = useState<NSNDetail | undefined>(undefined);
  const [accordionsExpanded, setAccordionsExpanded] = useState<string[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [statusCode, setStatusCode] = useState<number>(0);
  // this will store the search field for each accordion
  const [searches, setSearches] = useState<string[]>(new Array(8).fill(''));

  const { docWidth, scrollY } = useContext(UserContext);
  const { tokens } = useTheme();

  const handleSearch = async (search: string | undefined) => {
    if (!search) return;
    try {
      const response = await GetNSNDetails(search);
      if (response.StatusCode == 404) {
        setStatusCode(404);
        return;
      } else if (response.StatusCode != 200) {
        setStatusCode(response.StatusCode as number);
        console.error('Error fetching NSN details, status code: 200');
        return;
      }

      if (!response.Payload) {
        setStatusCode(500);
        console.error('Error fetching NSN details, no payload');
        return;
      }

      const payload: any = JSON.parse(response.Payload as any);

      if (!payload.body) {
        setStatusCode(500);
        console.error('Error fetching NSN details, no payload body');
        return;
      }

      const nsnDetail: NSNDetail = JSON.parse(payload.body);
      setNSNDetail(nsnDetail);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };

  function toggleAccordion(accordionName: string) {
    setAccordionsExpanded((prevExpanded) =>
      prevExpanded.includes(accordionName)
        ? prevExpanded.filter((name) => name !== accordionName)
        : [...prevExpanded, accordionName]
    );
  }

  function filterObject(object: any, searchQuery: string) {
    if (!searchQuery) {
      return object;
    }

    const lowercasedSearchQuery = searchQuery
      .toLowerCase()
      .trimEnd()
      .trimStart();

    return object.filter((item: any) => {
      return Object.values(item).some((value) => {
        if (value === item.id) return false;

        const lowercasedValue = value?.toString().toLowerCase();
        if (!lowercasedValue) return false;
        return lowercasedValue.includes(lowercasedSearchQuery);
      });
    });
  }

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 1
      );
    }, 80);
    return () => {
      clearInterval(interval);
    };
  });

  if (statusCode == 404) {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>NSN Not Found</h1>
      </div>
    );
  } else if (statusCode != 0) {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Error Fetching NSN Details</h1>
      </div>
    );
  }

  return nsnDetail ? (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          rowGap: '10px',
        }}
      >
        {nsnDetail.nsn}
        {nsnDetail && <NSNDetailData nsnDetail={nsnDetail} />}
        <div
          style={{
            display: 'flex',
            flexDirection: docWidth >= 1210 ? 'row' : 'column',
            width: '100%',
            alignItems: docWidth >= 1210 ? 'flex-start' : 'center',
            justifyContent: docWidth >= 1210 ? 'center' : 'flex-start',
            gap: '10px',
          }}
        >
          <div>
            {nsnDetail.FreightInformation && (
              <FreightInformationData
                freightInformation={nsnDetail.FreightInformation}
              />
            )}
          </div>
          <div>
            {nsnDetail.PackagingInformation && (
              <PackagingInformationData
                packagingInformation={nsnDetail.PackagingInformation}
              />
            )}
          </div>
        </div>
        <div>
          <Button
            onClick={() => {
              setAccordionsExpanded([
                'partInformation',
                'additionalPartInformation',
                'managementInformation',
                'moeRulesInformation',
                'phraseInformation',
                'technicalCharacteristicsInformation',
                'obsoleteNIINInformation',
                'replacedReplacementNIINInformation',
              ]);
            }}
          >
            <UnfoldMore htmlColor='black' />
          </Button>
          <Button
            onClick={() => {
              setAccordionsExpanded([]);
            }}
          >
            <UnfoldLess htmlColor='black' />
          </Button>
        </div>
        {nsnDetail.PartInformation && (
          <GenericAccordion
            title='Part Information'
            expanded={accordionsExpanded.includes('partInformation')}
            onChange={() => toggleAccordion('partInformation')}
            itemLength={nsnDetail.PartInformation?.items?.length}
            searchChildren={
              <SearchField
                label={'Search'}
                placeholder='Search any field...'
                value={searches[0]}
                outerEndComponent={null}
                onClear={() =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[0] = '';
                    return newSearches;
                  })
                }
                onChange={(e) =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[0] = e.target.value;
                    return newSearches;
                  })
                }
              />
            }
          >
            <PartInformationTable
              partInformation={
                searches[0]
                  ? (filterObject(
                      nsnDetail.PartInformation?.items,
                      searches[0]
                    ) as PartInformation[])
                  : (nsnDetail.PartInformation?.items as PartInformation[])
              }
            />
          </GenericAccordion>
        )}
        {nsnDetail.AdditionalPartInformation && (
          <GenericAccordion
            title='More Part Information'
            expanded={accordionsExpanded.includes('additionalPartInformation')}
            onChange={() => toggleAccordion('additionalPartInformation')}
            itemLength={nsnDetail.AdditionalPartInformation?.length}
            searchChildren={
              <SearchField
                label={'Search'}
                placeholder='Search any field...'
                value={searches[1]}
                outerEndComponent={null}
                onClear={() =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[1] = '';
                    return newSearches;
                  })
                }
                onChange={(e) =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[1] = e.target.value;
                    return newSearches;
                  })
                }
              />
            }
          >
            <div
              style={{ gap: '2px', display: 'flex', flexDirection: 'column' }}
            >
              <AdditionalPartInformationTable
                additionalPartInformation={
                  searches[1] && searches[1].length > 0
                    ? (filterObject(
                        nsnDetail.AdditionalPartInformation,
                        searches[1]
                      ) as AdditionalPartInformation[])
                    : (nsnDetail.AdditionalPartInformation as AdditionalPartInformation[])
                }
              />
            </div>
          </GenericAccordion>
        )}
        {nsnDetail.ManagementInformation && (
          <GenericAccordion
            title='Management Information'
            expanded={accordionsExpanded.includes('managementInformation')}
            onChange={() => toggleAccordion('managementInformation')}
            itemLength={nsnDetail.ManagementInformation?.length}
            searchChildren={
              <SearchField
                label={'Search'}
                placeholder='Search any field...'
                value={searches[2]}
                outerEndComponent={null}
                onClear={() =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[2] = '';
                    return newSearches;
                  })
                }
                onChange={(e) =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[2] = e.target.value;
                    return newSearches;
                  })
                }
              />
            }
          >
            <ManagementInformationTable
              managementInformation={
                nsnDetail.ManagementInformation as ManagementInformation[]
              }
            />
          </GenericAccordion>
        )}
        {nsnDetail.MOERulesInformation && (
          <GenericAccordion
            title='MOE Rules Information'
            expanded={accordionsExpanded.includes('moeRulesInformation')}
            onChange={() => toggleAccordion('moeRulesInformation')}
            itemLength={nsnDetail.MOERulesInformation?.length}
            searchChildren={
              <SearchField
                label={'Search'}
                placeholder='Search any field...'
                value={searches[3]}
                outerEndComponent={null}
                onClear={() =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[3] = '';
                    return newSearches;
                  })
                }
                onChange={(e) =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[3] = e.target.value;
                    return newSearches;
                  })
                }
              />
            }
          >
            <MOERulesInformationTable
              moeRulesInformation={
                nsnDetail.MOERulesInformation as MOERulesInformation[]
              }
            />
          </GenericAccordion>
        )}
        {nsnDetail.PhraseInformation && (
          <GenericAccordion
            title='Phrase Information'
            expanded={accordionsExpanded.includes('phraseInformation')}
            onChange={() => toggleAccordion('phraseInformation')}
            itemLength={nsnDetail.PhraseInformation?.length}
            searchChildren={
              <SearchField
                label={'Search'}
                placeholder='Search any field...'
                value={searches[4]}
                outerEndComponent={null}
                onClear={() =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[4] = '';
                    return newSearches;
                  })
                }
                onChange={(e) =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[4] = e.target.value;
                    return newSearches;
                  })
                }
              />
            }
          >
            <PhraseInformationTable
              phraseInformation={
                nsnDetail.PhraseInformation as PhraseInformation[]
              }
            />
          </GenericAccordion>
        )}
        {nsnDetail.TechnicalCharacteristicsInformation && (
          <GenericAccordion
            title='Technical Characteristics Information'
            expanded={accordionsExpanded.includes(
              'technicalCharacteristicsInformation'
            )}
            onChange={() =>
              toggleAccordion('technicalCharacteristicsInformation')
            }
            itemLength={nsnDetail.TechnicalCharacteristicsInformation?.length}
            searchChildren={
              <SearchField
                label={'Search'}
                placeholder='Search any field...'
                value={searches[5]}
                outerEndComponent={null}
                onClear={() =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[5] = '';
                    return newSearches;
                  })
                }
                onChange={(e) =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[5] = e.target.value;
                    return newSearches;
                  })
                }
              />
            }
          >
            <TechnicalCharacteristicsInformationTable
              technicalCharacteristicsInformation={
                nsnDetail.TechnicalCharacteristicsInformation as TechnicalCharacteristicsInformation[]
              }
            />
          </GenericAccordion>
        )}
        {nsnDetail.ReplacementAndObsoleteInformation
          ?.ObsoleteNIINInformation && (
          <GenericAccordion
            title='Obsolete NIIN Information'
            expanded={accordionsExpanded.includes('obsoleteNIINInformation')}
            onChange={() => toggleAccordion('obsoleteNIINInformation')}
            itemLength={
              nsnDetail.ReplacementAndObsoleteInformation
                ?.ObsoleteNIINInformation?.length
            }
            searchChildren={
              <SearchField
                label={'Search'}
                placeholder='Search any field...'
                value={searches[6]}
                outerEndComponent={null}
                onClear={() =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[6] = '';
                    return newSearches;
                  })
                }
                onChange={(e) =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[6] = e.target.value;
                    return newSearches;
                  })
                }
              />
            }
          >
            <ObsoleteNIINInformationTable
              obsoleteNIINInformation={
                nsnDetail.ReplacementAndObsoleteInformation
                  ?.ObsoleteNIINInformation as ObsoleteNIINInformation[]
              }
            />
          </GenericAccordion>
        )}
        {nsnDetail.ReplacementAndObsoleteInformation
          ?.ReplacedReplacementNIINInformation && (
          <GenericAccordion
            title='Replaced Replacement NIIN Information'
            expanded={accordionsExpanded.includes(
              'replacedReplacementNIINInformation'
            )}
            onChange={() =>
              toggleAccordion('replacedReplacementNIINInformation')
            }
            itemLength={
              nsnDetail.ReplacementAndObsoleteInformation
                ?.ReplacedReplacementNIINInformation?.length
            }
            searchChildren={
              <SearchField
                label={'Search'}
                placeholder='Search any field...'
                value={searches[7]}
                outerEndComponent={null}
                onClear={() =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[7] = '';
                    return newSearches;
                  })
                }
                onChange={(e) =>
                  setSearches((prevSearches) => {
                    const newSearches = [...prevSearches];
                    newSearches[7] = e.target.value;
                    return newSearches;
                  })
                }
              />
            }
          >
            <ReplacedReplacementNIINInformationTable
              replacedReplacementNIINInformation={
                nsnDetail.ReplacementAndObsoleteInformation
                  ?.ReplacedReplacementNIINInformation as ReplacedReplacementNIINInformation[]
              }
            />
          </GenericAccordion>
        )}
        <Button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          style={{
            position: 'fixed',
            bottom: '30px',
            left: docWidth / 2 - 31,
            backgroundColor: 'white',
            width: '62px',
            height: '50px',
            borderRadius: '30px',
            border: '1px solid black',
            boxShadow: '0px 6px 8px black',
            zIndex: 100,
            opacity: scrollY > 50 ? 100 : 0,
            transition: 'opacity 0.5s',
            color: 'black',
          }}
        >
          <ArrowUpward />
        </Button>
      </div>
    </div>
  ) : (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '200px',
          alignItems: 'center',
        }}
      >
        <h3 style={{ marginBottom: 5 }}>Loading...</h3>
        <div
          style={{
            width: '100%',
            height: '7px',
            backgroundColor: 'lightgray',
            borderRadius: '5px',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              borderRadius: '5px',
              height: '100%',
              backgroundColor: tokens.colors.brand.primary[60].toString(),
            }}
          />
        </div>
        <table>
          <caption style={{ fontSize: '0.8em', marginTop: '20px' }}>
            Note: When an NSN's data is requested for the first time, a data
            collection process is started. This process usually takes a few
            moments.
          </caption>
        </table>
      </Box>
    </>
  );
};
export default NSNDetails;
