import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export function SimpleCodeBlock({ code, language }: { code: string; language?: string }) {
  const { isDark } = useTheme()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <div className={`${isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-100 border-stone-300'} rounded-lg border overflow-hidden`}>
        {language && (
          <div className={`flex items-center justify-between px-4 py-2 ${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-200/50 border-stone-300'} border-b`}>
            <span className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} font-mono`}>{language}</span>
          </div>
        )}
        
        <div className="relative">
          <pre className={`p-4 overflow-x-auto text-sm font-mono ${isDark ? 'text-stone-300' : 'text-stone-700'} leading-relaxed`}>
            <code>{code}</code>
          </pre>
          
          <button
            onClick={handleCopy}
            className={`absolute top-3 right-3 p-2 rounded-md ${isDark ? 'bg-stone-800 border-stone-700 hover:bg-stone-700' : 'bg-stone-200 border-stone-300 hover:bg-stone-300'} border opacity-0 group-hover:opacity-100 transition-all`}
            title="Copy code"
          >
            {copied ? (
              <Check className={`w-4 h-4 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
            ) : (
              <Copy className={`w-4 h-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`} />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}