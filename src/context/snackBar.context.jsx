// SnackbarContext.js
import { createContext } from 'react';
import React, { useState } from 'react';
import AlertComponent from '../components/alertComponent/alertComponent.component';

export const SnackbarContext = createContext({
  showAlert: () => {},
});

export const SnackbarProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const showAlert = (message, severity) => {
    const id = new Date().getTime();
    setAlerts([...alerts, { id, message, severity }]);
  };

  const handleClose = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <SnackbarContext.Provider value={{ showAlert }}>
      {children}
      {alerts.map((alert, index) => (
        <AlertComponent
          key={alert.id}
          open
          onClose={() => handleClose(alert.id)}
          message={alert.message}
          severity={alert.severity}
          index={index}
        />
      ))}
    </SnackbarContext.Provider>
  );
};
