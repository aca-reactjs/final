import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Layout from './components/Layout/Layout';
import theme from './components/theme/Theme';
import { ProvideAuth } from './hooks/useAuth';

import './App.css';

const Home = lazy(() => import('./pages/Home/Home'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const Signup = lazy(() => import('./pages/Signup/Signup'));

function App() {
  return (
    <BrowserRouter>
      <ProvideAuth>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:id" element={<SignIn />} />
              </Route>
            </Routes>
          </Suspense>
        </ThemeProvider>
      </ProvideAuth>
    </BrowserRouter>
  );
}

export default App;
