import {List} from '@material-ui/core';
import styled from 'styled-components';
import {
  BORDER_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR
} from '../../constant/color';

export const TableWrapper = styled.div`
  padding: 15px;
  width: 70%;
  margin: 60px auto 0;
  table {
    table-layout: fixed;
    td {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${PRIMARY_TEXT_COLOR}
`;

export const SubTitle = styled.div`
  font-size: 14px;
  color: ${SECONDARY_TEXT_COLOR};
  padding: 2px 0;
`;

export const SubTitleDate = styled.div`
  padding: 4px 0;
  font-size: 14px;
  line-height: 24px;
  svg {
    font-size: 14px;
    padding: 4px 4px 0 0;
    float: left;
  }
`;

export const StyledList = styled(List)`
  && {
    li {
      border-bottom: 1px solid ${BORDER_COLOR};
    }
  }
`;