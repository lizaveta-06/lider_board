import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Rating from './components/Rating/Rating';

function App() {
  // Проверяем, авторизован ли пользователь
  const isAuth = localStorage.getItem('isAuth') === 'true';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/rating" 
          element={isAuth ? <Rating /> : <Navigate to="/login" />} 
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;