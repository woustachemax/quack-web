'use client'
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

export const FAQ = () => {
  const { isDark } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
    <section className={`relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-stone-900' : 'bg-stone-50'} transition-colors duration-300`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold ${isDark ? 'text-neutral-300/70' : 'text-stone-700/70'} mb-3`}>
            Frequently Asked <span className={isDark ? 'text-yellow-400/70' : 'text-yellow-500/80'}>Questions</span>
          </h2>
          <p className={`${isDark ? 'text-neutral-200/70' : 'text-stone-600/70'} text-sm sm:text-base`}>
            Everything you need to know about QuackStack
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-stone-800/5 border-stone-300/30'} backdrop-blur-xl border rounded-lg overflow-hidden transition-all duration-300`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
              >
                <h3 className={`text-base sm:text-lg font-medium pr-4 ${isDark ? 'text-yellow-400/70' : 'text-yellow-600/80'} transition-colors`}>
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 ${isDark ? 'text-neutral-300/70' : 'text-stone-600/70'} shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className={`${isDark ? 'text-neutral-200/60' : 'text-stone-600/70'} text-sm sm:text-base leading-relaxed`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ