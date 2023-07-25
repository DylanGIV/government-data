import * as React from 'react';
import { getOverrideProps } from '@aws-amplify/ui-react/internal';
import { Flex, Icon, Image, Text, View, useTheme } from '@aws-amplify/ui-react';
import { Avatar, Typography } from '@mui/material';
import ProfileMenu from '../profileMenu/profileMenu.component';
import { UserContext } from '../../context/user.context.tsx';
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const { tokens } = useTheme();

  const { docWidth } = React.useContext(UserContext);

  return (
    <Flex
      gap='20px'
      justifyContent='space-between'
      backgroundColor='rgba(255,255,255,1)'
      boxShadow=' 0px 4px 4px rgba(0,0,0,0.25)'
      padding='10px 20px 10px 20px'
      display='flex'
      {...getOverrideProps(overrides, 'NavBar')}
      {...rest}
    >
      <Flex
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        flex='1'
        alignSelf='stretch'
        position='relative'
        display='flex'
        columnGap='10px'
        {...getOverrideProps(overrides, 'Brand')}
      >
        <Image
          width='38px'
          height='38px'
          src='https://spartan-systems-marketplace-storage25017-staging.s3.us-west-2.amazonaws.com/public/email/SpartanLogo.jpeg'
          borderRadius='5px'
          {...getOverrideProps(overrides, 'Star 1')}
        ></Image>
        <Flex display='flex' direction='column' alignItems='flex-end'>
          <Typography
            fontFamily='Inter'
            fontSize='24px'
            fontWeight='600'
            color='rgba(0,0,0,1)'
            textAlign='left'
            whiteSpace='pre-wrap'
            children='Spartan'
            lineHeight='24px'
            {...getOverrideProps(overrides, 'Logo29767075')}
          ></Typography>
          <Typography variant='caption' lineHeight='10px'>
            DATA
          </Typography>
        </Flex>
      </Flex>
      <Flex
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        flex='2'
        maxWidth={'750px'}
        display='flex'
        columnGap='20px'
        {...getOverrideProps(overrides, 'Frame 32129767076')}
      >
        <Typography
          fontFamily='Inter'
          fontSize='19px'
          fontWeight='400'
          color='rgba(0,0,0,1)'
          textAlign='center'
          letterSpacing='0.09px'
          whiteSpace='pre-wrap'
          children='Dashboard'
          {...getOverrideProps(overrides, 'Home')}
        ></Typography>
        <Typography
          fontFamily='Inter'
          fontSize='19px'
          fontWeight='400'
          color='rgba(0,0,0,1)'
          textAlign='center'
          letterSpacing='0.09px'
          whiteSpace='pre-wrap'
          children='Search NSN'
          {...getOverrideProps(overrides, 'Search')}
        ></Typography>
      </Flex>
      <Flex
        gap='32px'
        direction='row'
        justifyContent='flex-end'
        alignItems='center'
        flex='1'
        display='flex'
        {...getOverrideProps(overrides, 'Frame 32129767081')}
      >
        <Flex
          direction='row'
          justifyContent='flex-end'
          alignItems='center'
          flex='1'
          padding='0px 0px 0px 0px'
          display='flex'
          {...getOverrideProps(overrides, 'CompanyContainer')}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              fontFamily='Inter'
              fontSize='18px'
              fontWeight='400'
              color='rgba(0,0,0,1)'
              textAlign='left'
              direction='column'
              letterSpacing='0.09px'
              lineHeight='18px'
              whiteSpace='pre-wrap'
              {...getOverrideProps(overrides, 'Company')}
            ></Typography>
            <Typography
              fontFamily='Inter'
              fontSize='12px'
              fontWeight='200'
              color='rgba(0,0,0,1)'
              textAlign='left'
              letterSpacing='0.09px'
              whiteSpace='pre-wrap'
              lineHeight='18px'
              children=''
              {...getOverrideProps(overrides, 'User')}
            ></Typography>
          </div>

          <ProfileMenu
            width='45px'
            height='45px'
            {...getOverrideProps(overrides, 'image')}
          ></ProfileMenu>
        </Flex>
      </Flex>
    </Flex>
  );
}
