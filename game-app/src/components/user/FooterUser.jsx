import React from 'react'

function FooterUser() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-extrabold tracking-wide text-white">Thronix</span>
              <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-semibold text-white">Play</span>
            </div>
            <p className="mt-3 text-sm text-gray-400">Color prediction game. Predict smart, win more.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Game</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-white" href="#play">Play</a></li>
              <li><a className="hover:text-white" href="#rules">Rules</a></li>
              <li><a className="hover:text-white" href="#leaderboard">Leaderboard</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Account</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-white" href="#wallet">Wallet</a></li>
              <li><a className="hover:text-white" href="#history">History</a></li>
              <li><a className="hover:text-white" href="#profile">Profile</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-white" href="#faq">FAQ</a></li>
              <li><a className="hover:text-white" href="#contact">Contact</a></li>
              <li><a className="hover:text-white" href="#privacy">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row">
          <p className="text-xs text-gray-400">© {year} Thronix. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a aria-label="Twitter" className="hover:text-white" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M22 5.92c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.89-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.14 12.14 0 0 1 3.15 4.6a4.27 4.27 0 0 0 1.33 5.71 4.25 4.25 0 0 1-1.94-.54v.06a4.28 4.28 0 0 0 3.43 4.19 4.28 4.28 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97A8.58 8.58 0 0 1 2 19.54a12.11 12.11 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.19l-.01-.56A8.7 8.7 0 0 0 22 5.92z"/></svg>
            </a>
            <a aria-label="Discord" className="hover:text-white" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.317 4.369A19.791 19.791 0 0 0 16.886 3c-.162.286-.35.679-.479.985a18.27 18.27 0 0 0-4.814 0c-.129-.306-.317-.699-.479-.985a19.736 19.736 0 0 0-3.43 1.369C4.552 8.146 3.971 11.83 4.256 15.463a19.873 19.873 0 0 0 5.994 3.037c.288-.392.543-.809.76-1.245a12.938 12.938 0 0 1-1.2-.581c.103-.074.204-.151.302-.23a9.233 9.233 0 0 0 8.775 0c.098.079.199.156.302.23-.384.201-.786.378-1.2.531.217.436.472.853.76 1.245a19.87 19.87 0 0 0 5.994-3.037c.3-3.769-.516-7.417-2.622-11.094zM9.746 14.404c-.86 0-1.566-.79-1.566-1.762s.696-1.762 1.566-1.762c.878 0 1.583.79 1.566 1.762 0 .972-.696 1.762-1.566 1.762zm4.508 0c-.86 0-1.566-.79-1.566-1.762s.707-1.762 1.566-1.762c.878 0 1.583.79 1.566 1.762 0 .972-.688 1.762-1.566 1.762z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterUser
