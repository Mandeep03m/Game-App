import React from 'react'

function FooterAdmin() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-gray-400">© {year} Thronix Admin. Internal tools.</p>
          <div className="flex items-center gap-4 text-xs">
            <a className="hover:text-amber-400" href="#status">System Status</a>
            <a className="hover:text-amber-400" href="#docs">Docs</a>
            <a className="hover:text-amber-400" href="#changelog">Changelog</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterAdmin
