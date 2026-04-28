import React from 'react'
import { Zap, DollarSign, Lock } from 'lucide-react'
import { SimpleCodeBlock } from './simpler-code-block'
import { useTheme } from '@/contexts/ThemeContext'

export function AIProvidersContent({ activeSection }: { activeSection: string }) {
  const { isDark } = useTheme()

  const content: Record<string, React.ReactElement> = {

    openai: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>OpenAI</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Use GPT-5 and o-series models for advanced code answers.</p>
        </div>

        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <Zap className="w-4 h-4" />
                <span className="text-xs font-semibold">SPEED</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Fast</p>
            </div>

            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-semibold">COST</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Moderate</p>
            </div>

            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <Lock className="w-4 h-4" />
                <span className="text-xs font-semibold">PRIVACY</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Query only</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Setup</h3>

            <div className="space-y-3">
              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>1. Get your API key from OpenAI:</p>
              <a
                href="https://platform.openai.com/api-keys"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'} text-sm`}
              >
                https://platform.openai.com/api-keys
              </a>

              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base mt-4`}>2. Add to your .env file:</p>
              <SimpleCodeBlock code="QUACKSTACK_OPENAI_KEY=sk-proj-..." />

              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base mt-4`}>3. That's it! QuackStack will auto-detect OpenAI.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Available Models</h3>
            <div className="space-y-2">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gpt-5.5</span>
                  <span className={`${isDark ? 'text-green-400' : 'text-green-600'} ml-2 text-xs`}>Default</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Latest GPT-5.5, best quality</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gpt-5.4</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>GPT-5.4, high quality</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gpt-5.4-mini</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Smaller, faster GPT-5.4</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gpt-5.3-codex</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Specialized code model</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gpt-5.3-instant</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Fast GPT-5.3, lower latency</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gpt-4o</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>GPT-4o, multimodal</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gpt-4o-mini</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Lightweight GPT-4o</p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-3 mt-3`}>
              <p className={`${isDark ? 'text-blue-300' : 'text-blue-600'} text-xs`}>
                💡 Switch models: <span className="font-mono">quack -m gpt-5.5</span> or use <span className="font-mono">/model gpt-5.4-mini</span> in REPL
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>About Embeddings</h3>
            <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-4`}>
              <p className={`${isDark ? 'text-blue-300' : 'text-blue-600'} text-sm font-semibold`}>💡 Local Embeddings Only</p>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-xs mt-2`}>
                QuackStack uses <span className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>local embeddings</span> to index your code on your machine. No separate embedding API needed! OpenAI is only used to generate answers from the code snippets we find.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Why Choose OpenAI?</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Cutting-Edge Models</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Access to GPT-5 and o-series reasoning models</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Great Code Understanding</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Excellent at explaining code and technical concepts</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Well-Documented</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Extensive documentation and community support</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-400/20 border-yellow-500/40'} border rounded-lg p-4`}>
            <p className={`${isDark ? 'text-yellow-300' : 'text-yellow-600'} text-sm font-semibold`}>Recommended for most users</p>
            <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-xs mt-1`}>Good balance of speed, quality, and cost. The default choice for production use.</p>
          </div>
        </div>
      </div>
    ),

    claude: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Anthropic Claude</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Use Claude 4 for detailed, thoughtful code explanations.</p>
        </div>

        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <Zap className="w-4 h-4" />
                <span className="text-xs font-semibold">SPEED</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Fast</p>
            </div>

            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-semibold">COST</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Premium</p>
            </div>

            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <Lock className="w-4 h-4" />
                <span className="text-xs font-semibold">PRIVACY</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Query only</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Setup</h3>

            <div className="space-y-3">
              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>1. Get your API key from Anthropic:</p>
              <a
                href="https://console.anthropic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'} text-sm`}
              >
                https://console.anthropic.com
              </a>

              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base mt-4`}>2. Add to your .env file:</p>
              <SimpleCodeBlock code="QUACKSTACK_ANTHROPIC_KEY=sk-ant-..." />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Available Models</h3>
            <div className="space-y-2">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>claude-opus-4-7</span>
                  <span className={`${isDark ? 'text-green-400' : 'text-green-600'} ml-2 text-xs`}>Default</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Latest Opus 4.7, most capable</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>claude-sonnet-4-6</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Sonnet 4.6, best balance</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>claude-haiku-4-5-20251001</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Fastest Claude 4 model</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>claude-opus-4-6</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Opus 4.6 variant</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>claude-sonnet-4-5-20250929</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Sonnet 4.5 preview</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>claude-opus-4-5-20251101</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Opus 4.5 stable</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>claude-opus-4-1-20250805</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Opus 4.1 stable</p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-3 mt-3`}>
              <p className={`${isDark ? 'text-blue-300' : 'text-blue-600'} text-xs`}>
                💡 Switch models: <span className="font-mono">quack -p anthropic -m claude-opus-4-7</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>About Embeddings</h3>
            <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-4`}>
              <p className={`${isDark ? 'text-blue-300' : 'text-blue-700'} text-sm font-semibold`}>💡 Local Embeddings Only</p>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-xs mt-2`}>
                QuackStack uses <span className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>local embeddings</span> to index your code on your machine. No separate embedding API needed! Claude is only used to generate answers from the code snippets we find.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Why Choose Claude?</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Detailed Explanations</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Excels at providing thorough, nuanced code analysis</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Large Context Window</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Can handle more code snippets in a single query</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Strong Reasoning</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Great at understanding complex architectural patterns</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-400/20 border-yellow-500/40'} border rounded-lg p-4`}>
            <p className={`${isDark ? 'text-yellow-300' : 'text-yellow-700'} text-sm font-semibold`}>Best for Complex Codebases</p>
            <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-xs mt-1`}>Ideal when you need detailed, thoughtful answers about intricate code architecture.</p>
          </div>
        </div>
      </div>
    ),

    gemini: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Google Gemini</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Free tier available - Gemini 3 is now available!</p>
        </div>

        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <Zap className="w-4 h-4" />
                <span className="text-xs font-semibold">SPEED</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Very Fast</p>
            </div>

            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-semibold">COST</span>
              </div>
              <p className={`${isDark ? 'text-green-300' : 'text-green-700'} text-sm font-semibold`}>FREE!</p>
            </div>

            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <Lock className="w-4 h-4" />
                <span className="text-xs font-semibold">PRIVACY</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Query only</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Setup</h3>

            <div className="space-y-3">
              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>1. Get your FREE API key from Google:</p>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'} text-sm`}
              >
                https://aistudio.google.com/app/apikey
              </a>

              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base mt-4`}>2. Add to your .env file:</p>
              <SimpleCodeBlock code="QUACKSTACK_GEMINI_KEY=AIza..." />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Available Models</h3>
            <div className="space-y-2">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gemini-3.1-pro-preview</span>
                  <span className={`${isDark ? 'text-green-400' : 'text-green-600'} ml-2 text-xs`}>Default</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Preview build of Gemini 3.1 Pro</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gemini-2.5-pro</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Gemini 2.5 Pro</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gemini-3-flash-preview</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Preview version optimized for speed</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gemini-3.1-flash-lite-preview</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Lightweight preview for quick replies</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gemini-2.5-flash</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Fast and efficient v2.5</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gemini-2.5-flash-lite</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Lightweight Gemini 2.5 flash</p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-3 mt-3`}>
              <p className={`${isDark ? 'text-blue-300' : 'text-blue-600'} text-xs`}>
                💡 All models are FREE! Switch with: <span className="font-mono">quack -m gemini-3.1-pro-preview</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Why Choose Gemini?</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Completely Free</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Generous free tier with no credit card required</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Lightning Fast</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Optimized for speed without sacrificing quality</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Great for Beginners</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Perfect for trying out QuackStack without any costs</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-green-400/10 border-green-400/30' : 'bg-green-400/20 border-green-500/40'} border rounded-lg p-4`}>
            <p className={`${isDark ? 'text-green-300' : 'text-green-700'} text-sm font-semibold`}>🎉 Best for Getting Started</p>
            <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-xs mt-1`}>No credit card needed! Start exploring your codebase today with zero cost.</p>
          </div>
        </div>
      </div>
    ),

    deepseek: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>DeepSeek</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>The most cost-effective AI provider option.</p>
        </div>

        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <Zap className="w-4 h-4" />
                <span className="text-xs font-semibold">SPEED</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Fast</p>
            </div>

            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-semibold">COST</span>
              </div>
              <p className={`${isDark ? 'text-green-300' : 'text-green-700'} text-sm font-semibold`}>Very Cheap</p>
            </div>

            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <Lock className="w-4 h-4" />
                <span className="text-xs font-semibold">PRIVACY</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Query only</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Setup</h3>

            <div className="space-y-3">
              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>1. Get your API key from DeepSeek:</p>
              <a
                href="https://platform.deepseek.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'} text-sm`}
              >
                https://platform.deepseek.com
              </a>

              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base mt-4`}>2. Add to your .env file:</p>
              <SimpleCodeBlock code="QUACKSTACK_DEEPSEEK_KEY=sk-..." />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Available Models</h3>
            <div className="space-y-2">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>deepseek-v4-pro</span>
                  <span className={`${isDark ? 'text-green-400' : 'text-green-600'} ml-2 text-xs`}>Default</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Optimized for coding tasks</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>deepseek-v4-flash</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Faster, lighter DeepSeek v4</p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-3 mt-3`}>
              <p className={`${isDark ? 'text-blue-300' : 'text-blue-600'} text-xs`}>
                💡 Switch models: <span className="font-mono">quack -m deepseek-v4-pro</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Why Choose DeepSeek?</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Lowest Cost</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Significantly cheaper than other providers</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Code-Focused</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Specifically trained for programming tasks</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Good Performance</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Competitive quality at fraction of the cost</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-400/20 border-yellow-500/40'} border rounded-lg p-4`}>
            <p className={`${isDark ? 'text-yellow-300' : 'text-yellow-700'} text-sm font-semibold`}>💰 Budget-Friendly Choice</p>
            <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-xs mt-1`}>Perfect for high-volume usage or when you want to minimize AI costs.</p>
          </div>
        </div>
      </div>
    ),

    mistral: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Mistral AI</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>European AI provider with strong coding capabilities.</p>
        </div>

        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <Zap className="w-4 h-4" />
                <span className="text-xs font-semibold">SPEED</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Very Fast</p>
            </div>

            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-semibold">COST</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Moderate</p>
            </div>

            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <Lock className="w-4 h-4" />
                <span className="text-xs font-semibold">PRIVACY</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Query only</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Setup</h3>

            <div className="space-y-3">
              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>1. Get your API key from Mistral:</p>
              <a
                href="https://console.mistral.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'} text-sm`}
              >
                https://console.mistral.ai
              </a>

              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base mt-4`}>2. Add to your .env file:</p>
              <SimpleCodeBlock code="QUACKSTACK_MISTRAL_KEY=..." />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Available Models</h3>
            <div className="space-y-2">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>mistral-large-3-25-12</span>
                  <span className={`${isDark ? 'text-green-400' : 'text-green-600'} ml-2 text-xs`}>Default</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Most capable model</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>mistral-medium-3-1-25-08</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Balanced performance</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>mistral-small-4-0-26-03</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Fast and cost-effective</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>devstral-2-25-12</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Developer-focused model</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>codestral-25-08</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Specialized for code generation</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>magistral-medium-1-2-25-09</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Magistral medium reasoning</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>magistral-small-1-2-25-09</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Magistral small reasoning</p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-3 mt-3`}>
              <p className={`${isDark ? 'text-blue-300' : 'text-blue-600'} text-xs`}>
                💡 Switch models: <span className="font-mono">quack -p mistral -m codestral-25-08</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Why Choose Mistral?</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>European Provider</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>GDPR-compliant with EU data centers</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>High Performance</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Excellent at code generation and explanation</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Open Source Friendly</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Strong commitment to open models</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-400/20 border-yellow-500/40'} border rounded-lg p-4`}>
            <p className={`${isDark ? 'text-yellow-300' : 'text-yellow-700'} text-sm font-semibold`}>🇪🇺 Best for European Users</p>
            <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-xs mt-1`}>Great choice if you need GDPR compliance or prefer European AI providers.</p>
          </div>
        </div>
      </div>
    ),

    grok: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>xAI Grok</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Fast reasoning models from xAI with excellent code understanding.</p>
        </div>

        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <Zap className="w-4 h-4" />
                <span className="text-xs font-semibold">SPEED</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Very Fast</p>
            </div>

            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-semibold">COST</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Moderate</p>
            </div>

            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <div className={`flex items-center gap-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                <Lock className="w-4 h-4" />
                <span className="text-xs font-semibold">PRIVACY</span>
              </div>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>Query only</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Setup</h3>

            <div className="space-y-3">
              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>1. Get your API key from xAI:</p>
              <a
                href="https://console.x.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'} text-sm`}
              >
                https://console.x.ai
              </a>

              <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base mt-4`}>2. Add to your .env file:</p>
              <SimpleCodeBlock code="QUACKSTACK_GROK_KEY=xai-..." />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Available Models</h3>
            <div className="space-y-2">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>grok-4.20-reasoning</span>
                  <span className={`${isDark ? 'text-green-400' : 'text-green-600'} ml-2 text-xs`}>Default</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Most capable Grok model</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>grok-4.20-non-reasoning</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Fast Grok 4.20, no reasoning step</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>grok-4-1-fast-reasoning</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Advanced reasoning with fast inference</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>grok-4-1-fast-non-reasoning</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Fast inference without reasoning</p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-3 mt-3`}>
              <p className={`${isDark ? 'text-blue-300' : 'text-blue-600'} text-xs`}>
                💡 Switch models: <span className="font-mono">quack -p grok -m grok-4.20-reasoning</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Why Choose Grok?</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Fast Reasoning</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Excellent at complex problem-solving with quick response times</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Code-Specialized Models</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Dedicated code models for software development tasks</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-xl shrink-0`}>✓</span>
                <div>
                  <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Latest Technology</p>
                  <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Built by xAI with cutting-edge AI research</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-400/20 border-yellow-500/40'} border rounded-lg p-4`}>
            <p className={`${isDark ? 'text-yellow-300' : 'text-yellow-700'} text-sm font-semibold`}>⚡ Great for Fast Development</p>
            <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-xs mt-1`}>Perfect when you need quick, intelligent responses for coding tasks.</p>
          </div>
        </div>
      </div>
    ),
  }

  return content[activeSection] || null
}