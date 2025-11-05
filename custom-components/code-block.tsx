import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function CodeBlock({ code, language = 'bash' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative bg-white/5 backdrop-blur-xl rounded-lg sm:rounded-2xl p-1 sm:p-1.5 border border-white/10 shadow-xl transition-all duration-300 hover:border-stone-700">
      <div className="bg-stone-900 backdrop-blur-sm rounded-lg overflow-hidden w-full border border-white/10 shadow-lg">
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-stone-800/80 backdrop-blur-sm border-b border-white/10">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs text-stone-500">terminal</span>
        </div>

        <div className="flex justify-between items-center min-h-[100px] sm:min-h-[110px] px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm text-stone-300">
          <div className="flex items-center flex-wrap">
            <span className="text-green-400">quack@stack</span>
            <span className="text-stone-400">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-stone-400">$</span>
            <span className="ml-2 break-all">{code}</span>
          </div>
          <button
            onClick={handleCopy}
            className="ml-4 p-1.5 hover:bg-white/10 rounded transition-colors"
            title="Copy command"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-neutral-400 hover:text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}