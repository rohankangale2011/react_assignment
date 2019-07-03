import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {StyledSnackbar} from './snackbar.style';

// function SnackbarContentWrapper(props) {
//   const { message, onClose } = props;
//   return (
//     <StyledSnackbarWrapper
//       aria-describedby="client-snackbar"
//       message={
//         <span id="client-snackbar">
//           {message}
//         </span>
//       }
//       action={[
//         <IconButton 
//           key="close" 
//           aria-label="Close" 
//           color="inherit" 
//           onClick={onClose}
//         >
//           <CloseIcon />
//         </IconButton>
//       ]}
//     />
//   );
// }

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

// const ErrorToaster = (open: any, message: any, close: any) => {
//   return (
//     <StyledToasterError anchorOrigin={{ horizontal: TOASTER_ALIGNMENT_HORIZONTAL, vertical: TOASTER_ALIGNMENT_TOP }} open={open} success={false.toString()} message={
//       <div className="check-error">
//         <span className="err-icon"><Error /></span>
//         <span className="msg">{message}</span>
//       </div>
//     }
//     action={[
//       <IconButton className="close" key="close" aria-label="Close" color="inherit" onClick={close}>
//         <Close />
//       </IconButton>
//     ]}
//   />
//   );
// }

export default SnackBar;