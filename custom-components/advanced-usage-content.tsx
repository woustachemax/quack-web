import React from 'react'
import { AlertCircle, Sparkles } from 'lucide-react'
import { CodeBlock } from './code-block'
import { SimpleCodeBlock } from './simpler-code-block'
import { useTheme } from '@/contexts/ThemeContext'

export function AdvancedUsageContent({ activeSection }: { activeSection: string }) {
  const { isDark } = useTheme()

  const base = {
    heading: isDark ? 'text-yellow-300/80' : 'text-yellow-600/80',
    subtext: isDark ? 'text-stone-400/90' : 'text-stone-600/90',
    text: isDark ? 'text-stone-300' : 'text-stone-700',
    card: isDark
      ? 'bg-stone-800/50 border-stone-800'
      : 'bg-stone-100 border-stone-300',
    terminal: isDark
      ? 'bg-stone-900 border-stone-800'
      : 'bg-stone-50 border-stone-300',
    terminalHeader: isDark
      ? 'bg-stone-800/80 border-stone-800'
      : 'bg-stone-200 border-stone-300',
    highlight: isDark ? 'text-yellow-400' : 'text-yellow-600',
    code: isDark ? 'bg-stone-800' : 'bg-stone-200',
  }

  const content: Record<string, React.ReactElement> = {
    'multiple-projects': (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${base.heading} font-semibold tracking-tight`}>Multiple Projects</h2>
          <p className={`${base.subtext} text-sm sm:text-base leading-relaxed`}>Manage multiple codebases with a single QuackStack database.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>How It Works</h3>
            <p className={`${base.subtext} text-sm sm:text-base`}>Each project is isolated by its directory name in the database:</p>
            
            <div className={`${base.terminal} rounded-lg border overflow-hidden`}>
              <div className={`flex items-center justify-between px-3 sm:px-4 py-2 ${base.terminalHeader} border-b`}>
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className={`text-xs ${isDark ? 'text-stone-500' : 'text-stone-400'}`}>terminal</span>
              </div>
              
              <div className="p-4 font-mono text-xs sm:text-sm space-y-3">
                <div className={isDark ? 'text-stone-500' : 'text-stone-400'}># Project A</div>
                <div className="flex items-center">
                  <span className="text-green-400">$</span>
                  <span className={`ml-2 ${base.text}`}>cd ~/projects/my-app</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400">$</span>
                  <span className={`ml-2 ${base.text}`}>quack</span>
                </div>
                <div className={isDark ? 'text-stone-500' : 'text-stone-400'}># Indexed as "my-app" in database</div>
                
                <div className={`pt-2 ${isDark ? 'text-stone-500' : 'text-stone-400'}`}># Project B</div>
                <div className="flex items-center">
                  <span className="text-green-400">$</span>
                  <span className={`ml-2 ${base.text}`}>cd ~/projects/api-server</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400">$</span>
                  <span className={`ml-2 ${base.text}`}>quack</span>
                </div>
                <div className={isDark ? 'text-stone-500' : 'text-stone-400'}># Indexed as "api-server" in database</div>
                
                <div className={`pt-2 ${base.subtext}`}># Both share the same database but are isolated!</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Database Organization</h3>
            
            <div className={`${base.terminal} rounded-lg border overflow-hidden`}>
              <div className={`flex items-center justify-between px-3 sm:px-4 py-2 ${base.terminalHeader} border-b`}>
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className={`text-xs ${isDark ? 'text-stone-500' : 'text-stone-400'}`}>database structure</span>
              </div>
              
              <div className="p-4 font-mono text-xs sm:text-sm">
                <div className={`${base.subtext} space-y-1`}>
                  <div className={base.text}>codeSnippet table:</div>
                  <div className={`ml-4 ${base.subtext}`}>├── id: 1, projectName: <span className={isDark ? 'text-yellow-400' : 'text-yellow-600'}>"my-app"</span>, content: "..."</div>
                  <div className={`ml-4 ${base.subtext}`}>├── id: 2, projectName: <span className={isDark ? 'text-yellow-400' : 'text-yellow-600'}>"my-app"</span>, content: "..."</div>
                  <div className={`ml-4 ${base.subtext}`}>├── id: 3, projectName: <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>"api-server"</span>, content: "..."</div>
                  <div className={`ml-4 ${base.subtext}`}>└── id: 4, projectName: <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>"api-server"</span>, content: "..."</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Benefits</h3>
            
            <div className="space-y-3">
              {[
                { title: 'Centralized Database', desc: 'One database for all projects, easier to manage and backup' },
                { title: 'No Cross-Contamination', desc: 'Queries only search within the current project\'s code' },
                { title: 'Easy Switching', desc: 'Just cd to a different project and run quack, it just works!' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div>
                    <p className={`${base.text} text-sm font-medium`}>{title}</p>
                    <p className={`${base.subtext} text-xs mt-1`}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Cleaning Up Projects</h3>
            <p className={`${base.subtext} text-sm sm:text-base`}>If you want to remove a specific project from the database:</p>
            
            <div className={`${base.terminal} rounded-lg border overflow-hidden`}>
              <div className={`flex items-center justify-between px-3 sm:px-4 py-2 ${base.terminalHeader} border-b`}>
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className={`text-xs ${isDark ? 'text-stone-500' : 'text-stone-400'}`}>psql</span>
              </div>
              
              <div className="p-4 font-mono text-xs sm:text-sm space-y-3">
                <div className={isDark ? 'text-stone-500' : 'text-stone-400'}># Connect to your database</div>
                <div className="flex items-center">
                  <span className="text-green-400">$</span>
                  <span className={`ml-2 ${base.text}`}>psql $QUACKSTACK_DATABASE_URL</span>
                </div>
                
                <div className={`pt-2 ${isDark ? 'text-stone-500' : 'text-stone-400'}`}># Delete project data</div>
                <div className="flex items-start">
                  <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>psql&gt;</span>
                  <span className={`ml-2 ${base.text}`}>DELETE FROM "codeSnippet" WHERE "projectName" = 'old-project';</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-100 border-yellow-300'} border rounded-lg p-4`}>
            <div className="flex items-start gap-3">
              <Sparkles className={`w-5 h-5 ${base.highlight} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${base.highlight}`}>Global Context</p>
                <p className={`${base.text} text-sm mt-1`}>QuackStack also maintains a global context file at <code className={`${base.code} px-2 py-0.5 rounded ${base.highlight}`}>~/.quackstack/contexts.json</code> with overviews of all your projects!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    performance: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${base.heading} font-semibold tracking-tight`}>Performance Tips</h2>
          <p className={`${base.subtext} text-sm sm:text-base leading-relaxed`}>Optimize QuackStack for large codebases.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>First Indexing</h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Small Projects (<100 files)', time: '10-30 seconds' },
                { title: 'Medium Projects (<1000 files)', time: '1-3 minutes' },
                { title: 'Large Projects (<5000 files)', time: '5-10 minutes' },
                { title: 'Huge Projects (5000+ files)', time: '10-30 minutes' },
              ].map(({ title, time }) => (
                <div key={title} className={`${base.card} border rounded-lg p-4`}>
                  <h4 className={`font-semibold ${base.highlight} text-sm mb-2`}>{title}</h4>
                  <p className={`text-xs ${base.subtext}`}>~{time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Optimization Strategies</h3>
            
            <div className="space-y-3">
              {[
                { title: 'Use .gitignore', desc: 'QuackStack respects common ignore patterns, but you can add custom ones to skip unnecessary files' },
                { title: 'Incremental Updates', desc: 'After first index, only changed files are re-indexed much faster!' },
                { title: 'Database Location', desc: 'Use a fast database (local or nearby region) for better search performance' },
                { title: 'Parallel Processing', desc: 'QuackStack uses worker threads for embedding generation to ensure your machine has adequate CPU' },
              ].map(({ title, desc }) => (
                <div key={title} className={`${base.card} border rounded-lg p-4`}>
                  <div className="flex items-start gap-3">
                    <div>
                      <h4 className={`font-semibold ${base.text} text-sm`}>{title}</h4>
                      <p className={`text-xs ${base.subtext} mt-1`}>{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Query Performance</h3>
            <p className={`${base.subtext} text-sm sm:text-base`}>After indexing, queries are typically instant:</p>
            
            <div className={`${base.card} border rounded-lg p-4`}>
              <ul className={`space-y-2 text-sm ${base.subtext}`}>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">✓</span>
                  <span>Semantic search: &lt;100ms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">✓</span>
                  <span>AI answer generation: 2-5 seconds (depends on AI provider)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">✓</span>
                  <span>Context file generation: 10-30 seconds</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-100 border-yellow-300'} border rounded-lg p-4`}>
            <div className="flex items-start gap-3">
              <Sparkles className={`w-5 h-5 ${base.highlight} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${base.highlight}`}>Pro Tip</p>
                <p className={`${base.text} text-sm mt-1`}>Index during coffee breaks! First-time indexing is a one-time cost, all subsequent queries are blazingly fast.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    troubleshooting: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${base.heading} font-semibold tracking-tight`}>Troubleshooting</h2>
          <p className={`${base.subtext} text-sm sm:text-base leading-relaxed`}>Common issues and their solutions.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Database Connection Issues</h3>
            
            <div className={`${isDark ? 'bg-red-400/10 border-red-400/30' : 'bg-red-100 border-red-300'} border rounded-lg p-4`}>
              <div className="flex items-start gap-3">
                <AlertCircle className={`w-5 h-5 ${isDark ? 'text-red-400' : 'text-red-600'} mt-0.5 shrink-0`} />
                <div>
                  <p className={`font-semibold ${isDark ? 'text-red-300' : 'text-red-700'} text-sm`}>Error: Cannot connect to database</p>
                  <p className={`${base.text} text-xs mt-2`}>Solutions:</p>
                  <ul className={`text-xs ${base.subtext} mt-1 space-y-1 ml-4`}>
                    <li>• Check your <code className={`${base.code} px-1 rounded`}>QUACKSTACK_DATABASE_URL</code> in .env</li>
                    <li>• Verify database is running and accessible</li>
                    <li>• Check firewall rules if using remote database</li>
                    <li>• Ensure database user has proper permissions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Missing API Key</h3>
            
            <div className={`${isDark ? 'bg-red-400/10 border-red-400/30' : 'bg-red-100 border-red-300'} border rounded-lg p-4`}>
              <div className="flex items-start gap-3">
                <AlertCircle className={`w-5 h-5 ${isDark ? 'text-red-400' : 'text-red-600'} mt-0.5 shrink-0`} />
                <div>
                  <p className={`font-semibold ${isDark ? 'text-red-300' : 'text-red-700'} text-sm`}>Error: No AI API key found</p>
                  <p className={`${base.text} text-xs mt-2`}>Solution:</p>
                  <p className={`text-xs ${base.subtext} mt-1`}>Add at least one AI provider key to your .env file:</p>
                  <SimpleCodeBlock code={`QUACKSTACK_OPENAI_KEY=sk-...`}/>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Stale Results</h3>
            
            <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-100 border-yellow-300'} border rounded-lg p-4`}>
              <div className="flex items-start gap-3">
                <AlertCircle className={`w-5 h-5 ${base.highlight} mt-0.5 shrink-0`} />
                <div>
                  <p className={`font-semibold ${base.highlight} text-sm`}>Issue: Search results are outdated</p>
                  <p className={`${base.text} text-xs mt-2`}>Solution:</p>
                  <CodeBlock code="quack --reindex" />
                  <p className={`text-xs ${base.subtext} mt-2`}>This clears the old index and rescans your entire codebase.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Slow Indexing</h3>
            
            <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-100 border-yellow-300'} border rounded-lg p-4`}>
              <div className="flex items-start gap-3">
                <AlertCircle className={`w-5 h-5 ${base.highlight} mt-0.5 shrink-0`} />
                <div>
                  <p className={`font-semibold ${base.highlight} text-sm`}>Issue: Indexing takes too long</p>
                  <p className={`${base.text} text-xs mt-2`}>Common causes:</p>
                  <ul className={`text-xs ${base.subtext} mt-1 space-y-1 ml-4`}>
                    <li>• Large codebase (5000+ files), this is normal</li>
                    <li>• Slow database connection, use local or nearby DB</li>
                    <li>• Limited CPU, embedding generation is CPU-intensive</li>
                  </ul>
                  <p className={`text-xs ${base.text} mt-2`}>Tips:</p>
                  <ul className={`text-xs ${base.subtext} mt-1 space-y-1 ml-4`}>
                    <li>• Add unnecessary directories to .gitignore</li>
                    <li>• Close other CPU-heavy applications</li>
                    <li>• First index is slow, subsequent runs are much faster!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Context Not Working</h3>
            
            <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-100 border-yellow-300'} border rounded-lg p-4`}>
              <div className="flex items-start gap-3">
                <AlertCircle className={`w-5 h-5 ${base.highlight} mt-0.5 shrink-0`} />
                <div>
                  <p className={`font-semibold ${base.highlight} text-sm`}>Issue: AI tool not recognizing context files</p>
                  <p className={`${base.text} text-xs mt-2`}>Checklist:</p>
                  <ul className={`text-xs ${base.subtext} mt-1 space-y-1 ml-4`}>
                    <li>• Verify files were created: <code className={`${base.code} px-1 rounded`}>ls -la | grep rules</code></li>
                    <li>• Restart your AI tool/IDE after generating context</li>
                    <li>• Check that context files are in project root directory</li>
                    <li>• For Aider: explicitly specify config with <code className={`${base.code} px-1 rounded`}>--config</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Still Having Issues?</h3>
            
            <div className={`${base.card} border rounded-lg p-4`}>
              <p className={`text-sm ${base.text} mb-3`}>Get help from the community:</p>
              <div className="space-y-2">
                <a 
                  href="https://github.com/woustachemax/quackstack/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${base.highlight} hover:opacity-80 text-xs flex items-center gap-2`}
                >
                  Report an issue on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  }

  return content[activeSection]
}