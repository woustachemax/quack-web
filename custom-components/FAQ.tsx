'use client'
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is QuackStack?",
      answer: "QuackStack is an AI-powered CLI tool that helps you understand, search, and interact with your codebase. Think of it as having a senior developer who's read your entire repo sitting next to you."
    },
    {
      question: "How does it work?",
      answer: "QuackStack analyzes your codebase structure, dependencies, and patterns. It uses semantic understanding to answer questions, trace function calls, and find logic based on intent rather than just keywords."
    },
    {
      question: "Do I need to upload my code somewhere?",
      answer: "No! QuackStack runs entirely locally on your machine. Your code never leaves your computer, ensuring complete privacy and security."
    },
    {
      question: "What languages does it support?",
      answer: "QuackStack supports all major programming languages including JavaScript, TypeScript, Python, Java, Go, Rust, and many more. It understands code structure regardless of the language."
    },
    {
      question: "Is it free?",
      answer: "Yes! QuackStack is open source and completely free to use. You can find the source code on GitHub and contribute to make it even better."
    },
    {
      question: "How do I get started?",
      answer: "Simply install QuackStack via npm (npm install quackstack), run it in your project directory, and start asking questions. Check out our documentation for detailed guides and examples."
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-stone-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-300/70 mb-3">
            Frequently Asked <span className="text-yellow-400/70">Questions</span>
          </h2>
          <p className="text-neutral-200/70 text-sm sm:text-base">
            Everything you need to know about QuackStack
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-yellow-400/70"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
              >
                <h3 className="text-base sm:text-lg font-medium text-neutral-300/70 pr-4 hover:text-yellow-400/70 transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-yellow-400/70 shrink-0 transition-transform duration-300 ${
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
                  <p className="text-neutral-200/60 text-sm sm:text-base leading-relaxed">
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