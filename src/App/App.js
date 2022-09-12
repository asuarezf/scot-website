import { ThemeProvider } from '@mui/material';
import Pricing from '../Components/Pricing';
import './App.css';
import { createTheme } from '@mui/material/styles';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import HomePage from '../Screens/HomePage/HomePage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#78909c',
      darker: '#4b636e',
      light: '#a7c0cd',
      text: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#bdbdbd',
      darker: '#8d8d8d',
      light: '#efefef',
      text: '#000000',
      contrastText: '#fff',
    },
    type: 'dark'
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />

      <HomePage />
      {/* <Pricing/> */}
    </ThemeProvider>
  );
}

export default App;
