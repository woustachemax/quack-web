'use client'
import { Github, Linkedin, Twitter } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="relative bg-stone-900 border border-t border-stone-800 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-40">
        <h2 className="text-[14rem] sm:text-[18rem] md:text-[22rem] lg:text-[28rem] font-black text-transparent whitespace-nowrap leading-none tracking-tighter"
            style={{ 
              WebkitTextStroke: '2px rgba(120, 113, 108, 0.3)',
              clipPath: 'inset(45% 0 0 0)',
            }}>
          QuackStack
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          <div className="space-y-4">
            <div className="flex items-center space-x-1">
              <img src='/logo.svg' alt='Logo' className='h-8 w-8'/>
              <span className="text-xl font-medium">
                <span className="text-stone-300">Quack</span>
                <span className="text-yellow-400">Stack</span>
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Turn your codebase into a <span className="text-yellow-400">conversation</span>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-stone-300 font-medium text-sm">Links</h3>
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-stone-500 hover:text-yellow-400 transition-colors text-sm">
                Features
              </a>
              <a href="/documentation" className="text-stone-500 hover:text-yellow-400 transition-colors text-sm">
                Documentation
              </a>
              <a href="https://github.com/woustachemax/QuackStack" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-yellow-400 transition-colors text-sm">
                GitHub
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-stone-300 font-medium text-sm">Connect</h3>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/woustachemax/QuackStack" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-yellow-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sidthakkar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-yellow-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/woustachemax7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-yellow-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-stone-600 text-xs">
          <p>© {new Date().getFullYear()} QuackStack</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-red-500">❤️</span> by{' '}
            <a 
              href="https://www.siddharththakkar.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-yellow-400 transition-colors"
            >
              Siddharth
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}