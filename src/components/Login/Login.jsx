import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import waveImg from '../../Vector.png'; 
import circlesImg from '../../elips.png'; 

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  console.log('Компонент Login загружен');

  const handleLogin = () => {
    console.log('Кнопка нажата! Логин:', login, 'Пароль:', password);
    if (login && password) {
      console.log('Условие выполнено, сохраняем isAuth');
      localStorage.setItem('isAuth', 'true');
      console.log('isAuth сохранен:', localStorage.getItem('isAuth'));
      console.log('Пытаемся перейти на /rating');
      navigate('/rating');
    } else {
      console.log('Логин или пароль пустые');
      alert('Введите логин и пароль');
    }
  };

  return (
    <div className="login-container">
      <div className="circles-image-wrapper">
        <img src={circlesImg} alt="circles decoration" className="circles-bg" />
      </div>
      <div className="wave-wrapper">
        <img src={waveImg} alt="wave decoration" className="wave-bg" />
      </div>
      <div className="auth-form">
        <h2 className="auth-title">АВТОРИЗАЦИЯ</h2>
        <div className="input-field">
          <div className="icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="ЛОГИН" 
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="input-field">
          <div className="icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <input 
            type="password" 
            placeholder="ПАРОЛЬ" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="submit-btn" onClick={handleLogin}>ВОЙТИ</button>
      </div>

    </div>
  );
}

export default Login;