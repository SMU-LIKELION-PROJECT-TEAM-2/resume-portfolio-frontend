import { create } from "zustand";
import { getToken, saveToken, removeToken } from "../api/auth";

const useAuthStore = create((set) => ({
  isAuthenticated: !!getToken(),
  user: null,
  login: (token, userInfo = null) => {
    saveToken(token);
    set({ isAuthenticated: true, user: userInfo });
  },
  logout: () => {
    removeToken();
    set({ isAuthenticated: false, user: null });
  },
}));

export default useAuthStore;