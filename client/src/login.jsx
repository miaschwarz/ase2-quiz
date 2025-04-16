// client/src/login.jsx
import { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx'; 

function Login() {
  const navigate = useNavigate();
  const { login, user } = useAuth(); 

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      login(data); // передаем данные в AuthContext (например, name и email)
      setShowWelcome(true);
      setTimeout(() => {
        setShowWelcome(false);
        navigate('/');
      }, 3000); // показываем приветствие 3 секунды, затем переходим на главную
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="app-container">
      {user && showWelcome && (
        <div className="user-name">
          👋 Welcome, {user.name}
        </div>
      )}

      <div className="register-box">
        <h2>Login</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="input-field"
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
