'use client'
import { useEffect, useState } from "react"

export const Features = () => {
  const [displayText, setDisplayText] = useState("")
  const [hasAnimated, setHasAnimated] = useState(false)

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
      title: "Code Analysis",
      cmd: "quackstack analyze ./src --explain",
      desc: "Dive deep into your entire codebase with AI-powered analysis that understands context, dependencies, and architectural patterns. Get instant explanations of complex logic, identify technical debt, and understand how every piece fits together without reading thousands of lines manually."
    },
    {
      title: "Semantic Search",
      cmd: "quackstack search --query 'auth middleware'",
      desc: "Stop searching for exact variable names and start finding what you actually mean. Our semantic search understands intent, not just keywords. Ask for 'authentication logic' and find all related middleware, helpers, and validation functions across your entire project, even if they're named differently."
    },
    {
      title: "Call Tracing",
      cmd: "quackstack trace --fn handleRequest",
      desc: "Map the complete execution flow of any function in seconds. See every caller, every dependency, and every side effect in a visual tree. Perfect for debugging complex systems, understanding legacy code, or preparing for refactors. No more grep-ing through files trying to piece together the puzzle."
    },
    {
      title: "Contextual QA",
      cmd: "quackstack ask --context local",
      desc: "Ask questions about your codebase and get answers that actually understand your architecture. QuackStack maintains full context of your project structure, coding patterns, and business logic to give you precise, actionable answers. It's like having a senior developer who's read your entire repo sitting next to you."
    }
  ]

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

                  <div className="flex items-center min-h-[100px] sm:min-h-[110px] px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm text-stone-300">
                    <div className="flex items-center flex-wrap">
                      <span className="text-green-400">quack@stack</span>
                      <span className="text-stone-400">:</span>
                      <span className="text-blue-400">~</span>
                      <span className="text-stone-400">$</span>
                      <span className="ml-2 break-all">{c.cmd}</span>
                    </div>
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