import { ROUTES } from '@/const/common/routes.const'
import { useAuth } from '@/store/useAuth'
import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export function RequireAuth({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.root} replace />
  }

  return children
}
