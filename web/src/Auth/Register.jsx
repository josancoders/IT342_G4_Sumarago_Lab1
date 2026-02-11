import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //REMOVED: const [role, setRole] = useState('USER'); -> We don't need this state anymore
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // FIXED: Hardcoded role to 'USER' so everyone who registers is a Patient
        body: JSON.stringify({ email, password, role: 'USER' }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration Successful! Please Login.');
        navigate('/');
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (err) {
      setError('Failed to connect to server');
    }
  };

  return (
    <>
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ color: '#1f2937' }}>Create Account</h3>
      </div>

      {error && <div className="error-msg">{error}</div>}

      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Create a password"
          />
        </div>
        
        {/* DROPDOWN REMOVED HERE */}

        <button type="submit" className="btn-primary">
          Register
        </button>
      </form>

      <div className="auth-footer">
        Already have an account? <Link to="/">Login here</Link>
      </div>
    </>
  );
};

export default Register;