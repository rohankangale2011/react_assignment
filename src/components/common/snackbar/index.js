import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import {StyledSnackbarWrapper} from './snackbar.style';

function SnackbarContentWrapper(props) {
  const { message, onClose } = props;
  return (
    <StyledSnackbarWrapper
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar">
          {message}
        </span>
      }
      action={[
        <IconButton 
          key="close" 
          aria-label="Close" 
          color="inherit" 
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
}

const SnackBar = React.memo(({isVisible,handleClose}) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
    open={isVisible}
    autoHideDuration={6000}
    onClose={handleClose}
  >
    <SnackbarContentWrapper
      variant="success"
      message="This is a success message!"
    />
  </Snackbar>
));

export default SnackBar;