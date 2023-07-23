import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import './navigation.styles.scss';
import { UserContext } from '../../context/user.context.tsx';
import { useTheme } from '@aws-amplify/ui-react';
import NavBar from '../../components/navBar/navBar.component';
import MobileNav from '../../components/mobileNav/mobileNav.component';

const Navigation = () => {
  const { company, userDetails, mobile, docWidth, docHeight } =
    useContext(UserContext);

  console.log(mobile);

  const { tokens } = useTheme();

  const navigate = useNavigate();
  const navOverrides = {
    Home: {
      onClick: () => {
        navigate('/');
      },
      style: {
        cursor: 'pointer',
      },
    },
    Parts: {
      onClick: () => {
        navigate('/Parts');
      },
      style: {
        cursor: 'pointer',
      },
    },
    Inventory: {
      onClick: () => {
        navigate('/Inventory');
      },
      style: {
        cursor: 'pointer',
      },
    },
    RFQs: {
      onClick: () => {
        navigate('/rfq');
      },
      style: {
        cursor: 'pointer',
      },
    },
    image: {
      src: company ? company.profilePictureUrl : '',
    },
    Brand: {
      onClick: () => {
        navigate('/');
      },
      style: {
        cursor: 'pointer',
      },
    },
    Company: {
      children: company ? company.companyName : '',
    },
    User: {
      children: userDetails
        ? userDetails.lastName + ', ' + userDetails.firstName
        : '',
    },
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        minHeight: '100%',
      }}
    >
      {mobile ? (
        <MobileNav />
      ) : (
        <>
          <div
            style={{
              position: 'relative',
              paddingBottom: '50px',
            }}
          ></div>
          <div
            style={{
              width: '100%',
              height: '100px',
              display: 'flex',
              position: 'fixed',
              zIndex: 11,
            }}
          >
            <NavBar width={'100%'} overrides={navOverrides} position='fixed' />
          </div>
        </>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingTop: mobile ? 30 : 10,
          paddingLeft: mobile ? 0 : 10,
          width: '100%',
          minHeight: '100vh',
          justifyContent: 'center',
          minWidth: mobile ? '100%' : '1500',
          zIndex: 10,
          background: mobile
            ? ''
            : `radial-gradient(circle at center, ${tokens.colors.background.quaternary} 0%, ${tokens.colors.background.quaternary} 30%,${tokens.colors.background.quaternary} 40%,${tokens.colors.background.tertiary} 100%)`,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
