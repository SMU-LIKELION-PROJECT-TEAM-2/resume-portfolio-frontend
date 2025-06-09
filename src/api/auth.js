const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://43.200.41.178:8080";

// 로그인 유효성 검사 (errors 객체 반환)
export function validateLogin({ loginId, password }) {
  const errors = {};
  if (!loginId || !loginId.trim()) errors.loginId = '아이디 입력이 필요합니다';
  if (!password || !password.trim()) errors.password = '비밀번호 입력이 필요합니다';
  return errors;
}

// 로그인 API (loginId, password로 요청)
export async function loginApi({ loginId, password }) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ loginId, password }),
    credentials: 'include',
  });
  if (!response.ok) throw new Error('아이디 또는 비밀번호가 올바르지 않습니다');
  return response.json();
}

// 토큰 저장/조회/삭제 (JWT 기반)
const TOKEN_KEY = 'access_token';
export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}