import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "@/const/common/routes.const";
import { HomePage } from "@/pages/home/HomePage";
import { LoginPage } from "@/pages/auth/LoginPage";
import { useAuthStore } from "@/store/auth.store";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = useAuthStore((s) => s.token);
  if (!token) {
    return <Navigate to={ROUTES.login} replace />;
  }
  return children;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route
        path={ROUTES.root}
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to={ROUTES.root} replace />} />
    </Routes>
  );
}
