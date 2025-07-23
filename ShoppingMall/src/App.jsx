import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignIn from './pages/SignIn';
import KakaoRedirectPage from './pages/KakaoRedirect';  // 추가
import Navbar from './components/Navbar';
import CartPage from './pages/CartPage';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './contexts/CartContext';

import './index.css';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SignIn />} />

          {/* 카카오 콜백 라우트 */}
          <Route
            path="/auth/kakao/callback"
            element={<KakaoRedirectPage />}
          />

          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* 404 용 라우트 (선택) */}
          <Route
            path="*"
            element={<div style={{ padding: 20 }}>페이지를 찾을 수 없습니다.</div>}
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}
