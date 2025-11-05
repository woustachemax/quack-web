import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function SimpleCodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <div className="bg-stone-900 rounded-lg border border-stone-800 overflow-hidden">
        {language && (
          <div className="flex items-center justify-between px-4 py-2 bg-stone-800/50 border-b border-stone-800">
            <span className="text-xs text-stone-400 font-mono">{language}</span>
          </div>
        )}
        
        <div className="relative">
          <pre className="p-4 overflow-x-auto text-sm font-mono text-stone-300 leading-relaxed">
            <code>{code}</code>
          </pre>
          
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 rounded-md bg-stone-800 border border-stone-700 opacity-0 group-hover:opacity-100 hover:bg-stone-700 transition-all"
            title="Copy code"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-stone-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}