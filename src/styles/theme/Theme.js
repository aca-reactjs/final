import { lightBlue, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[700],
    },
    secondary: {
      main: purple[700],
    },
  },
});

export default theme;
