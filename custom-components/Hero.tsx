'use client'
import { useEffect, useState } from "react"
import { Github, Copy, Check, Terminal } from "lucide-react"
import {BackgroundRippleEffect} from "@/components/ui/background-ripple-effect"
import { useTheme } from "@/contexts/ThemeContext"
import { Reveal } from "@/custom-components/Reveal"

export const Hero = () => {
  const { isDark } = useTheme();
  const [mouse, setMouse] = useState({x:0, y:0});
  const [activeTab, setActiveTab] = useState<'npm' | 'pnpm' | 'bun'>('npm');
  const [hideTerminal, setHideTerminal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: event.clientX,
        y: event.clientY
      });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(()=>{
    const handle = setTimeout(() => {
      setHideTerminal(false);
    }, 7000);
    return () => clearTimeout(handle);  
  },[hideTerminal])

  const commands = {
    npm: 'npm install -g quackstack@latest',
    pnpm: 'pnpm install -g quackstack@latest',
    bun: 'bun add -g quackstack@latest'
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(commands[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className={`relative min-h-screen flex flex-col items-center justify-center text-center pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${isDark ? 'bg-stone-900' : 'bg-stone-50'} transition-colors duration-300`}>
      <BackgroundRippleEffect className="absolute inset-0 -z-10"/>

      <div className="z-10 mb-6 text-center flex flex-col items-center gap-5">
        <Reveal className={`inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.08em] px-3.5 py-1.5 rounded-lg border backdrop-blur-sm ${isDark ? 'text-neutral-300 bg-white/5 border-white/10' : 'text-stone-600 bg-white/70 border-stone-900/10'}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-yellow-400' : 'bg-yellow-500'}`} />
          Open source CLI
        </Reveal>

        <Reveal delay={80} className="max-w-2xl mx-auto">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight ${isDark ? 'text-neutral-200' : 'text-stone-800'}`}>
            Your{" "}
            <span className={`inline-block cursor-pointer ${isDark ? 'text-yellow-400' : 'text-yellow-500'} origin-center hover-tilt`}>
              cracked
            </span>{" "}
            unpaid intern for all things{" "}
            <span className={isDark ? 'text-yellow-400' : 'text-yellow-500'}>codebase related!</span>
          </h1>
          <p className={`mt-4 ${isDark ? 'text-neutral-400' : 'text-stone-600'} text-sm sm:text-base max-w-xl mx-auto`}>
            Your code&apos;s got something to say!
          </p>
        </Reveal>

        <Reveal delay={140} className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 justify-center max-w-md mx-auto mt-2">
          <button onClick={()=> window.location.href='/docs'}
            className={`group w-full sm:w-auto px-6 py-3 border text-sm sm:text-base rounded-xl font-medium flex items-center justify-center gap-2 shadow-sm transition-colors duration-150 ease-out active:scale-[0.98] ${isDark ? 'bg-yellow-400 border-yellow-400 text-stone-900 hover:bg-yellow-300' : 'bg-stone-900 border-stone-900 text-stone-50 hover:bg-stone-800'}`}>
            <span>Get Started</span>
            <Terminal className="w-4 h-4"/>
          </button>
          <button onClick={()=> window.open('https://github.com/woustachemax/QuackStack')}
            className={`group w-full sm:w-auto px-6 py-3 border text-sm sm:text-base rounded-xl font-medium flex items-center justify-center gap-2 backdrop-blur-sm transition-colors duration-150 ease-out active:scale-[0.98] ${isDark ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.08] text-neutral-200' : 'bg-white/60 border-stone-900/10 hover:border-stone-900/25 hover:bg-white/90 text-stone-700'}`}>
            <span>Contribute</span>
            <Github className="w-4 h-4"/>
          </button>
        </Reveal>

        <Reveal delay={200} className={`font-mono text-[11px] sm:text-xs flex items-center gap-2 ${isDark ? 'text-neutral-500' : 'text-stone-500'}`}>
          <span>Open source on GitHub</span>
          <span>·</span>
          <span>Works with npm, pnpm and bun</span>
        </Reveal>
      </div>

      <Reveal delay={260} className="relative z-10 w-full flex justify-center mt-10">
        <div className={`relative ${isDark ? 'bg-white/5' : 'bg-stone-800/5'} backdrop-blur-xl rounded-2xl p-1 sm:p-1.5 border ${isDark ? 'border-white/10' : 'border-stone-300/30'} shadow-2xl w-full max-w-[90%] sm:max-w-lg lg:max-w-2xl transition-all duration-500`}>
          <div className={`${isDark ? 'bg-stone-900' : 'bg-white'} backdrop-blur-sm rounded-xl overflow-hidden h-[104px] sm:h-[114px] lg:h-[124px] w-full border ${isDark ? 'border-white/10' : 'border-stone-200'} shadow-lg ${hideTerminal ? 'opacity-0 h-0 p-0 border-0 shadow-none' : ''} transition-all duration-500`}>
            <div className={`flex items-center justify-between px-3 sm:px-4 py-2.5 border-b ${isDark ? 'bg-stone-800/80 border-white/10' : 'bg-stone-100 border-stone-200'}`}>
              <div className="flex space-x-1.5">
                <div onClick={()=> setHideTerminal(!hideTerminal)}
                  className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center space-x-3 font-mono text-[11px] sm:text-xs">
                {["npm","pnpm","bun"].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as 'npm'|'pnpm'|'bun')}
                    className={`transition-colors ${activeTab === tab ? (isDark ? 'text-yellow-400' : 'text-yellow-600') : (isDark ? 'text-neutral-400 hover:text-yellow-400' : 'text-stone-500 hover:text-yellow-600')}`}>
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className={`flex items-center justify-between h-[calc(100%-46px)] px-3 sm:px-4 font-mono text-xs sm:text-sm ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
              <div className="flex items-center">
                <span className={isDark ? 'text-green-400' : 'text-green-600'}>quack@stack</span>
                <span className={isDark ? 'text-neutral-400' : 'text-stone-500'}>:</span>
                <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>~</span>
                <span className={isDark ? 'text-neutral-400' : 'text-stone-500'}>$</span>
                <span className="ml-2">{commands[activeTab]}</span>
              </div>
              <button
                onClick={handleCopy}
                className={`ml-4 p-1.5 rounded transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-stone-200'}`}
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
      </Reveal>
    </section>
  )
}