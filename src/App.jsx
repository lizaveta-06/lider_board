import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Rating from './components/Rating/Rating';

function App() {
  // Безопасная проверка авторизации (работает на всех устройствах)
  const getAuthStatus = () => {
    try {
      const isAuth = localStorage.getItem('isAuth');
      return isAuth === 'true';
    } catch (error) {
      console.error('Ошибка доступа к localStorage:', error);
      return false;
    }
  };

  const isAuth = getAuthStatus();

  console.log('App: isAuth =', isAuth); // Для отладки

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/rating" 
          element={isAuth ? <Rating /> : <Navigate to="/login" replace />} 
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;