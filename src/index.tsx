import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Amplify } from 'aws-amplify';
import AWS from 'aws-sdk';

import {
  AmplifyProvider,
  Authenticator,
  ThemeProvider,
} from '@aws-amplify/ui-react';
import { studioTheme } from './theme/index';
import awsconfig from './aws-exports';
import { SnackbarProvider } from './context/snackBar.context';
import { UserProvider } from './context/user.context';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);
AWS.config.region = awsconfig.aws_project_region;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AmplifyProvider>
        <Authenticator.Provider>
          <SnackbarProvider>
            <UserProvider>
              <ThemeProvider theme={studioTheme}>
                <Authenticator>
                  <App />
                </Authenticator>
              </ThemeProvider>
            </UserProvider>
          </SnackbarProvider>
        </Authenticator.Provider>
      </AmplifyProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
