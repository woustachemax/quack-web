'use client'
import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

export const Features = () => {
  const { isDark } = useTheme()
  const [displayText, setDisplayText] = useState("")
  const [hasAnimated, setHasAnimated] = useState(false)
  const [copied, setCopied] = useState<number | null>(null)
  
  const fullText = "What QuackStack does?"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            setDisplayText("")
          }
        })
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('features')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (hasAnimated && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1))
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [displayText, hasAnimated])

  const commands = [
    {
      title: "Interactive Code Chat",
      cmd: "quack",
      desc: "Start a conversational session with your codebase. Ask questions in natural language and get instant answers with relevant code snippets. Understanding complex logic, finding implementations, or exploring unfamiliar code becomes as easy as having a conversation. The REPL stays open until you're done, maintaining full context across multiple questions."
    },
    {
      title: "Universal AI Context Generation",
      cmd: "quack --context",
      desc: "Generate intelligent context files for all major AI coding assistants in one command. Creates .cursorrules, .windsurfrules, .clinerules, and more with deep architectural insights about your project. Your AI tools will understand your codebase structure, patterns, dependencies, and design decisions without you having to explain anything."
    },
    {
      title: "Live Context Sync",
      cmd: "quack --watch",
      desc: "Keep your AI assistants synchronized with your codebase in real-time. Automatically detects file changes and regenerates context files so Cursor, Windsurf, and other tools always have up-to-date knowledge of your project. Run it in the background during development and never worry about stale context again."
    },
    {
      title: "Full Command Reference",
      cmd: "quack --help",
      desc: "See all available commands, flags, and options at a glance. Get quick documentation on usage patterns, example queries, and configuration options without leaving your terminal. Perfect for discovering advanced features or refreshing your memory on command syntax when you need it."
    }
  ]

  const handleCopy = async(cmd:string, index: number)=>{
    await navigator.clipboard.writeText(cmd)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section
      id="features"
      className={`relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-stone-900' : 'bg-stone-50'} backdrop-blur-sm transition-colors duration-300`}
    >
      <div className="text-center mb-12 sm:mb-16">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold ${isDark ? 'text-stone-300/70' : 'text-stone-700/70'} mb-3`}>
          <span className={isDark ? 'text-yellow-400/70' : 'text-yellow-500/80'}>
            {displayText}
          </span>
          <span className={`inline-block w-0.5 h-8 sm:h-10 ${isDark ? 'bg-yellow-400' : 'bg-yellow-500'} ml-1 ${displayText.length === fullText.length ? 'animate-pulse' : ''}`}></span>
        </h2>
        <p className={`${isDark ? 'text-stone-400/70' : 'text-stone-600/70'} text-sm sm:text-base max-w-xl mx-auto`}>
          A few commands that make your repo talk back
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {commands.map((c, i) => (
          <div 
            key={i} 
            className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-center ${
              i % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full lg:w-1/2">
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
                      <span className="ml-2 break-all">{c.cmd}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(c.cmd, i)}
                      className={`ml-4 p-1.5 ${isDark ? 'hover:bg-white/10' : 'hover:bg-stone-300/30'} rounded transition-colors`}
                      title="Copy command"
                    >
                      {copied === i ? (
                        <Check className={`w-4 h-4 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                      ) : (
                        <Copy className={`w-4 h-4 ${isDark ? 'text-neutral-400 hover:text-yellow-400' : 'text-stone-500 hover:text-yellow-600'}`} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-3">
              <h3 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>
                {c.title}
              </h3>
              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features