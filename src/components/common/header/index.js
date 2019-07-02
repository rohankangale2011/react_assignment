import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {HeaderWrapper,StyledIconButton} from './header.style';

function IconButton({label, IconComponent}) {
  return (
    <StyledIconButton edge="end" aria-label={label}>
      <IconComponent />
    </StyledIconButton>
  )
}

const Header = React.memo(({title}) => {
  return (
    <HeaderWrapper>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" style={{
            flexGrow: 1
          }}>
            {title}
          </Typography>
          <IconButton label="Search" IconComponent={SearchIcon} />
          <IconButton label="Menu" IconComponent={MoreVertIcon} />
        </Toolbar>
      </AppBar>
    </HeaderWrapper>
  );
});

export default Header;