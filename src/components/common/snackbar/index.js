import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {StyledSnackbar} from './snackbar.style';

const SnackBar = React.memo(({isVisible,message,handleClose}) => (
  <StyledSnackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
    open={isVisible}
    message={message}
    action={[
      <IconButton 
        key="close" 
        aria-label="Close" 
        color="inherit" 
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
    ]}
  />
));

export default SnackBar;