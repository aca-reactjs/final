import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import theme from './components/theme/Theme';
import { ProvideAuth } from './hooks/useAuth';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <ProvideAuth>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="signup" element={<Signup />} />
              <Route path="signin" element={<SignIn />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </ProvideAuth>
    </BrowserRouter>
  );
}

export default App;
