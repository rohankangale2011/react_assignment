import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {LoaderWrapper} from './loader.style';

const Loader = React.memo(({isVisible}) => {
  return (
    isVisible && (
      <LoaderWrapper>
        <CircularProgress color="primary" />
      </LoaderWrapper>
    )
  );
});

export default Loader;