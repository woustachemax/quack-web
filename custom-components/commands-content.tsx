import { Terminal, Eye, RefreshCw, Sparkles, FileText } from 'lucide-react'
import { CodeBlock } from './code-block'
import { useTheme } from '@/contexts/ThemeContext' 

export function CommandsContent({ activeSection }: { activeSection: string }) {
  const { isDark } = useTheme()

  const content: Record<string, React.ReactElement> = {
    interactive: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Interactive Mode</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>The default QuackStack experience, conversational code exploration.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Starting the REPL</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Navigate to your project and run:</p>
            
            <CodeBlock code="quack" />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Example Session</h3>
            
            <div className={`${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-300'} rounded-lg border overflow-hidden`}>
              <div className={`flex items-center justify-between px-3 sm:px-4 py-2 ${isDark ? 'bg-stone-800/80 border-stone-800' : 'bg-stone-100 border-stone-300'} border-b`}>
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className={`text-xs ${isDark ? 'text-stone-500' : 'text-stone-600'}`}>terminal</span>
              </div>
              
              <div className="p-4 font-mono text-xs sm:text-sm space-y-3">
                <div className="flex items-center">
                  <span className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>$</span>
                  <span className={`ml-2 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>quack</span>
                </div>
                
                <div className={`${isDark ? 'text-stone-400' : 'text-stone-600'} space-y-1`}>
                  <div>Welcome to QuackStack! 🐥</div>
                  <div>🔍 Indexing your codebase (this may take a moment)...</div>
                  <div className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>✅ Indexing complete!</div>
                </div>
                
                <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs`}>💡 Tip: Press Ctrl+C to exit</div>
                
                <div className="pt-2">
                  <div className="flex items-start">
                    <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>🐥 Quack! How can I help?</span>
                    <span className={`${isDark ? 'text-stone-400' : 'text-stone-600'} mx-2`}>&gt;</span>
                    <span className={`${isDark ? 'text-stone-300' : 'text-stone-700'}`}>how does authentication work?</span>
                  </div>
                </div>
                
                <div className={`${isDark ? 'text-stone-300 bg-stone-800/50' : 'text-stone-700 bg-stone-50'} p-3 rounded space-y-2`}>
                  <p>Authentication is handled using JWT tokens. The auth middleware validates tokens in src/middleware/auth.ts and protects routes.</p>
                  
                  <div className={`${isDark ? 'text-stone-400' : 'text-stone-600'} text-xs mt-2`}>
                    <div>Key files:</div>
                    <div>- src/middleware/auth.ts</div>
                    <div>- src/routes/auth.routes.ts</div>
                  </div>
                </div>
                
                <div className={`flex items-center ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                  <span className={`${isDark ? 'text-stone-500' : 'text-stone-600'}`}>💡 Want more details? (y/n)</span>
                  <span className="mx-2">&gt;</span>
                  <span className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>y</span>
                </div>
                
                <div className={`${isDark ? 'text-stone-400' : 'text-stone-600'}`}>📚 Relevant Code:</div>
                
                <div className={`${isDark ? 'bg-stone-800/50' : 'bg-stone-50'} p-3 rounded space-y-2`}>
                  <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} text-xs`}>[1] src/middleware/auth.ts (relevance: 92.4%)</div>
                  <pre className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-xs overflow-x-auto`}><code>{`export function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  // ... token verification logic ...
}`}</code>
                  </pre>
                </div>
                
                <div className="pt-2">
                  <div className="flex items-start">
                    <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>🐥 Quack! How can I help?</span>
                    <span className={`${isDark ? 'text-stone-400' : 'text-stone-600'} mx-2`}>&gt;</span>
                    <span className={`${isDark ? 'text-stone-300' : 'text-stone-700'}`}>^C</span>
                  </div>
                </div>
                
                <div className={`${isDark ? 'text-stone-400' : 'text-stone-600'}`}>👋 Happy coding!</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Two-Stage Interaction</h3>
            
            <div className="space-y-3">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Quick Answer</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Get a concise, conversational answer with file references immediately.</p>
                  </div>
                </div>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Deep Dive (Optional)</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Press 'y' to see the actual code snippets with relevance scores and line numbers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-400/20 border-yellow-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <Sparkles className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`}>Pro Tip</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>The REPL stays open after each answer, so you can ask follow-up questions! It's like pair programming with an AI that knows your entire codebase.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    context: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Context Generation</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Give your AI coding assistants instant codebase knowledge.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Generate Context for All Tools</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>One command to rule them all:</p>
            
            <CodeBlock code="quack --context" />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>What Gets Generated?</h3>
            
            <div className="grid gap-3 sm:grid-cols-2">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>.cursorrules</h4>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Cursor AI context</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>.windsurfrules</h4>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Windsurf AI context</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>.clinerules</h4>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Cline AI context</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>.continue/context.md</h4>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Continue extension</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3 sm:col-span-2`}>
                <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>.aider.conf.yml</h4>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Aider configuration</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Context Contents</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Each context file includes:</p>
            
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Project architecture overview</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Entry points and code flow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Key functions and classes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>External dependencies and APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Project structure visualization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${isDark ? 'bg-green-400/10 border-green-400/30' : 'bg-green-400/20 border-green-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <Terminal className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-700'}`}>Instant AI Context</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>Your AI coding assistant will automatically read these files and have full codebase context without any additional setup!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    agent: (
  <div className="space-y-6">
    <div className="space-y-3">
      <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>AGENTS.md Generation</h2>
      <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Transform your codebase into an AI agent configuration following the agents.md specification.</p>
    </div>
    
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Generate AGENTS.md</h3>
        <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Create an AGENTS.md file that describes your codebase as an AI agent:</p>
        
        <CodeBlock code="quack --agent" />
      </div>

      <div className="space-y-4">
        <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>What is AGENTS.md?</h3>
        
        <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
          <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
            The <a href="https://agents.md/" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'} underline`}>agents.md specification</a> is a standardized format for describing AI agents. QuackStack analyzes your entire codebase and generates a comprehensive AGENTS.md file that documents your project as an intelligent, queryable agent.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>What Gets Generated?</h3>
        
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
            <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>Agent Metadata</h4>
            <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Name, description, version, author</p>
          </div>

          <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
            <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>Capabilities</h4>
            <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Features, operations, API endpoints</p>
          </div>

          <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
            <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>Technologies</h4>
            <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Languages, frameworks, databases</p>
          </div>

          <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
            <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>Configuration</h4>
            <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Environment variables, API keys</p>
          </div>

          <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
            <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>Usage Examples</h4>
            <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Commands, API calls, operations</p>
          </div>

          <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
            <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>Context & Knowledge</h4>
            <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Domain expertise, architecture</p>
          </div>

          <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
            <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>Constraints</h4>
            <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Limitations, security notes</p>
          </div>

          <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
            <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>Tools & Integrations</h4>
            <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>External tools, CLI commands</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Smart Analysis</h3>
        
        <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
          <ul className={`space-y-2 text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
            <li className="flex items-start gap-2">
              <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
              <span><strong>Auto-detects technologies:</strong> TypeScript, React, Prisma, Express, FastAPI, PostgreSQL, and 20+ more</span>
            </li>
            <li className="flex items-start gap-2">
              <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
              <span><strong>Extracts API endpoints:</strong> Finds REST routes from Express, FastAPI, Flask frameworks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
              <span><strong>Discovers data models:</strong> Identifies Prisma schemas, TypeScript interfaces, Python classes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
              <span><strong>Analyzes patterns:</strong> Detects async/await, OOP, functional programming styles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
              <span><strong>Maps dependencies:</strong> Catalogs external tools, APIs, and integrations</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Overwrite Protection</h3>
        
        <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
          <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>If AGENTS.md already exists, QuackStack will ask for confirmation before overwriting:</p>
          <div className={`mt-3 font-mono text-xs ${isDark ? 'text-stone-300 bg-stone-900' : 'text-stone-700 bg-stone-50'} p-3 rounded`}>
            <div>⚠️  AGENTS.md already exists. Overwrite? (y/n):</div>
          </div>
        </div>
      </div>

      <div className={`${isDark ? 'bg-purple-400/10 border-purple-400/30' : 'bg-purple-400/20 border-purple-500/40'} border rounded-lg p-4`}>
        <div className="flex items-start space-x-3">
          <Sparkles className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-600'} mt-0.5 shrink-0`} />
          <div>
            <p className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>AI Agent Standard</p>
            <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>The AGENTS.md format is designed to make your codebase discoverable and usable by AI systems. It's like giving your project a structured API for AI interactions!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
),
    readme: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>README Generation</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Auto-generate a comprehensive README.md from your codebase.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Generate README</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Create a professional README based on your code:</p>
            
            <CodeBlock code="quack --readme" />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>What Gets Generated?</h3>
            
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Project title and description</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Detected technologies and frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Installation instructions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Usage examples based on entry points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Project structure overview</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Key features derived from code analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Basic contributing guidelines</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Overwrite Protection</h3>
            
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>If README.md already exists, QuackStack will ask for confirmation before overwriting:</p>
              <div className={`mt-3 font-mono text-xs ${isDark ? 'text-stone-300 bg-stone-900' : 'text-stone-700 bg-stone-50'} p-3 rounded`}>
                <div>⚠️  README.md already exists. Overwrite? (y/n):</div>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-green-400/10 border-green-400/30' : 'bg-green-400/20 border-green-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <FileText className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-700'}`}>Smart Documentation</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>QuackStack analyzes your entire codebase to generate accurate, relevant documentation that actually reflects your project!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    watch: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Watch Mode</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Keep your context files always up-to-date as you code.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Start Watching</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Run in your project directory:</p>
            
            <CodeBlock code="quack --watch" />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>How It Works</h3>
            
            <div className="space-y-3">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                  <Eye className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0 mt-0.5`} />
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>File Monitoring</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Watches for any file changes in your project (excluding node_modules and .git).</p>
                  </div>
                </div>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                  <RefreshCw className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0 mt-0.5`} />
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Auto-Regeneration</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>When changes are detected, context files are automatically regenerated after a 5-second debounce.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Background Mode</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Run watch mode in the background during development:</p>
            
            <CodeBlock code={
              `quack --watch &`} />
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-400/20 border-yellow-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <Sparkles className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`}>Use Case</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>Perfect for active development sessions! Your AI assistant always has the latest codebase context without manual updates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    reindex: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Reindexing</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Force a complete rescan of your codebase.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Force Reindex</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Clear the old index and start fresh:</p>
            
            <CodeBlock code="quack --reindex" />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>When to Reindex</h3>
            
            <div className="space-y-3">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>Major Refactoring</h4>
                <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>After significant code restructuring or file moves.</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>Branch Switching</h4>
                <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>When switching between branches with very different codebases.</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>Stale Results</h4>
                <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>If search results seem outdated or incorrect.</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>Database Migration</h4>
                <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>After updating QuackStack or changing database schemas.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>What Happens</h3>
            
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <ol className={`space-y-2 text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} list-decimal list-inside`}>
                <li>All existing code snippets for the project are deleted from the database</li>
                <li>The codebase is scanned from scratch</li>
                <li>New embeddings are generated for all files</li>
                <li>Fresh data is stored in the database</li>
              </ol>
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-400/20 border-yellow-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <RefreshCw className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`}>Performance Note</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>First reindex might take several minutes for large codebases. Subsequent queries will be instant!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    provider: (
  <div className="space-y-6">
    <div className="space-y-3">
      <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>AI Provider Selection</h2>
      <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Choose your preferred AI provider and model for code analysis.</p>
    </div>
    
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>List Available Options</h3>
        <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>See all configured providers and their models:</p>
        
        <CodeBlock code="quack --list-models" />
      </div>

      <div className="space-y-4">
        <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Choose Provider</h3>
        <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Start QuackStack with a specific provider:</p>
        
        <div className="space-y-3">
          <CodeBlock code="quack -p openai" />
          <CodeBlock code="quack -p anthropic" />
          <CodeBlock code="quack -p gemini" />
          <CodeBlock code="quack -p deepseek" />
          <CodeBlock code="quack -p mistral" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Choose Specific Model</h3>
        <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Use a specific model from any provider:</p>
        
        <div className="space-y-3">
          <CodeBlock code="quack -m gpt-4o" />
          <CodeBlock code="quack -m claude-opus-4-20250514" />
          <CodeBlock code="quack -m gemini-1.5-pro" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Combine Provider and Model</h3>
        <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Specify both for complete control:</p>
        
        <CodeBlock code="quack -p anthropic -m claude-sonnet-4-20250514" />
      </div>

      <div className="space-y-4">
        <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Switch During Session</h3>
        <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Change provider or model while in the REPL:</p>
        
        <div className={`${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-300'} rounded-lg border overflow-hidden`}>
          <div className={`flex items-center justify-between px-3 sm:px-4 py-2 ${isDark ? 'bg-stone-800/80 border-stone-800' : 'bg-stone-100 border-stone-300'} border-b`}>
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className={`text-xs ${isDark ? 'text-stone-500' : 'text-stone-600'}`}>terminal</span>
          </div>
          
          <div className="p-4 font-mono text-xs sm:text-sm space-y-3">
            <div className="flex items-start">
              <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>🐥 quack &gt;</span>
              <span className={`ml-2 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>/provider anthropic</span>
            </div>
            
            <div className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>
               Switched to: Anthropic - claude-sonnet-4-20250514
            </div>
            
            <div className="flex items-start pt-2">
              <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>🐥 quack &gt;</span>
              <span className={`ml-2 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>/model gpt-4o</span>
            </div>
            
            <div className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>
               Switched to: OpenAI - gpt-4o
            </div>
            
            <div className="flex items-start pt-2">
              <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>🐥 quack &gt;</span>
              <span className={`ml-2 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>/help</span>
            </div>
            
            <div className={`${isDark ? 'text-stone-400' : 'text-stone-600'} space-y-1`}>
              <div>📖 Available Commands:</div>
              <div className="ml-4">
                <div>/model, /m [model]    Show or change model</div>
                <div>/provider, /p [name]  Show or change provider</div>
                <div>/help, /h             Show this help</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Default Behavior</h3>
        
        <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
          <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
            If you don't specify a provider or model, QuackStack will automatically use the first available provider based on your configured API keys, with its default model.
          </p>
        </div>
      </div>

      <div className={`${isDark ? 'bg-green-400/10 border-green-400/30' : 'bg-green-400/20 border-green-500/40'} border rounded-lg p-4`}>
        <div className="flex items-start space-x-3">
          <Sparkles className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'} mt-0.5 shrink-0`} />
          <div>
            <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-700'}`}>Pro Tip</p>
            <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>Compare responses across different models! Try the same question with GPT-4o, Claude Opus, and Gemini to see which one gives you the best answer for your specific use case.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
),
  }

  return content[activeSection] || null
}