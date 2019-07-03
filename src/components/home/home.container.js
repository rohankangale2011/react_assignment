import { connect } from 'react-redux';
import {setSnackbarVisibility} from '../common/redux/action';
import HomeComponent from './home.component';
import {getNYData} from './home.action';

const mapStateToProps = (state) => {
  return {
    nyData: state.home.nyData,
    isLoaderVisible: state.common.isLoaderVisible,
    isSnackVisible: state.common.isSnackVisible,
    snackMessage: state.common.snackMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNYData: () => dispatch(getNYData()),
    setSnackbarVisibility: (isVisible, message) => dispatch(setSnackbarVisibility(isVisible, message))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent);