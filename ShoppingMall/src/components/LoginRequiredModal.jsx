export default function LoginRequiredModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md text-center shadow-md">
        <p className="mb-4 text-gray-700">로그인이 필요한 서비스입니다.</p>
        <button onClick={onClose} className="text-violet-600 hover:underline">닫기</button>
      </div>
    </div>
  );
}