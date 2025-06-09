import React, { createContext, useContext, useEffect, useState } from "react";
import { getToken, saveToken, removeToken } from "../api/auth"; // 이미 만든 토큰 함수 import

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());
  const [user, setUser] = useState(null);

  // 로그인: 토큰 저장 + 상태 업데이트
  const login = (token, userInfo = null) => {
    saveToken(token);
    setIsAuthenticated(true);
    setUser(userInfo || null);
  };

  // 로그아웃: 토큰 삭제 + 상태 초기화
  const logout = () => {
    removeToken();
    setIsAuthenticated(false);
    setUser(null);
  };

  // 마운트 시 토큰 있으면 인증 상태 true
  useEffect(() => {
    if (getToken()) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 커스텀 훅으로 사용
export function useAuth() {
  return useContext(AuthContext);
}
