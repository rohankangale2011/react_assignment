import React, {Component} from 'react';
import Loader from '../common/loader';
import SnackBar from '../common/snackbar';
import DataItem from './components/data-item';

class HomeComponent extends Component {
  componentDidMount() {
    this.props.getNYData();
  }
  render() {
    const {isLoaderVisible,isSnackVisible,nyData,snackMessage} = this.props;
    return (
      <>
        <Loader isVisible={isLoaderVisible} />
        <SnackBar isVisible={isSnackVisible} message={snackMessage} />
        <DataItem data={nyData} />
      </>
    )
  }
}

export default HomeComponent;