import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { authAction } from '../actions/AuthAction';
import { dashboardAction } from '../actions/DashboardAction';
import { ApiService } from '../services/ApiService';

// Lazy Loading
const MainLayout = lazy(() => import('../layouts/MainLayout'));
const AuthLayout = lazy(() => import('../layouts/AuthLayout'));
const AdminLayout = lazy(() => import('../layouts/AdminLayout'));

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Products = lazy(() => import('../pages/Products'));
const About = lazy(() => import('../pages/About'));
const UserProfile = lazy(() => import('../pages/UserProfile'));
const AdminDashboard = lazy(() => import('../pages/AdminDashboard'));
const ProtectedRoute = lazy(() => import('../components/ProtectedRoute'));
const ErrorPage = lazy(() => import('../components/ErrorPage'));

const Loading = () => <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<Loading />}><MainLayout /></Suspense>,
    errorElement: <Suspense fallback={<Loading />}><ErrorPage /></Suspense>,
    children: [
      { path: '', element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'about', element: <About /> },
      { path: 'user/:id', element: <UserProfile /> },
      {
        path: 'dashboard',
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
        action: dashboardAction
      },
    ]
  },
  {
    path: '/auth',
    element: <Suspense fallback={<Loading />}><AuthLayout /></Suspense>,
    action: authAction,
    children: [
      { path: 'login', element: <Login /> }
    ]
  },
  {
    path: '/admin',
    element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
    children: [
      {
        path: '',
        element: <AdminDashboard />,
        loader: () => ApiService.getStats()
      }
    ]
  }
]);
