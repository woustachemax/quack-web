'use client'
import React from "react"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useTheme } from "@/contexts/ThemeContext"

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, setIsDark } = useTheme();

  return (
    <nav className={`fixed top-0 w-full z-50 ${isDark ? 'bg-transparent' : 'bg-stone-50/80'} backdrop-blur-xl transition-colors duration-300`}>
      <style jsx>{`
        .theme-toggle-icon {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sun-icon {
          transition: all 0.5s cubic-bezier(0.5, 1.25, 0.75, 1.25);
        }

        .sun-rays {
          transition: opacity 0.3s cubic-bezier(0.25, 0, 0.3, 1), transform 0.5s cubic-bezier(0.5, 1.5, 0.75, 1.25);
          transform-origin: center;
          stroke-linecap: round;
        }

        .moon-icon {
          transition: all 0.5s cubic-bezier(0.5, 1.25, 0.75, 1.25);
        }
      `}</style>
      
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
            
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`transition-colors duration-200 ${isDark ? 'text-stone-400 hover:text-yellow-400' : 'text-yellow-500 hover:text-yellow-600'}`}
              aria-label="Toggle theme"
            >
              {!isDark ? (
                <svg className="theme-toggle-icon w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle className="sun-icon" cx="12" cy="12" r="5" fill="currentColor" />
                  <g className="sun-rays" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </g>
                </svg>
              ) : (
                <svg className="theme-toggle-icon w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path className="moon-icon" d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447Z" fill="currentColor"/>
                </svg>
              )}
            </button>
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
            
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`transition-colors duration-200 ${isDark ? 'text-stone-400 hover:text-yellow-400' : 'text-yellow-500 hover:text-yellow-600'}`}
              aria-label="Toggle theme"
            >
              {!isDark ? (
                <svg className="theme-toggle-icon w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle className="sun-icon" cx="12" cy="12" r="5" fill="currentColor" />
                  <g className="sun-rays" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </g>
                </svg>
              ) : (
                <svg className="theme-toggle-icon w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path className="moon-icon" d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447Z" fill="currentColor"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}