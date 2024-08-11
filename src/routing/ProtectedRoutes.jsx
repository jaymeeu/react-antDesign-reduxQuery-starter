import PageLayout from '@/components/Layout/PageLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoutes = () => {

  const { user } = useAuth();

  const location = useLocation();
//   const { authLogin } = useContext(globalC);
// const authLogin = true

  // if (!user) {
  //   return null; // or loading indicator/spinner/etc
  // }

  return user ? <PageLayout><Outlet/></PageLayout>  : <Navigate to="/home" replace state={{ from: location }} />;
}