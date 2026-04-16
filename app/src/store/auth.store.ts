import { create } from "zustand";

const PERSIST_TOKEN_KEY = "auth_token";
const SESSION_TOKEN_KEY = "auth_token_session";

type AuthState = {
  token: string | null;
  setToken: (token: string | null, options?: { remember?: boolean }) => void;
  clearSession: () => void;
};

function readStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  const persisted = window.localStorage.getItem(PERSIST_TOKEN_KEY);
  if (persisted) return persisted;
  return window.sessionStorage.getItem(SESSION_TOKEN_KEY);
}

export const useAuthStore = create<AuthState>((set) => ({
  token: readStoredToken(),
  setToken: (token, options) => {
    window.localStorage.removeItem(PERSIST_TOKEN_KEY);
    window.sessionStorage.removeItem(SESSION_TOKEN_KEY);

    if (token) {
      if (options?.remember) {
        window.localStorage.setItem(PERSIST_TOKEN_KEY, token);
      } else {
        window.sessionStorage.setItem(SESSION_TOKEN_KEY, token);
      }
    }
    set({ token });
  },
  clearSession: () => {
    window.localStorage.removeItem(PERSIST_TOKEN_KEY);
    window.sessionStorage.removeItem(SESSION_TOKEN_KEY);
    set({ token: null });
  },
}));
