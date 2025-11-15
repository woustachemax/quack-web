'use client'
import React from "react"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useTheme } from "@/contexts/ThemeContext"

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <nav className={`fixed top-0 w-full z-50 ${isDark ? 'bg-transparent' : 'bg-stone-50/80'} backdrop-blur-xl transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img src={`${isDark? '/logo.svg':'/light-logo.svg'}`} alt='Logo' className='h-6 w-6 sm:h-8 sm:w-8'/>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className={isDark ? 'text-neutral-300' : 'text-stone-700'}>Quack</span>
              <span className={isDark ? 'text-yellow-400' : 'text-yellow-500'}>Stack</span>
            </span>
          </div>

          <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
            <a href="#features" className={`${isDark ? 'text-neutral-300 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-500'} transition-colors duration-200 text-sm lg:text-base`}>
              Features</a>
            <a href="/documentation" className={`${isDark ? 'text-neutral-300 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-500'} transition-colors duration-200 text-sm lg:text-base`}>
              Documentation</a>
          </div>

          <button className={`md:hidden items-center ${isDark ? 'text-neutral-300 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-500'}`}
            onClick={() => setMobileMenuOpen((prev)=>!prev)}>
            { mobileMenuOpen ? (   
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (      
              <Menu className="w-5 h-5 sm:w-6 sm:h-6"/>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`mobile-menu-enter md:hidden flex flex-col space-y-4 px-4 pb-4 pt-2 ${isDark ? 'bg-stone-900/95 border-stone-700' : 'bg-stone-50/95 border-stone-300'} backdrop-blur-lg border-t transition-colors duration-300`}>
          <div className="px-4 py-4 sm:py-6  space-y-3 sm:space-y-4">
            <a onClick={() => setMobileMenuOpen(false)}
              href="#features" className={`block ${isDark ? 'text-neutral-300 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-500'} transition-colors duration-200 text-sm lg:text-base`}>
              Features</a>
            <a onClick={() => setMobileMenuOpen(false)}
              href="/documentation" className={`block ${isDark ? 'text-neutral-300 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-500'} transition-colors duration-200 text-sm lg:text-base`}>
              Documentation</a>
          </div>
        </div>
      )}
    </nav>
  )
}
