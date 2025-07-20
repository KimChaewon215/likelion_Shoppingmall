import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import { fetchAllProducts, searchProducts } from '../apis/products';
import { addToCart as apiAddToCart } from '../apis/cart';
import { useAuth } from '../contexts/AuthContext';
import LoginRequiredModal from '../components/LoginRequiredModal';

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  const searchQuery = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = searchQuery
          ? await searchProducts(searchQuery)
          : await fetchAllProducts();
        console.log('API 응답 데이터: ', result);
        setProducts(Array.isArray(result) ? result : []);
      } catch (err) {
        console.error('상품 불러오기 실패:', err);
        setProducts([]);
      }
    };

    loadProducts();
  }, [searchQuery]);

  const handleAddToCart = async (product) => {
    if (!isLoggedIn) return setShowLoginModal(true);
    try {
      await apiAddToCart(product.id, 1);
      alert('장바구니에 추가되었습니다!');
    } catch (err) {
      alert('장바구니 추가 실패');
    }
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold">Welcome to ShopMall</h2>
        <p className="text-sm text-gray-500">Discover our latest products and deals</p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Featured Products</h3>
        <a href="#" className="text-sm text-violet-600 hover:underline">View All</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.isArray(products) && products.map((product) => { 
          return (
          <Card
            key={product.id}
            {...product}
            onAddToCart={() => handleAddToCart(product)}
          />
          );
        })}
      </div>

      {showLoginModal && (
        <LoginRequiredModal onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
};

export default MainPage;