import { ReactNode, createContext, useEffect, useState } from 'react';
import { Company, Country, UserDetails } from '../models';
import { CognitoUser } from '../customModels';

export interface UserContextType {
  company: Company | null;
  user: CognitoUser | null;
  userDetails: UserDetails | null;
  refreshPage: boolean;
  countries: Country[] | null;
  useTextFields: boolean;
  useSideBarNav: boolean;
  dontShowRfqSendConfirmation: boolean;
  mobile: boolean;
  docWidth: number;
  docHeight: number;
  setUser: any;
  setCompany: any;
  setUserDetails: any;
  setRefreshPage: any;
  setCountries: any;
  setUseTextFields: any;
  setUseSideBarNav: any;
  setDontShowRfqSendConfirmation: any;
  setMobile: any;
  setDocWidth: any;
  setDocHeight: any;
}

export const UserContext = createContext<UserContextType>({
  company: null,
  user: null,
  userDetails: null,
  refreshPage: false,
  countries: null,
  useTextFields: true,
  useSideBarNav: false,
  dontShowRfqSendConfirmation: false,
  mobile: false,
  docWidth: document.documentElement.clientWidth,
  docHeight: document.documentElement.clientHeight,
  setUser: () => {},
  setCompany: () => {},
  setUserDetails: () => {},
  setRefreshPage: () => {},
  setCountries: () => {},
  setUseTextFields: () => {},
  setUseSideBarNav: () => {},
  setDontShowRfqSendConfirmation: () => {},
  setMobile: () => {},
  setDocWidth: () => {},
  setDocHeight: () => {},
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [company, setCompany] = useState(null);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [refreshPage, setRefreshPage] = useState(false);
  const [countries, setCountries] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [docWidth, setDocWidth] = useState(
    document.documentElement.scrollWidth
  );
  const [docHeight, setDocHeight] = useState(
    document.documentElement.scrollHeight
  );
  // look for useTextFields in local storage. If does not exist, set default as true
  const [useTextFields, setUseTextFields] = useState(
    localStorage.getItem('useTextFields') === 'true' ? true : false
  );

  useEffect(() => {
    localStorage.setItem('useTextFields', useTextFields.toString());
  }, [useTextFields]);

  // check local storage for useSideBarNav
  const [useSideBarNav, setUseSideBarNav] = useState(
    localStorage.getItem('useSideBarNav') === 'true' ? true : false
  );

  useEffect(() => {
    localStorage.setItem('useSideBarNav', useSideBarNav.toString());
  }, [useSideBarNav]);

  // check local storage for dontShowRfqSendConfirmation
  const [dontShowRfqSendConfirmation, setDontShowRfqSendConfirmation] =
    useState(
      localStorage.getItem('dontShowRfqSendConfirmation') === 'true'
        ? true
        : false
    );

  useEffect(() => {
    localStorage.setItem(
      'dontShowRfqSendConfirmation',
      dontShowRfqSendConfirmation.toString()
    );
  }, [dontShowRfqSendConfirmation]);

  useEffect(() => {
    const updateDocWidth = () => {
      setDocWidth(document.documentElement.clientWidth);
      setDocHeight(document.documentElement.clientHeight);
    };

    window.addEventListener('resize', updateDocWidth);

    return () => {
      window.removeEventListener('resize', updateDocWidth);
    };
  }, []);

  const value = {
    company,
    user,
    userDetails,
    setCompany,
    setUser,
    setUserDetails,
    refreshPage,
    setRefreshPage,
    countries,
    setCountries,
    useTextFields,
    setUseTextFields,
    useSideBarNav,
    setUseSideBarNav,
    dontShowRfqSendConfirmation,
    setDontShowRfqSendConfirmation,
    mobile,
    setMobile,
    docWidth,
    setDocWidth,
    docHeight,
    setDocHeight,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
