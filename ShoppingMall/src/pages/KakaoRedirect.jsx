import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import axios from 'axios';

export default function KakaoRedirectPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setTokens } = useAuthStore();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log('카카오 인가 코드:', code);

    if (!code) {
      alert('인가 코드가 없습니다.');
      return navigate('/login');
    }

    (async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/auth/kakao`,
          { code }
        );

        const { accessToken, refreshToken } = res.data;
        console.log('토큰 응답:', res.data);

        setTokens(accessToken, refreshToken);
        navigate('/');
      } catch (err) {
        console.error('로그인 실패:', err);
        alert('로그인에 실패했습니다.');
        navigate('/login');
      }
    })();
  }, [searchParams, navigate, setTokens]);

  return <div>로딩 중…</div>;
}
