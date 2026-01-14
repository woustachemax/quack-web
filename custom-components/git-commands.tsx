import { GitBranch, GitCommit, Users, Clock, FileCode, TrendingUp, History } from 'lucide-react'
import { CodeBlock } from './code-block'
import { useTheme } from '@/contexts/ThemeContext'

export function GitCommandsContent({ activeSection }: { activeSection: string }) {
  const { isDark } = useTheme()

  const content: Record<string, React.ReactElement> = {
    authors: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Contributor Statistics</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>View detailed statistics about all contributors in your project.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>View Contributors</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>See who's been working on your codebase:</p>
            
            <CodeBlock code="quack authors" />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Example Output</h3>
            
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
                <div className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  📊 Contributor Statistics
                </div>
                
                <div className="space-y-4 pt-2">
                  <div>
                    <div className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      1. Siddharth Thakkar <span className={`${isDark ? 'text-stone-500' : 'text-stone-600'}`}>(siddharth@example.com)</span>
                    </div>
                    <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'} ml-3`}>
                      247 commits | +15,432/-8,901 lines
                    </div>
                    <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} ml-3 text-xs`}>
                      Last active 2 days ago
                    </div>
                    <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} ml-3 text-xs`}>
                      Owns 43 files
                    </div>
                  </div>

                  <div>
                    <div className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      2. Max Woust <span className={`${isDark ? 'text-stone-500' : 'text-stone-600'}`}>(max@example.com)</span>
                    </div>
                    <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'} ml-3`}>
                      189 commits | +12,876/-6,543 lines
                    </div>
                    <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} ml-3 text-xs`}>
                      Last active 5 days ago
                    </div>
                    <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} ml-3 text-xs`}>
                      Owns 31 files
                    </div>
                  </div>

                  <div>
                    <div className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      3. Jane Doe <span className={`${isDark ? 'text-stone-500' : 'text-stone-600'}`}>(jane@example.com)</span>
                    </div>
                    <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'} ml-3`}>
                      92 commits | +7,234/-3,890 lines
                    </div>
                    <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} ml-3 text-xs`}>
                      Last active 14 days ago
                    </div>
                    <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} ml-3 text-xs`}>
                      Owns 18 files
                    </div>
                  </div>
                </div>

                <div className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'} pt-2`}>
                  Total: 3 contributors
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>What You'll See</h3>
            
            <div className="grid gap-3 sm:grid-cols-2">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-center gap-2">
                  <GitCommit className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'} text-sm`}>Total Commits</h4>
                </div>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Number of commits per author</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-center gap-2">
                  <TrendingUp className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'} text-sm`}>Lines Changed</h4>
                </div>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Lines added and removed</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-center gap-2">
                  <Clock className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'} text-sm`}>Recent Activity</h4>
                </div>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>When they last contributed</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-center gap-2">
                  <FileCode className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'} text-sm`}>File Ownership</h4>
                </div>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Files each author maintains</p>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <Users className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Team Insights</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>Understand who knows what parts of your codebase best. Perfect for code reviews and knowledge transfer!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    recent: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Recently Modified Files</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Track what's been changing in your codebase.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>View Recent Changes</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>See files modified in the last 7 days:</p>
            
            <CodeBlock code="quack recent" />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Custom Time Range</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Specify the number of days to look back:</p>
            
            <div className="space-y-3">
              <CodeBlock code="quack recent --days 30" />
              <CodeBlock code="quack recent -d 14" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Example Output</h3>
            
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
                <div className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  📝 Files modified in last 7 days
                </div>
                
                <div className="space-y-4 pt-2">
                  <div>
                    <div className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      1. src/lib/git-history.ts
                    </div>
                    <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} ml-3 text-xs`}>
                      Modified by Siddharth Thakkar 2 days ago
                    </div>
                    <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'} ml-3 text-xs`}>
                      "Add support for tracking file ownership"
                    </div>
                  </div>

                  <div>
                    <div className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      2. src/commands/search.ts
                    </div>
                    <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} ml-3 text-xs`}>
                      Modified by Max Woust 3 days ago
                    </div>
                    <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'} ml-3 text-xs`}>
                      "Improve semantic search accuracy with better chunking"
                    </div>
                  </div>

                  <div>
                    <div className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      3. README.md
                    </div>
                    <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} ml-3 text-xs`}>
                      Modified by Jane Doe 5 days ago
                    </div>
                    <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'} ml-3 text-xs`}>
                      "Update installation instructions"
                    </div>
                  </div>
                </div>

                <div className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'} pt-2`}>
                  Total: 3 files
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Information Displayed</h3>
            
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>File path</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Last author who modified it</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Days since last modification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} shrink-0`}>•</span>
                  <span>Commit message (truncated to 60 chars)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${isDark ? 'bg-green-400/10 border-green-400/30' : 'bg-green-400/20 border-green-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <Clock className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-700'}`}>Stay Updated</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>Perfect for catching up after a vacation or seeing what your team has been working on!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    gitInfo: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Repository Information</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Get a quick overview of your git repository.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>View Repository Info</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>See current branch, recent commits, and more:</p>
            
            <CodeBlock code="quack git-info" />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Example Output</h3>
            
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
                <div className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  🔍 Git Repository Info
                </div>
                
                <div className="pt-2 space-y-1">
                  <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                    Current Branch: <span className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>main</span>
                  </div>
                  <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                    Repository Root: <span className={`${isDark ? 'text-stone-500' : 'text-stone-600'}`}>/Users/dev/projects/quackstack</span>
                  </div>
                </div>

                <div className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'} pt-2`}>
                  📈 Recent Commits:
                </div>
                
                <div className="space-y-4 pt-2">
                  <div>
                    <div className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      1. Siddharth Thakkar <span className={`${isDark ? 'text-stone-500' : 'text-stone-600'}`}>(1/14/2026)</span>
                    </div>
                    <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'} ml-3`}>
                      Add git history integration for tracking code ownership
                    </div>
                    <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} ml-3 text-xs`}>
                      4 files changed
                    </div>
                  </div>

                  <div>
                    <div className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      2. Max Woust <span className={`${isDark ? 'text-stone-500' : 'text-stone-600'}`}>(1/13/2026)</span>
                    </div>
                    <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'} ml-3`}>
                      Improve semantic search with better embeddings
                    </div>
                    <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} ml-3 text-xs`}>
                      2 files changed
                    </div>
                  </div>

                  <div>
                    <div className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      3. Jane Doe <span className={`${isDark ? 'text-stone-500' : 'text-stone-600'}`}>(1/12/2026)</span>
                    </div>
                    <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'} ml-3`}>
                      Update documentation with new features
                    </div>
                    <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} ml-3 text-xs`}>
                      3 files changed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>What You'll See</h3>
            
            <div className="grid gap-3 sm:grid-cols-2">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-center gap-2">
                  <GitBranch className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'} text-sm`}>Current Branch</h4>
                </div>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Which branch you're on</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-center gap-2">
                  <FileCode className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'} text-sm`}>Repository Path</h4>
                </div>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Root directory location</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3 sm:col-span-2`}>
                <div className="flex items-center gap-2">
                  <History className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'} text-sm`}>Recent Commits</h4>
                </div>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Last 5 commits with author, message, and files changed</p>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-purple-400/10 border-purple-400/30' : 'bg-purple-400/20 border-purple-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <GitBranch className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>Quick Context</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>Get oriented fast when jumping between projects or branches!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  }

  return content[activeSection] || null
}