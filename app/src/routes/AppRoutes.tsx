import { ROUTES } from '@/const/common/routes.const'
import { LoginPage } from '@/pages/auth/LoginPage'
import { MobileDashboardPage } from '@/pages/dashboard/MobileDashboardPage'
import { CorporationDirectoryPage } from '@/pages/corporation/CorporationDirectoryPage'
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
        path={ROUTES.corporation.directory}
        element={
          <RequireAuth>
            <CorporationDirectoryPage />
          </RequireAuth>
        }
      />
    </Routes>
  )
}
