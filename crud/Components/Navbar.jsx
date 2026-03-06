import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg bg-white/40 border-b border-white/20 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center h-[80px] px-8">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
          MyShop
        </h1>

        <ul className="flex gap-8 text-lg font-medium">

          <li>
            <Link href="/Product" className="hover:text-green-600 text-black transition">
              Products
            </Link>
          </li>

          <li>
            <Link href="/Login" className="hover:text-green-600 text-black transition">
              Login
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar