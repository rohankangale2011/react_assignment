import React, {Component} from 'react';
import Loader from '../common/loader';
import SnackBar from '../common/snackbar';
import DataItem from './components/data-item';

/**
 * HomeComponent: Parent container component for home view/module
 */
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
  }

  componentDidMount() {
    this.props.getNYData();
  }

  /** Function handling snackbar's visibility */
  _handleClose() {
    this.props.setSnackbarVisibility(false, '');
  }

  render() {
    const {isLoaderVisible,isSnackVisible,nyData,snackMessage} = this.props;
    return (
      <>
        <Loader isVisible={isLoaderVisible} />
        <SnackBar isVisible={isSnackVisible} message={snackMessage} handleClose={this._handleClose}/>
        <DataItem data={nyData} />
      </>
    )
  }
}

export default HomeComponent;