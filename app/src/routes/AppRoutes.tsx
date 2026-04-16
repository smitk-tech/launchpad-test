import { ROUTES } from '@/const/common/routes.const'
import { LoginPage } from '@/pages/auth/LoginPage'
import { CorporationDirectoryPage } from '@/pages/corporations/CorporationDirectoryPage'
import { MobileDashboardPage } from '@/pages/dashboard/MobileDashboardPage'
import { RequireAuth } from '@/routes/RequireAuth'
import { Route, Routes } from 'react-router-dom'

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<LoginPage />} />
      <Route
        path={ROUTES.dashboard.root}
        element={
          <RequireAuth>
            <MobileDashboardPage />
          </RequireAuth>
        }
      />
      <Route
        path={ROUTES.corporations.directory}
        element={
          <RequireAuth>
            <CorporationDirectoryPage />
          </RequireAuth>
        }
      />
    </Routes>
  )
}
