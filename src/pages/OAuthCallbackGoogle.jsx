import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuthCallbackGoogle = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      fetch(`https://your-api-domain.com/oauth/callback/google?code=${code}`, {
        method: 'GET',
        credentials: 'include',
      })
        .then(res => res.json())
        .then(data => {
          if (data.accessToken) {
            localStorage.setItem('access_token', data.accessToken);
          }
          navigate('/');
        })
        .catch(() => {
          alert('구글 로그인 실패');
          navigate('/login');
        });
    }
  }, [navigate]);
  return <div>구글 로그인 중...</div>;
};
export default OAuthCallbackGoogle;