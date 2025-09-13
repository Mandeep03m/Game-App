import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavbarUser() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) => `hover:text-indigo-400 transition-colors ${isActive ? 'text-indigo-400' : ''}`
  const mobileLinkClass = ({ isActive }) => `block rounded px-3 py-2 hover:bg-gray-800 ${isActive ? 'text-indigo-400' : ''}`

  return (
    <nav className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-wide">Thronix</span>
              <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-semibold">Play</span>
            </NavLink>
          </div>

          <div className="hidden md:flex md:items-center md:gap-6">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/play" className={linkClass}>Play</NavLink>
            <NavLink to="/leaderboard" className={linkClass}>Leaderboard</NavLink>
            <NavLink to="/wallet" className={linkClass}>Wallet</NavLink>
            <NavLink to="/support" className={linkClass}>Support</NavLink>
          </div>

          <div className="hidden md:flex md:items-center md:gap-3">
            <NavLink to="/login" className="rounded-md border border-indigo-500 px-3 py-1.5 text-sm font-medium hover:bg-indigo-500/10 transition-colors">Log in</NavLink>
            <NavLink to="/signup" className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold hover:bg-indigo-500 transition-colors">Sign up</NavLink>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            <NavLink to="/" className={mobileLinkClass}>Home</NavLink>
            <NavLink to="/play" className={mobileLinkClass}>Play</NavLink>
            <NavLink to="/leaderboard" className={mobileLinkClass}>Leaderboard</NavLink>
            <NavLink to="/wallet" className={mobileLinkClass}>Wallet</NavLink>
            <NavLink to="/support" className={mobileLinkClass}>Support</NavLink>
            <div className="mt-2 flex gap-3">
              <NavLink to="/login" className="flex-1 rounded-md border border-indigo-500 px-3 py-2 text-sm font-medium hover:bg-indigo-500/10 text-center">Log in</NavLink>
              <NavLink to="/signup" className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold hover:bg-indigo-500 text-center">Sign up</NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavbarUser
