import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import login from '../apis/auth';
import { useAuthStore } from '../stores/authStore';

export default function KakaoRedirectPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setTokens } = useAuthStore();

  useEffect(() => {
    const code = searchParams.get('code');
    console.log('카카오 인가 코드:', code);

    if (!code) {
      alert('인가 코드가 없습니다.');
      return navigate('/login');
    }

    (async () => {
      try {
        const { accessToken, refreshToken } = await login(code);
        setTokens(accessToken, refreshToken);
        navigate('/');
      } catch (err) {
        console.error(err);
        alert('로그인에 실패했습니다.');
        navigate('/login');
      }
    })();
  }, [searchParams, navigate, setTokens]);

  return <div>로딩 중…</div>;
}
