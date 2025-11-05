import React from 'react'
import { AlertCircle, Sparkles } from 'lucide-react'
import { CodeBlock } from './code-block'
import { SimpleCodeBlock } from './simpler-code-block'

export function AdvancedUsageContent({ activeSection }: { activeSection: string }) {
  const content: Record<string, React.ReactElement> = {
    'multiple-projects': (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">Multiple Projects</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Manage multiple codebases with a single QuackStack database.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">How It Works</h3>
            <p className="text-stone-400/90 text-sm sm:text-base">Each project is isolated by its directory name in the database:</p>
            
            <div className="bg-stone-900 rounded-lg border border-stone-800 overflow-hidden">
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-stone-800/80 border-b border-stone-800">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-stone-500">terminal</span>
              </div>
              
              <div className="p-4 font-mono text-xs sm:text-sm space-y-3">
                <div className="text-stone-500"># Project A</div>
                <div className="flex items-center">
                  <span className="text-green-400">$</span>
                  <span className="ml-2 text-stone-300">cd ~/projects/my-app</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400">$</span>
                  <span className="ml-2 text-stone-300">quack</span>
                </div>
                <div className="text-stone-500"># Indexed as "my-app" in database</div>
                
                <div className="pt-2 text-stone-500"># Project B</div>
                <div className="flex items-center">
                  <span className="text-green-400">$</span>
                  <span className="ml-2 text-stone-300">cd ~/projects/api-server</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400">$</span>
                  <span className="ml-2 text-stone-300">quack</span>
                </div>
                <div className="text-stone-500"># Indexed as "api-server" in database</div>
                
                <div className="pt-2 text-stone-400"># Both share the same database but are isolated!</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Database Organization</h3>
            
            <div className="bg-stone-900 rounded-lg border border-stone-800 overflow-hidden">
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-stone-800/80 border-b border-stone-800">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-stone-500">database structure</span>
              </div>
              
              <div className="p-4 font-mono text-xs sm:text-sm">
                <div className="text-stone-400 space-y-1">
                  <div className="text-stone-300">codeSnippet table:</div>
                  <div className="ml-4 text-stone-400">├── id: 1, projectName: <span className="text-yellow-400">"my-app"</span>, content: "..."</div>
                  <div className="ml-4 text-stone-400">├── id: 2, projectName: <span className="text-yellow-400">"my-app"</span>, content: "..."</div>
                  <div className="ml-4 text-stone-400">├── id: 3, projectName: <span className="text-blue-400">"api-server"</span>, content: "..."</div>
                  <div className="ml-4 text-stone-400">└── id: 4, projectName: <span className="text-blue-400">"api-server"</span>, content: "..."</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Benefits</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div>
                  <p className="text-stone-300 text-sm font-medium">Centralized Database</p>
                  <p className="text-stone-400 text-xs mt-1">One database for all projects, easier to manage and backup</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div>
                  <p className="text-stone-300 text-sm font-medium">No Cross-Contamination</p>
                  <p className="text-stone-400 text-xs mt-1">Queries only search within the current project's code</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div>
                  <p className="text-stone-300 text-sm font-medium">Easy Switching</p>
                  <p className="text-stone-400 text-xs mt-1">Just cd to a different project and run quack, it just works!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Cleaning Up Projects</h3>
            <p className="text-stone-400/90 text-sm sm:text-base">If you want to remove a specific project from the database:</p>
            
            <div className="bg-stone-900 rounded-lg border border-stone-800 overflow-hidden">
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-stone-800/80 border-b border-stone-800">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-stone-500">psql</span>
              </div>
              
              <div className="p-4 font-mono text-xs sm:text-sm space-y-3">
                <div className="text-stone-500"># Connect to your database</div>
                <div className="flex items-center">
                  <span className="text-green-400">$</span>
                  <span className="ml-2 text-stone-300">psql $QUACKSTACK_DATABASE_URL</span>
                </div>
                
                <div className="pt-2 text-stone-500"># Delete project data</div>
                <div className="flex items-start">
                  <span className="text-blue-400">psql&gt;</span>
                  <span className="ml-2 text-stone-300">DELETE FROM "codeSnippet" WHERE "projectName" = 'old-project';</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-yellow-300">Global Context</p>
                <p className="text-stone-300 text-sm mt-1">QuackStack also maintains a global context file at <code className="bg-stone-800 px-2 py-0.5 rounded text-yellow-400">~/.quackstack/contexts.json</code> with overviews of all your projects!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    performance: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">Performance Tips</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Optimize QuackStack for large codebases.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">First Indexing</h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 text-sm mb-2">Small Projects (&lt;100 files)</h4>
                <p className="text-xs text-stone-400"> 10-30 seconds</p>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 text-sm mb-2">Medium Projects (&lt;1000 files)</h4>
                <p className="text-xs text-stone-400"> 1-3 minutes</p>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 text-sm mb-2">Large Projects (&lt;5000 files)</h4>
                <p className="text-xs text-stone-400"> 5-10 minutes</p>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 text-sm mb-2">Huge Projects (5000+ files)</h4>
                <p className="text-xs text-stone-400">10-30 minutes</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Optimization Strategies</h3>
            
            <div className="space-y-3">
              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="font-semibold text-stone-200 text-sm">Use .gitignore</h4>
                    <p className="text-xs text-stone-400 mt-1">QuackStack respects common ignore patterns, but you can add custom ones to skip unnecessary files</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="font-semibold text-stone-200 text-sm">Incremental Updates</h4>
                    <p className="text-xs text-stone-400 mt-1">After first index, only changed files are re-indexed much faster!</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="font-semibold text-stone-200 text-sm">Database Location</h4>
                    <p className="text-xs text-stone-400 mt-1">Use a fast database (local or nearby region) for better search performance</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="font-semibold text-stone-200 text-sm">Parallel Processing</h4>
                    <p className="text-xs text-stone-400 mt-1">QuackStack uses worker threads for embedding generation to ensure your machine has adequate CPU</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Query Performance</h3>
            <p className="text-stone-400/90 text-sm sm:text-base">After indexing, queries are typically instant:</p>
            
            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <ul className="space-y-2 text-sm text-stone-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span>Semantic search: &lt;100ms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span>AI answer generation: 2-5 seconds (depends on AI provider)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span>Context file generation: 10-30 seconds</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-yellow-300">Pro Tip</p>
                <p className="text-stone-300 text-sm mt-1">Index during coffee breaks! First-time indexing is a one-time cost, all subsequent queries are blazingly fast.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    troubleshooting: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">Troubleshooting</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Common issues and their solutions.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Database Connection Issues</h3>
            
            <div className="bg-red-400/10 border border-red-400/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-red-300 text-sm">Error: Cannot connect to database</p>
                  <p className="text-stone-300 text-xs mt-2">Solutions:</p>
                  <ul className="text-xs text-stone-400 mt-1 space-y-1 ml-4">
                    <li>• Check your <code className="bg-stone-800 px-1 rounded">QUACKSTACK_DATABASE_URL</code> in .env</li>
                    <li>• Verify database is running and accessible</li>
                    <li>• Check firewall rules if using remote database</li>
                    <li>• Ensure database user has proper permissions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Missing API Key</h3>
            
            <div className="bg-red-400/10 border border-red-400/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-red-300 text-sm">Error: No AI API key found</p>
                  <p className="text-stone-300 text-xs mt-2">Solution:</p>
                  <p className="text-xs text-stone-400 mt-1">Add at least one AI provider key to your .env file:</p>
                  <SimpleCodeBlock code={`QUACKSTACK_OPENAI_KEY=sk-...`}/>
                  </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Stale Results</h3>
            
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-yellow-300 text-sm">Issue: Search results are outdated</p>
                  <p className="text-stone-300 text-xs mt-2">Solution:</p>
                  <CodeBlock code="quack --reindex" />
                  <p className="text-xs text-stone-400 mt-2">This clears the old index and rescans your entire codebase.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Slow Indexing</h3>
            
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-yellow-300 text-sm">Issue: Indexing takes too long</p>
                  <p className="text-stone-300 text-xs mt-2">Common causes:</p>
                  <ul className="text-xs text-stone-400 mt-1 space-y-1 ml-4">
                    <li>• Large codebase (5000+ files), this is normal</li>
                    <li>• Slow database connection, use local or nearby DB</li>
                    <li>• Limited CPU, embedding generation is CPU-intensive</li>
                  </ul>
                  <p className="text-xs text-stone-300 mt-2">Tips:</p>
                  <ul className="text-xs text-stone-400 mt-1 space-y-1 ml-4">
                    <li>• Add unnecessary directories to .gitignore</li>
                    <li>• Close other CPU-heavy applications</li>
                    <li>• First index is slow, subsequent runs are much faster!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Context Not Working</h3>
            
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-yellow-300 text-sm">Issue: AI tool not recognizing context files</p>
                  <p className="text-stone-300 text-xs mt-2">Checklist:</p>
                  <ul className="text-xs text-stone-400 mt-1 space-y-1 ml-4">
                    <li>• Verify files were created: <code className="bg-stone-800 px-1 rounded">ls -la | grep rules</code></li>
                    <li>• Restart your AI tool/IDE after generating context</li>
                    <li>• Check that context files are in project root directory</li>
                    <li>• For Aider: explicitly specify config with <code className="bg-stone-800 px-1 rounded">--config</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Still Having Issues?</h3>
            
            <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
              <p className="text-sm text-stone-300 mb-3">Get help from the community:</p>
              <div className="space-y-2">
                <a 
                  href="https://github.com/woustachemax/quackstack/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 text-xs flex items-center gap-2"
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

  return content[activeSection] || null
}