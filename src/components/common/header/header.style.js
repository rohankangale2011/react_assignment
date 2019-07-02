import {IconButton} from '@material-ui/core';
import styled from 'styled-components';
import {
  BACKGROUND_TRANSPARENT_COLOR,
  PRIMARY_COLOR
} from '../../../constant/color';

export const HeaderWrapper = styled.div`
  header {
    padding: 0 10%;
    background-color: ${PRIMARY_COLOR}
  }
`;

export const StyledIconButton = styled(IconButton)`
  && {
    color: ${BACKGROUND_TRANSPARENT_COLOR};
    margin-left: 14px;
  }
`;