import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://43.200.41.178:8080";

const OAuthCallbackKakao = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      fetch(`${API_BASE_URL}/auth/kakao/callback?code=${code}`, {
        method: 'GET',
        credentials: 'include',
      })
        .then(async res => {
          if (!res.ok) throw new Error('카카오 로그인 실패');
          return res.json();
        })
        .then(data => {
          if (data.token?.accessToken) {
            localStorage.setItem('access_token', data.token.accessToken);
            localStorage.setItem('refresh_token', data.token.refreshToken);
            localStorage.setItem('nickname', data.nickname);
          }
          navigate('/');
        })
        .catch(() => {
          alert('카카오 로그인 실패');
          navigate('/login');
        });
    }
  }, [navigate]);

  return <div>카카오 로그인 중...</div>;
};

export default OAuthCallbackKakao;