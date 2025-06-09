
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://43.200.41.178:8080";

// 아이디(로그인ID) 중복확인
export async function checkUsername(loginId) {

  const response = await fetch(`${API_BASE_URL}/auth/signup-check-duplicate-id?loginId=${encodeURIComponent(loginId)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  // 200: 사용 가능, 409: 이미 존재
  if (response.status === 200) return { available: true };
  if (response.status === 409) return { available: false };
  throw new Error('중복확인 요청에 실패했습니다');
}

// 회원가입 유효성 검사 (필드명 맞춤)
export function validateSignUp({ nickname, loginId, password, password2, email }) {
  const errors = {};
  if (!nickname || !nickname.trim()) errors.nickname = '닉네임을 입력하세요.';
  if (!loginId || !loginId.trim()) errors.loginId = '아이디를 입력하세요.';
  else if (!/^[a-zA-Z0-9]{5,15}$/.test(loginId)) errors.loginId = '5~15자의 영문/숫자만 입력 가능합니다.';
  if (!password) errors.password = '비밀번호를 입력하세요.';
  else if (
    password.length < 8 ||
    !/[a-zA-Z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[^a-zA-Z0-9]/.test(password)
  ) errors.password = '사용불가: 8자 이상의 영문/숫자/특수문자를 입력해주세요';
  if (!password2) errors.password2 = '비밀번호를 한번 더 입력하세요.';
  else if (password !== password2) errors.password2 = '비밀번호가 일치하지 않습니다.';
  if (!email || !email.trim()) errors.email = '이메일을 입력하세요.';
  else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) errors.email = '이메일 형식이 올바르지 않습니다.';
  return errors;
}

// 회원가입 API
export async function signup({ nickname, loginId, password, email }) {
  const response = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ loginId, email, password, nickname }),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.message || '회원가입에 실패했습니다');
  }
  return response.json();
}