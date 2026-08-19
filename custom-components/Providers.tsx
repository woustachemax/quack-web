'use client'
import type { ComponentType, SVGProps } from "react"
import { OpenAI, Anthropic, Gemini, Grok, DeepSeek, Mistral, Moonshot } from "@lobehub/icons"
import { useTheme } from "@/contexts/ThemeContext"
import { PrimeIntellectIcon } from "@/custom-components/icons/PrimeIntellectIcon"

type ProviderEntry = {
  name: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const providers: ProviderEntry[] = [
  { name: "OpenAI", Icon: OpenAI },
  { name: "Anthropic", Icon: Anthropic },
  { name: "Gemini", Icon: Gemini },
  { name: "Grok", Icon: Grok },
  { name: "DeepSeek", Icon: DeepSeek },
  { name: "Mistral", Icon: Mistral },
  { name: "Prime Intellect", Icon: PrimeIntellectIcon },
  { name: "Moonshot AI", Icon: Moonshot },
]

const ProviderMark = ({ Icon, isDark }: ProviderEntry & { isDark: boolean }) => (
  <div className="group flex shrink-0 items-center justify-center px-6 sm:px-10 py-4 sm:py-5">
    <Icon
      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform duration-300 group-hover:scale-110 ${isDark ? 'text-stone-300/70' : 'text-stone-700/70'}`}
    />
  </div>
)

export const Providers = () => {
  const { isDark } = useTheme()
  const track = [...providers, ...providers, ...providers, ...providers]

  return (
    <section
      id="providers"
      className={`relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-stone-900' : 'bg-stone-50'} transition-colors duration-300`}
    >
      <div className="text-center mb-14 sm:mb-20">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-800'} mb-3`}>
          Bring Your Own{" "}
          <span className={isDark ? 'text-yellow-400' : 'text-yellow-500'}>AI</span>
        </h2>
        <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-sm sm:text-base max-w-2xl mx-auto`}>
          Plug in whichever provider you already have a key for, switch anytime
        </p>
      </div>

      <div className="relative overflow-hidden max-w-6xl mx-auto">
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-24 z-10 bg-gradient-to-r ${isDark ? 'from-stone-900' : 'from-stone-50'} to-transparent`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-24 z-10 bg-gradient-to-l ${isDark ? 'from-stone-900' : 'from-stone-50'} to-transparent`}
        />

        <div className="flex w-max animate-marquee">
          {track.map((p, i) => (
            <ProviderMark key={`${p.name}-${i}`} {...p} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Providers
