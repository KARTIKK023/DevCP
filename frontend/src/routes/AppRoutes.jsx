import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import ProtectedRoute from '../components/auth/ProtectedRoute'
import PublicOnlyRoute from '../components/auth/PublicOnlyRoute'

import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

import Dashboard from '../pages/Dashboard'
import Repositories from '../pages/Repositories'
import Meetings from '../pages/Meetings'
import Architecture from '../pages/Architecture'
import Decisions from '../pages/Decisions'
import Deployments from '../pages/Deployments'
import Settings from '../pages/Settings'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Landing />} />
      </Route>

      <Route element={<PublicOnlyRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="repositories" element={<Repositories />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="architecture" element={<Architecture />} />
          <Route path="decisions" element={<Decisions />} />
          <Route path="deployments" element={<Deployments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  )
}
