import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (auth.user === false) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
