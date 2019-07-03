import Snackbar from '@material-ui/core/Snackbar';
import styled from 'styled-components';
import {ERROR_COLOR} from '../../../constant/color';

export const StyledSnackbar = styled(Snackbar)`
  && {
    > div {
      background-color: ${ERROR_COLOR};
    }
  }
`;