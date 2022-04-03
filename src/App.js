import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Backdrop, CircularProgress } from '@mui/material';

import Layout from './components/Layout/Layout';
import theme from './components/theme/Theme';
import { ProvideAuth } from './hooks/useAuth';

import './App.css';
import { paths } from './constants/paths';

const Home = lazy(() => import('./pages/Home/Home'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const AddProject = lazy(() => import('./pages/Home/AddProject/AddProject'));

function App() {
  return (
    <BrowserRouter>
      <ProvideAuth>
        <ThemeProvider theme={theme}>
          <Suspense
            fallback={
              <Backdrop
                open
                sx={{
                  bgcolor: 'background.paper',
                }}
              >
                <CircularProgress color="secondary" />
              </Backdrop>
            }
          >
            <Routes>
              <Route path={paths.home} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={paths.signUp} element={<Signup />} />
                <Route path={paths.signIn} element={<SignIn />} />
                <Route path={paths.projects} element={<Projects />} />
                <Route path={paths.singleProject} element={<SignIn />} />
                <Route path={paths.addProject} element={<AddProject />} />
              </Route>
            </Routes>
          </Suspense>
        </ThemeProvider>
      </ProvideAuth>
    </BrowserRouter>
  );
}

export default App;
