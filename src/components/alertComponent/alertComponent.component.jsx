// AlertComponent.js
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

const AlertComponent = ({ open, onClose, message, severity, index }) => {
  const positionStyle = {
    marginBottom: `${index * 70}px`,
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={9000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      ClickAwayListenerProps={{ mouseEvent: false }}
      style={positionStyle}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant='standard'
        sx={{
          borderRadius: '8px',
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
