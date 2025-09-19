import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/main-layout';
import AnalysisPage from './pages/analysis';
import ForgotPasswordPage from './pages/auth/forgot-password';
import LoginPage from './pages/auth/login';
import OnboardingPage from './pages/auth/onboarding';
import RegisterPage from './pages/auth/register';
import DashboardPage from './pages/dashboard';
import ProfilePage from './pages/profile';
import ProjectsPage from './pages/projects';
import NewProjectPage from './pages/projects/new';
import ProjectIdPage from './pages/projects/[id]';
import EditProjectPage from './pages/projects/edit/[id]';
import ReportsPage from './pages/reports';
import SustainabilityPage from './pages/sustainability';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'analysis',
        element: <AnalysisPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'projects/new',
        element: <NewProjectPage />,
      },
      {
        path: 'projects/:id',
        element: <ProjectIdPage />,
      },
      {
        path: 'projects/edit/:id',
        element: <EditProjectPage />,
      },
      {
        path: 'reports',
        element: <ReportsPage />,
      },
      {
        path: 'sustainability',
        element: <SustainabilityPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/onboarding',
    element: <OnboardingPage />,
  },
]);
