import React, {useEffect} from 'react';
import Loader from '../common/loader';
import SnackBar from '../common/snackbar';
import DataItem from './components/data-item';

/**
 * HomeComponent(Hook): Parent container component for home view/module
 */
function HomeComponent(props) {
  useEffect(() => {
    props.getNYData();
  }, []);

  /** Function handling snackbar's visibility */
  const _handleClose = () => {
    props.setSnackbarVisibility(false, '');
  }

  const {isLoaderVisible,isSnackVisible,nyData,snackMessage} = props;
  return (
      <>
        <Loader isVisible={isLoaderVisible} />
        <SnackBar isVisible={isSnackVisible} message={snackMessage} handleClose={_handleClose}/>
        <DataItem data={nyData} />
      </>
  )
}

export default HomeComponent;