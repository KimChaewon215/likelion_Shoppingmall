import React from 'react';
import kakaoimg from '../assets/Vector.svg';

const KAKAO_KEY = import.meta.env.VITE_KAKAO_API_KEY;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

export default function SignIn() {
  const handleKaKaoLogin = () => {
    const kakaoAuthURL =
      `https://kauth.kakao.com/oauth/authorize` +
      `?client_id=${KAKAO_KEY}` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
      `&response_type=code`;
    window.location.href = kakaoAuthURL;
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="signin-form">
          <p className="signin-message">
            카카오톡으로 간편하게 로그인하고<br />
            서비스를 이용해보세요!
          </p>

          <button className="kakao-btn" onClick={handleKaKaoLogin}>
            <div className="kakao-btn-message">카카오톡으로 로그인</div>
            <img src={kakaoimg} alt="kakao" />
          </button>
        </div>
      </div>
    </div>
  );
}
