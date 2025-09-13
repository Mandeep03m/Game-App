import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavbarAdmin() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) => `hover:text-amber-400 transition-colors ${isActive ? 'text-amber-400' : ''}`
  const mobileLinkClass = ({ isActive }) => `block rounded px-3 py-2 hover:bg-gray-800 ${isActive ? 'text-amber-400' : ''}`

  return (
    <nav className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <NavLink to="/admin" className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-wide">Thronix</span>
              <span className="rounded-full bg-amber-600 px-2 py-0.5 text-xs font-semibold">Admin</span>
            </NavLink>
          </div>

          <div className="hidden md:flex md:items-center md:gap-6">
            <NavLink to="/admin/dashboard" className={linkClass}>Dashboard</NavLink>
            <NavLink to="/admin/games" className={linkClass}>Games</NavLink>
            <NavLink to="/admin/users" className={linkClass}>Users</NavLink>
            <NavLink to="/admin/transactions" className={linkClass}>Transactions</NavLink>
            <NavLink to="/admin/settings" className={linkClass}>Settings</NavLink>
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 rounded-md bg-gray-800 px-3 py-1.5 text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
              <span className="sr-only">Notifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 12 3a8.967 8.967 0 0 1-8.311 12.772c1.76.68 3.608 1.106 5.454 1.31m5.714 0a3 3 0 1 1-5.714 0m5.714 0a24.255 24.255 0 0 1-5.714 0" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-amber-600/30 ring-2 ring-amber-600" />
              <span className="text-sm text-gray-300">Admin</span>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-800">
          <div className="space-y-1 px-4 py-3">
            <NavLink to="/admin/dashboard" className={mobileLinkClass}>Dashboard</NavLink>
            <NavLink to="/admin/games" className={mobileLinkClass}>Games</NavLink>
            <NavLink to="/admin/users" className={mobileLinkClass}>Users</NavLink>
            <NavLink to="/admin/transactions" className={mobileLinkClass}>Transactions</NavLink>
            <NavLink to="/admin/settings" className={mobileLinkClass}>Settings</NavLink>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavbarAdmin
