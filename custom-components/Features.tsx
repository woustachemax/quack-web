'use client'
import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"

export const Features = () => {
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
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-stone-900 backdrop-blur-sm"
    >
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-stone-300/70 mb-3">
          <span className="text-yellow-400/70">
            {displayText}
          </span>
          <span className={`inline-block w-0.5 h-8 sm:h-10 bg-yellow-400 ml-1 ${displayText.length === fullText.length ? 'animate-pulse' : ''}`}></span>
        </h2>
        <p className="text-stone-400/70 text-sm sm:text-base max-w-xl mx-auto">
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
                      <span className="ml-2 break-all">{c.cmd}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(c.cmd, i)}
                      className="ml-4 p-1.5 hover:bg-white/10 rounded transition-colors "
                      title="Copy command"
                    >
                      {copied === i ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-neutral-400 hover:text-yellow-400" />
                      )}
                    </button>

                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-3">
              <h3 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">
                {c.title}
              </h3>
              <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">
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