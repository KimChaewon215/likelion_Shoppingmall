import {useNavigate} from 'react-router-dom';
import iconX from '../assets/icon-x.svg';

export default function LoginRequiredModal({ onClose }) {

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-md text-center shadow-md">
        <img 
          src={iconX} 
          onClick={onClose} 
          className="absolute top-2 right-2 text-violet-600 hover:underline w-[16px] h-[16px]" 
          alt="닫기" 
          />
        <p className="mb-4 text-gray-700">로그인이 필요한 서비스입니다.</p>
        <button
        onClick={() => {
          onClose();
          navigate('/signin');
        }} 
        className="w-full py-2 rounded bg-[#6B21A8] text-white hover:bg-[#5A189A]"
        >
          로그인하러 가기
        </button>
      </div>
    </div>
  );
}