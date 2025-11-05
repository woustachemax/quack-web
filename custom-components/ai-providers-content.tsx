import React from 'react'
import { Zap, DollarSign, Lock } from 'lucide-react'
import { SimpleCodeBlock } from './simpler-code-block'

export function AIProvidersContent({ activeSection }: { activeSection: string }) {
  const content: Record<string, React.ReactElement> = {
    openai: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">OpenAI</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Use GPT-4 for conversational code answers.</p>
        </div>
        
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-semibold">SPEED</span>
              </div>
              <p className="text-stone-300 text-sm">Fast</p>
            </div>

            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-semibold">COST</span>
              </div>
              <p className="text-stone-300 text-sm">Moderate</p>
            </div>

            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-semibold">PRIVACY</span>
              </div>
              <p className="text-stone-300 text-sm">Query only</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Setup</h3>
            
            <div className="space-y-3">
              <p className="text-stone-400/90 text-sm sm:text-base">1. Get your API key from OpenAI:</p>
              <a 
                href="https://platform.openai.com/api-keys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm"
              >
                https://platform.openai.com/api-keys
              </a>

              <p className="text-stone-400/90 text-sm sm:text-base mt-4">2. Add to your .env file:</p>
              <SimpleCodeBlock code="QUACKSTACK_OPENAI_KEY=sk-proj-..." />

              <p className="text-stone-400/90 text-sm sm:text-base mt-4">3. That's it! QuackStack will auto-detect OpenAI.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Model Used</h3>
            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <p className="text-stone-300 text-sm">
                <span className="text-yellow-400 font-mono">gpt-4o-mini</span>
                <span className="text-stone-500 ml-2">- Optimized for speed and cost</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">About Embeddings</h3>
            <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
              <p className="text-blue-300 text-sm font-semibold">💡 Local Embeddings Only</p>
              <p className="text-stone-300 text-xs mt-2">
                QuackStack uses <span className="font-semibold text-blue-300">local embeddings</span> to index your code on your machine. No separate embedding API needed! OpenAI is only used to generate answers from the code snippets we find.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Why Choose OpenAI?</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">Reliable & Fast</p>
                  <p className="text-stone-400 text-xs mt-1">Consistently good performance with low latency</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">Great Code Understanding</p>
                  <p className="text-stone-400 text-xs mt-1">Excellent at explaining code and technical concepts</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">Well-Documented</p>
                  <p className="text-stone-400 text-xs mt-1">Extensive documentation and community support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
            <p className="text-yellow-300 text-sm font-semibold">Recommended for most users</p>
            <p className="text-stone-300 text-xs mt-1">Good balance of speed, quality, and cost. The default choice for production use.</p>
          </div>
        </div>
      </div>
    ),

    claude: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">Anthropic Claude</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Use Claude for detailed, thoughtful code explanations.</p>
        </div>
        
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-semibold">SPEED</span>
              </div>
              <p className="text-stone-300 text-sm">Fast</p>
            </div>

            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-semibold">COST</span>
              </div>
              <p className="text-stone-300 text-sm">Premium</p>
            </div>

            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-semibold">PRIVACY</span>
              </div>
              <p className="text-stone-300 text-sm">Query only</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Setup</h3>
            
            <div className="space-y-3">
              <p className="text-stone-400/90 text-sm sm:text-base">1. Get your API key from Anthropic:</p>
              <a 
                href="https://console.anthropic.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm"
              >
                https://console.anthropic.com
              </a>

              <p className="text-stone-400/90 text-sm sm:text-base mt-4">2. Add to your .env file:</p>
              <SimpleCodeBlock code="QUACKSTACK_ANTHROPIC_KEY=sk-ant-..." />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Model Used</h3>
            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <p className="text-stone-300 text-sm">
                <span className="text-yellow-400 font-mono">claude-3-5-sonnet-20241022</span>
                <span className="text-stone-500 ml-2">- Latest Sonnet model</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">About Embeddings</h3>
            <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
              <p className="text-blue-300 text-sm font-semibold">💡 Local Embeddings Only</p>
              <p className="text-stone-300 text-xs mt-2">
                QuackStack uses <span className="font-semibold text-blue-300">local embeddings</span> to index your code on your machine. No separate embedding API needed! Claude is only used to generate answers from the code snippets we find.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Why Choose Claude?</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">Detailed Explanations</p>
                  <p className="text-stone-400 text-xs mt-1">Excels at providing thorough, nuanced code analysis</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">Large Context Window</p>
                  <p className="text-stone-400 text-xs mt-1">Can handle more code snippets in a single query</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">Strong Reasoning</p>
                  <p className="text-stone-400 text-xs mt-1">Great at understanding complex architectural patterns</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
            <p className="text-yellow-300 text-sm font-semibold">Best for Complex Codebases</p>
            <p className="text-stone-300 text-xs mt-1">Ideal when you need detailed, thoughtful answers about intricate code architecture.</p>
          </div>
        </div>
      </div>
    ),

    gemini: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">Google Gemini</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Free tier available - perfect for getting started!</p>
        </div>
        
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-semibold">SPEED</span>
              </div>
              <p className="text-stone-300 text-sm">Very Fast</p>
            </div>

            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-semibold">COST</span>
              </div>
              <p className="text-green-300 text-sm font-semibold">FREE!</p>
            </div>

            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-semibold">PRIVACY</span>
              </div>
              <p className="text-stone-300 text-sm">Query only</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Setup</h3>
            
            <div className="space-y-3">
              <p className="text-stone-400/90 text-sm sm:text-base">1. Get your FREE API key from Google:</p>
              <a 
                href="https://aistudio.google.com/app/apikey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm"
              >
                https://aistudio.google.com/app/apikey
              </a>

              <p className="text-stone-400/90 text-sm sm:text-base mt-4">2. Add to your .env file:</p>
              <SimpleCodeBlock code="QUACKSTACK_GEMINI_KEY=AIza..." />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Model Used</h3>
            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <p className="text-stone-300 text-sm">
                <span className="text-yellow-400 font-mono">gemini-1.5-flash</span>
                <span className="text-stone-500 ml-2">- Fast and efficient</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">About Embeddings</h3>
            <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
              <p className="text-blue-300 text-sm font-semibold">💡 Local Embeddings Only</p>
              <p className="text-stone-300 text-xs mt-2">
                QuackStack uses <span className="font-semibold text-blue-300">local embeddings</span> to index your code on your machine. No separate embedding API needed! Gemini is only used to generate answers from the code snippets we find.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Why Choose Gemini?</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">Completely Free</p>
                  <p className="text-stone-400 text-xs mt-1">Generous free tier with no credit card required</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">Lightning Fast</p>
                  <p className="text-stone-400 text-xs mt-1">Optimized for speed without sacrificing quality</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">Great for Beginners</p>
                  <p className="text-stone-400 text-xs mt-1">Perfect for trying out QuackStack without any costs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4">
            <p className="text-green-300 text-sm font-semibold">🎉 Best for Getting Started</p>
            <p className="text-stone-300 text-xs mt-1">No credit card needed! Start exploring your codebase today with zero cost.</p>
          </div>
        </div>
      </div>
    ),

    deepseek: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">DeepSeek</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">The most cost-effective AI provider option.</p>
        </div>
        
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-semibold">SPEED</span>
              </div>
              <p className="text-stone-300 text-sm">Fast</p>
            </div>

            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-semibold">COST</span>
              </div>
              <p className="text-green-300 text-sm font-semibold">Very Cheap</p>
            </div>

            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-semibold">PRIVACY</span>
              </div>
              <p className="text-stone-300 text-sm">Query only</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Setup</h3>
            
            <div className="space-y-3">
              <p className="text-stone-400/90 text-sm sm:text-base">1. Get your API key from DeepSeek:</p>
              <a 
                href="https://platform.deepseek.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm"
              >
                https://platform.deepseek.com
              </a>

              <p className="text-stone-400/90 text-sm sm:text-base mt-4">2. Add to your .env file:</p>
              <SimpleCodeBlock code="QUACKSTACK_DEEPSEEK_KEY=sk-..." />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Model Used</h3>
            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <p className="text-stone-300 text-sm">
                <span className="text-yellow-400 font-mono">deepseek-chat</span>
                <span className="text-stone-500 ml-2">- Optimized for coding tasks</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">About Embeddings</h3>
            <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
              <p className="text-blue-300 text-sm font-semibold">💡 Local Embeddings Only</p>
              <p className="text-stone-300 text-xs mt-2">
                QuackStack uses <span className="font-semibold text-blue-300">local embeddings</span> to index your code on your machine. No separate embedding API needed! DeepSeek is only used to generate answers from the code snippets we find.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Why Choose DeepSeek?</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">Lowest Cost</p>
                  <p className="text-stone-400 text-xs mt-1">Significantly cheaper than other providers</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">Code-Focused</p>
                  <p className="text-stone-400 text-xs mt-1">Specifically trained for programming tasks</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">Good Performance</p>
                  <p className="text-stone-400 text-xs mt-1">Competitive quality at fraction of the cost</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
            <p className="text-yellow-300 text-sm font-semibold">💰 Budget-Friendly Choice</p>
            <p className="text-stone-300 text-xs mt-1">Perfect for high-volume usage or when you want to minimize AI costs.</p>
          </div>
        </div>
      </div>
    ),

    mistral: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">Mistral AI</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">European AI provider with strong coding capabilities.</p>
        </div>
        
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-semibold">SPEED</span>
              </div>
              <p className="text-stone-300 text-sm">Very Fast</p>
            </div>

            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-semibold">COST</span>
              </div>
              <p className="text-stone-300 text-sm">Moderate</p>
            </div>

            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-semibold">PRIVACY</span>
              </div>
              <p className="text-stone-300 text-sm">Query only</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Setup</h3>
            
            <div className="space-y-3">
              <p className="text-stone-400/90 text-sm sm:text-base">1. Get your API key from Mistral:</p>
              <a 
                href="https://console.mistral.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm"
              >
                https://console.mistral.ai
              </a>

              <p className="text-stone-400/90 text-sm sm:text-base mt-4">2. Add to your .env file:</p>
              <SimpleCodeBlock code="QUACKSTACK_MISTRAL_KEY=..." />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Model Used</h3>
            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <p className="text-stone-300 text-sm">
                <span className="text-yellow-400 font-mono">mistral-large-latest</span>
                <span className="text-stone-500 ml-2">- Their most capable model</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">About Embeddings</h3>
            <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
              <p className="text-blue-300 text-sm font-semibold">💡 Local Embeddings Only</p>
              <p className="text-stone-300 text-xs mt-2">
                QuackStack uses <span className="font-semibold text-blue-300">local embeddings</span> to index your code on your machine. No separate embedding API needed! Mistral is only used to generate answers from the code snippets we find.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Why Choose Mistral?</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">European Provider</p>
                  <p className="text-stone-400 text-xs mt-1">GDPR-compliant with EU data centers</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">High Performance</p>
                  <p className="text-stone-400 text-xs mt-1">Excellent at code generation and explanation</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <div>
                  <p className="text-stone-300 text-sm font-medium">Open Source Friendly</p>
                  <p className="text-stone-400 text-xs mt-1">Strong commitment to open models</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
            <p className="text-yellow-300 text-sm font-semibold">🇪🇺 Best for European Users</p>
            <p className="text-stone-300 text-xs mt-1">Great choice if you need GDPR compliance or prefer European AI providers.</p>
          </div>
        </div>
      </div>
    ),
  }

  return content[activeSection] || null
}