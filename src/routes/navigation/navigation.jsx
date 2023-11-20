import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import './navigation.styles.scss';
import { UserContext } from '../../context/user.context';
import { useTheme } from '@aws-amplify/ui-react';
import NavBar from '../../components/navBar/navBar';
import MobileNav from '../../components/mobileNav/mobileNav';

const Navigation = () => {
  const { company, userDetails, mobile, docWidth, docHeight } =
    useContext(UserContext);

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
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '75px',
          display: 'flex',
          position: 'sticky',
          top: 0,
          zIndex: 11,
        }}
      >
        {mobile ? (
          <MobileNav />
        ) : (
          <NavBar width={'100%'} overrides={navOverrides} />
        )}
      </div>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          flexDirection: 'row',
          width: '100%',
          minHeight: '100vh',
          justifyContent: 'center',
          minWidth: mobile ? '100%' : '1500',
          paddingTop: '15px',
          zIndex: 10,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
