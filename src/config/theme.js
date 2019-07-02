import { createMuiTheme } from '@material-ui/core/styles';
import {PRIMARY_COLOR} from '../constant/color';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: PRIMARY_COLOR
    }
  },
});

export default theme;