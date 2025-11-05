'use client'
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className=" fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl
    ">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
           <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img src='/logo.svg' alt='Logo' className='h-6 w-6 sm:h-8 sm:w-8'/>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-neutral-300">Quack</span>
              <span className="text-yellow-400">Stack</span>
            </span>
          </div>

          <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
            <a href="#features" className="text-neutral-300 hover:text-yellow-400 transition-colors duration-200 text-sm lg:text-base">
              Features</a>
              <a href="/documentation" className="text-neutral-300 hover:text-yellow-400 transition-colors duration-200 text-sm lg:text-base">
              Documentation</a>
          </div>
            <button className="md:hidden hover:text-yellow-400 items-center text-neutral-300"
               onClick={() => setMobileMenuOpen((prev)=>!prev)}>
      { mobileMenuOpen ? (   
        <X className="w-5 h-5 sm:w-6 sm:h-6 hover:text-yellow-400" />
      ) : (      
     <Menu className="w-5 h-5 sm:w-6 sm:h-6 hover:text-yellow-400"/>
       )}  </button>
          </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu-enter md:hidden flex flex-col space-y-4 px-4 pb-4 pt-2 bg-stone-900/95 backdrop-blur-lg border-t border-stone-700">
          <div className="px-4 py-4 sm:py-6  space-y-3 sm:space-y-4">
            <a onClick={() => setMobileMenuOpen(false)}
            href="#features" className="block text-neutral-300 hover:text-yellow-400 transition-colors duration-200 text-sm lg:text-base">
              Features</a>
            <a onClick={() => setMobileMenuOpen(false)}
            href="/documentation" className=" block text-neutral-300 hover:text-yellow-400 transition-colors duration-200 text-sm lg:text-base">
              Documentation</a>
          </div>
        </div>
      )}

    </nav>
  )
}