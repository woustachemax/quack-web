'use client'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export function CodeBlock({ code, language = 'bash' }: { code: string; language?: string }) {
  const { isDark } = useTheme()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`relative ${isDark ? 'bg-white/5' : 'bg-stone-800/5'} backdrop-blur-xl rounded-lg sm:rounded-2xl p-1 sm:p-1.5 border ${isDark ? 'border-white/10 hover:border-stone-700' : 'border-stone-300/30 hover:border-stone-400'} shadow-xl transition-all duration-300`}>
      <div className={`${isDark ? 'bg-stone-900' : 'bg-stone-100'} backdrop-blur-sm rounded-lg overflow-hidden w-full border ${isDark ? 'border-white/10' : 'border-stone-300/30'} shadow-lg`}>
        <div className={`flex items-center justify-between px-3 sm:px-4 py-2 ${isDark ? 'bg-stone-800/80' : 'bg-stone-200/80'} backdrop-blur-sm border-b ${isDark ? 'border-white/10' : 'border-stone-300/30'}`}>
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className={`text-xs ${isDark ? 'text-stone-500' : 'text-stone-600'}`}>terminal</span>
        </div>

        <div className={`flex justify-between items-center min-h-[100px] sm:min-h-[110px] px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
          <div className="flex items-center flex-wrap">
            <span className={isDark ? 'text-green-400' : 'text-green-600'}>quack@stack</span>
            <span className={isDark ? 'text-stone-400' : 'text-stone-500'}>:</span>
            <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>~</span>
            <span className={isDark ? 'text-stone-400' : 'text-stone-500'}>$</span>
            <span className="ml-2 break-all">{code}</span>
          </div>
          <button
            onClick={handleCopy}
            className={`ml-4 p-1.5 ${isDark ? 'hover:bg-white/10' : 'hover:bg-stone-300/30'} rounded transition-colors`}
            title="Copy command"
          >
            {copied ? (
              <Check className={`w-4 h-4 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
            ) : (
              <Copy className={`w-4 h-4 ${isDark ? 'text-neutral-400 hover:text-yellow-400' : 'text-stone-500 hover:text-yellow-600'}`} />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}