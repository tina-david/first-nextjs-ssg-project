import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <nav className="bg-slate-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider text-teal-400">
          <Link href="/">MY BLOG</Link>
        </div>

        <div className="space-x-4 space-x-reverse"> 
          <Link href="/" className="hover:text-teal-300 transition-colors p-6">
            home
          </Link>
        
        </div>
      </div>
    </nav>
  )
}

export default Navbar