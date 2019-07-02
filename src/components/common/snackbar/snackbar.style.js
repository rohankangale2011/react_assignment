import SnackbarContent from '@material-ui/core/SnackbarContent';
import styled from 'styled-components';
import {ERROR_COLOR} from '../../../constant/color';

export const StyledSnackbarWrapper = styled(SnackbarContent)`
  && {
    background-color: ${ERROR_COLOR};
  }
`;