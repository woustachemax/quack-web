'use client'
import { Github, Linkedin, Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export default function Footer() {
  const { isDark, setIsDark } = useTheme()

  return (
    <footer className={`relative ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'} border border-t overflow-hidden transition-colors duration-300`}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-40">
        <h2 className={`text-[14rem] sm:text-[18rem] md:text-[22rem] lg:text-[28rem] font-black text-transparent whitespace-nowrap leading-none tracking-tighter`}
            style={{ 
              WebkitTextStroke: isDark ? '2px rgba(120, 113, 108, 0.3)' : '2px rgba(214, 211, 209, 0.5)',
              clipPath: 'inset(45% 0 0 0)',
            }}>
          QuackStack
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          <div className="space-y-4">
            <div className="flex items-center space-x-1 group cursor-pointer">
              <img src={`${isDark? '/logo.svg' :'light-logo.svg'}`} alt='Logo' className='h-8 w-8'/>
              <span className="text-xl font-medium">
                <span className={isDark ? 'text-stone-300' : 'text-stone-700'}>Quack</span>
                <span className="text-yellow-400">Stack</span>
              </span>
            </div>
            <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-sm leading-relaxed`}>
              Turn your codebase into a <span className="text-yellow-400">conversation</span>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={`${isDark ? 'text-stone-300' : 'text-stone-700'} font-medium text-sm`}>Links</h3>
            <div className="flex flex-col space-y-3">
              <a href="#features" className={`${isDark ? 'text-stone-500 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-500'} transition-colors text-sm`}>
                Features
              </a>
              <a href="/documentation" className={`${isDark ? 'text-stone-500 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-500'} transition-colors text-sm`}>
                Documentation
              </a>
              <a href="https://github.com/woustachemax/QuackStack" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-stone-500 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-500'} transition-colors text-sm`}>
                GitHub
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`${isDark ? 'text-stone-300' : 'text-stone-700'} font-medium text-sm`}>Connect</h3>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/woustachemax" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${isDark ? 'text-stone-500 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-500'} transition-colors`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sidthakkar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${isDark ? 'text-stone-500 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-500'} transition-colors`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/woustachemax7" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${isDark ? 'text-stone-500 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-500'} transition-colors`}
              >
                <XIcon />
              </a>
            </div>
           
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row justify-between items-center gap-4 ${isDark ? 'text-stone-600' : 'text-stone-500'} text-xs`}>
          <p>© {new Date().getFullYear()} QuackStack</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-red-500">❤️</span> by{' '}
            <a 
              href="https://www.siddharththakkar.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isDark ? 'text-stone-500 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-500'} transition-colors`}
            >
              Siddharth
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}