import styled from 'styled-components';
import {BACKGROUND_TRANSPARENT_COLOR} from '../../../constant/color';

export const LoaderWrapper = styled.div`
  background-color: ${BACKGROUND_TRANSPARENT_COLOR};
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 0;
  top: 0;
`;