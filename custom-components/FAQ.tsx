'use client'
import { useState } from "react"
import { useTheme } from "@/contexts/ThemeContext"

export const FAQ = () => {
  const { isDark } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Do I need to upload my code somewhere?",
      answer: "No! QuackStack generates embeddings entirely locally on your machine. Your code never leaves your computer during indexing. Only your natural language queries (like 'where is auth handled?') and small relevant code snippets are sent to the AI provider for generating conversational answers."
    },
    {
      question: "What do I need to get started?",
      answer: "You need: (1) A PostgreSQL database - free options like Neon or Supabase work great, and (2) ONE API key for conversational answers (OpenAI, Claude, Gemini, DeepSeek, or Mistral). Gemini has a free tier! Embeddings are generated locally with no API calls."
    },
    {
      question: "How long does indexing take?",
      answer: "First-time indexing depends on your codebase size. A typical project (1000-5000 files) takes 2-5 minutes. After that, only changed files are re-indexed, making updates nearly instant. Large monorepos may take 10-15 minutes initially."
    },
    {
      question: "How is this different from GitHub Copilot or Cursor?",
      answer: "Copilot and Cursor suggest code based on immediate context. QuackStack gives them FULL codebase understanding. It's complementary - QuackStack generates the .cursorrules file that makes Cursor smarter about YOUR specific project, patterns, and architecture."
    },
    {
      question: "Can I use it with multiple projects?",
      answer: "Yes! Each project gets its own isolated namespace in the database (based on directory name). Just run 'quack' in any project folder and it automatically manages separate indexes. Switch between projects freely without conflicts."
    },
    {
      question: "What are the costs?",
      answer: "QuackStack itself is 100% free and open source. Your only costs are: (1) AI provider API usage for conversational answers (Gemini has a free tier!), and (2) database hosting (Neon/Supabase offer free tiers). Most developers spend $0-5/month depending on usage."
    }
  ] 

  return (
    <section className={`relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-stone-900' : 'bg-stone-50'} transition-colors duration-300`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold ${isDark ? 'text-neutral-200' : 'text-stone-800'} mb-3`}>
            Frequently Asked <span className={isDark ? 'text-yellow-400' : 'text-yellow-500'}>Questions</span>
          </h2>
          <p className={`${isDark ? 'text-neutral-400' : 'text-stone-600'} text-sm sm:text-base`}>
            Everything you need to know about QuackStack
          </p>
        </div>

        <div className={`border-t ${isDark ? 'border-white/10' : 'border-stone-900/10'}`}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`border-b ${isDark ? 'border-white/10' : 'border-stone-900/10'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-5 py-5 sm:py-6 text-left"
                >
                  <h3 className={`text-base sm:text-lg font-medium tracking-tight ${isDark ? 'text-neutral-200' : 'text-stone-800'}`}>
                    {faq.question}
                  </h3>
                  <span className="relative w-[18px] h-[18px] shrink-0">
                    <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[1.6px] ${isDark ? 'bg-yellow-400' : 'bg-yellow-600'}`} />
                    <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.6px] h-3 ${isDark ? 'bg-yellow-400' : 'bg-yellow-600'} transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className={`${isDark ? 'text-neutral-400' : 'text-stone-600'} text-sm sm:text-base leading-relaxed pb-5 sm:pb-6 pr-8`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ