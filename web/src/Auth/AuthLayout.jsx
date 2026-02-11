import { Outlet } from 'react-router-dom';
import '../App.css'; 

const AuthLayout = () => {
  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2>MedLink</h2>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;