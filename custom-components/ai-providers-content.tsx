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
        <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Use GPT-4 for conversational code answers.</p>
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
                <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gpt-4o</span>
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} ml-2 text-xs`}>Default</span>
              </p>
              <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Most capable model, best quality</p>
            </div>
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gpt-4o-mini</span>
              </p>
              <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Faster and cheaper, still very good</p>
            </div>
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gpt-4-turbo</span>
              </p>
              <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Previous generation, still powerful</p>
            </div>
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gpt-3.5-turbo</span>
              </p>
              <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Legacy model, very cheap</p>
            </div>
          </div>
          <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-3 mt-3`}>
            <p className={`${isDark ? 'text-blue-300' : 'text-blue-600'} text-xs`}>
              💡 Switch models: <span className="font-mono">quack -m gpt-4o-mini</span> or use <span className="font-mono">/model gpt-4o-mini</span> in REPL
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
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm font-medium`}>Reliable & Fast</p>
                <p className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-1`}>Consistently good performance with low latency</p>
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
        <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Use Claude for detailed, thoughtful code explanations.</p>
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
                <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>claude-sonnet-4-20250514</span>
                <span className={`${isDark ? 'text-green-400' : 'text-green-600'} ml-2 text-xs`}>Default</span>
              </p>
              <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Latest Sonnet, best balance</p>
            </div>
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>claude-opus-4-20250514</span>
              </p>
              <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Most capable, highest quality</p>
            </div>
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>claude-3-7-sonnet-20250219</span>
              </p>
              <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Previous Sonnet version</p>
            </div>
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
              <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>claude-3-5-haiku-20241022</span>
              </p>
              <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Fastest and most affordable</p>
            </div>
          </div>
          <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-3 mt-3`}>
            <p className={`${isDark ? 'text-blue-300' : 'text-blue-600'} text-xs`}>
              💡 Switch models: <span className="font-mono">quack -p anthropic -m claude-opus-4-20250514</span>
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
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Free tier available - perfect for getting started!</p>
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
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gemini-1.5-flash</span>
                  <span className={`${isDark ? 'text-green-400' : 'text-green-600'} ml-2 text-xs`}>Default</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Fast and efficient, FREE</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gemini-2.0-flash-exp</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Experimental v2, cutting edge</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gemini-1.5-pro</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Most capable, still FREE</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>gemini-1.5-flash-8b</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Smallest, ultra fast</p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-3 mt-3`}>
              <p className={`${isDark ? 'text-blue-300' : 'text-blue-600'} text-xs`}>
                💡 All models are FREE! Switch with: <span className="font-mono">quack -m gemini-1.5-pro</span>
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
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>deepseek-chat</span>
                  <span className={`${isDark ? 'text-green-400' : 'text-green-600'} ml-2 text-xs`}>Default</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Optimized for coding tasks</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>deepseek-reasoner</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Advanced reasoning capabilities</p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-3 mt-3`}>
              <p className={`${isDark ? 'text-blue-300' : 'text-blue-600'} text-xs`}>
                💡 Switch models: <span className="font-mono">quack -m deepseek-reasoner</span>
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
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>mistral-large-latest</span>
                  <span className={`${isDark ? 'text-green-400' : 'text-green-600'} ml-2 text-xs`}>Default</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Most capable model</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>mistral-small-latest</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Fast and cost-effective</p>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm`}>
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-mono`}>codestral-latest</span>
                </p>
                <p className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs mt-1`}>Specialized for code generation</p>
              </div>
            </div>
            <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-3 mt-3`}>
              <p className={`${isDark ? 'text-blue-300' : 'text-blue-600'} text-xs`}>
                💡 Switch models: <span className="font-mono">quack -p mistral -m codestral-latest</span>
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
  }

  return content[activeSection] || null
}