import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Layout from './components/Layout/Layout';
import theme from './components/theme/Theme';
import { ProvideAuth } from './hooks/useAuth';
import { paths } from './constants/paths';

import './App.css';
import RequireAuth from './components/RequireAuth/RequireAuth';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

const Home = lazy(() => import('./pages/Home/Home'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const AddProject = lazy(() => import('./pages/AddProject/AddProject'));
const AddStudent = lazy(() => import('./pages/AddStudent/AddStudent'));
const SingleProject = lazy(() => import('./pages/SingleProject/SingleProject'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <ProvideAuth>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path={paths.home} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={paths.signUp} element={<Signup />} />
                <Route path={paths.signIn} element={<SignIn />} />
                <Route
                  path={paths.addProject}
                  element={
                    <RequireAuth>
                      <AddProject />
                    </RequireAuth>
                  }
                />
                <Route
                  path={paths.projects}
                  element={
                    <RequireAuth>
                      <Projects />
                    </RequireAuth>
                  }
                />
                <Route
                  path={paths.singleProject}
                  element={
                    <RequireAuth>
                      <SingleProject />
                    </RequireAuth>
                  }
                />
                <Route
                  path={paths.addStudent}
                  element={
                    <RequireAuth>
                      <AddStudent />
                    </RequireAuth>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </ThemeProvider>
      </ProvideAuth>
    </BrowserRouter>
  );
}

export default App;
