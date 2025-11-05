'use client'
import { useEffect, useState } from "react"
import { Sparkles, Github, Copy, Check, Terminal } from "lucide-react"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"

export const Hero = () => {
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
    npm: 'npm install -g quackstack',
    pnpm: 'pnpm add -g quackstack',
    bun: 'bun add -g quackstack'
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(commands[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center pt-32 sm:pt-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <BackgroundRippleEffect className="absolute inset-0 -z-10"/>
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #facc15 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 opacity-6 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #eab308 0%, transparent 70%)' }}
      />

      <div className="z-10 mb-6 text-center space-y-2">
        <div className="inline-flex items-center justify-center px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm shadow-sm hover:border-yellow-400/50 transition-all duration-300">
          <Sparkles className="w-3 h-3 mr-1 text-yellow-400" />
          <span>Introducing QuackStack</span>
        </div>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-300/70">
            Your{" "}
            <span className="inline-block text-yellow-400/70 origin-center animate-tilt">
              cracked
            </span>{" "}
            unpaid intern for all things{" "}
            <span className="text-yellow-400/60">codebase related!</span>
          </h1>
          <p className="mt-3 text-neutral-200/70 text-sm sm:text-base max-w-xl mx-auto">
            Your code's got something to say!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 justify-center max-w-md mx-auto mt-4">
          <button onClick={()=> window.location.href='/documentation'}
          className="group w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400/20 hover:bg-yellow-400/30 border border-yellow-400/30 hover:border-yellow-400/50 text-yellow-300 text-sm sm:text-base rounded-lg font-medium flex items-center justify-center space-x-1 shadow-sm backdrop-blur-sm transition-all duration-300">
            <span>Get Started</span>
            <Terminal className="w-4 h-4"/>
          </button>
          <button onClick={()=> window.open('https://github.com/woustachemax/QuackStack')}
          className="group w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-stone-800/50 hover:bg-stone-800/70 border border-stone-700 hover:border-stone-600 text-neutral-200 text-sm sm:text-base rounded-lg font-medium flex items-center justify-center space-x-1 shadow-sm backdrop-blur-sm transition-all duration-300">
            <span>Contribute</span>
            <Github className="w-4 h-4"/>
          </button>
        </div>
      </div>

      <div className={`relative z-10 w-full flex justify-center mt-10`}>
        <div className={`relative bg-white/5 backdrop-blur-xl rounded-lg sm:rounded-2xl p-1 sm:p-1.5 border border-white/10 shadow-xl w-full max-w-[90%] sm:max-w-lg lg:max-w-2xl 
             transition-all duration-500`}>
          <div className={`bg-stone-900 backdrop-blur-sm rounded-lg overflow-hidden h-[100px] sm:h-[110px] lg:h-[120px] w-full border border-white/10 shadow-lg ${hideTerminal ? 'opacity-0 h-0 p-0 border-0 shadow-none' : ''} transition-all duration-500`}> 
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-stone-800/80 backdrop-blur-sm border-b border-white/10">
              <div className="flex space-x-1.5">
                <div onClick={()=> setHideTerminal(!hideTerminal)}
                className={`w-3 h-3 rounded-full bg-red-500 cursor-pointer`}></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm">
                {["npm","pnpm","bun"].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab as 'npm'|'pnpm'|'bun')}
                    className={`transition-colors ${activeTab === tab ? 'text-yellow-400' : 'text-neutral-400 hover:text-yellow-400'}`}>
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between h-[calc(100%-48px)] px-3 sm:px-4 font-mono text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center">
                <span className="text-green-400">quack@stack</span>
                <span className="text-neutral-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-neutral-400">$</span>
                <span className="ml-2">{commands[activeTab]}</span>
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
      </div>
    </section>
  )
}