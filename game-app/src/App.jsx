import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserRoute from './routes/UserRoute'
import AdminRoute from './routes/AdminRoute'
import HomeUser from './pages/user/HomeUser'
import HomeAdmin from './pages/admin/HomeAdmin'
import Dashboard from './pages/admin/Dashboard'
import Games from './pages/admin/Games'
import Users from './pages/admin/Users'
import Transaction from './pages/admin/Transaction'
import Settings from './pages/admin/Settings'
import Wallet from './pages/user/Wallet'
import Support from './pages/user/Support'
import Play from './pages/user/Play'
import Leadboard from './pages/user/Leadboard'
import UserLogin from './pages/user/Login'
import UserSignup from './pages/user/Signup'
import AdminLogin from './pages/admin/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserRoute />}>
          <Route path="/" element={<HomeUser />} />
          <Route path="/play" element={<Play />} />
          <Route path="/leaderboard" element={<Leadboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
        </Route>

        <Route path="/admin" element={<AdminRoute />}>
          <Route index element={<HomeAdmin />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="games" element={<Games />} />
          <Route path="users" element={<Users />} />
          <Route path="transactions" element={<Transaction />} />
          <Route path="settings" element={<Settings />} />
          <Route path="login" element={<AdminLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App