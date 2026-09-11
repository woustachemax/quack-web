import { ClipboardList, FileCode, Bot, GitBranch, ShieldCheck, ShieldAlert } from 'lucide-react'
import { CodeBlock } from './code-block'
import { useTheme } from '@/contexts/ThemeContext'

export function PlanCommandsContent({ activeSection }: { activeSection: string }) {
  const { isDark } = useTheme()

  const content: Record<string, React.ReactElement> = {
    planCreate: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Create a Plan</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Store the plan an agent was approved to execute, so QuackStack can check what it actually touched against it later.</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Create From a Plan Doc</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Point it at the markdown plan you approved before the agent started:</p>

            <CodeBlock code="quack plan create <path-to-plan.md>" />
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

              <div className="p-4 font-mono text-xs sm:text-sm space-y-2">
                <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'}`}>Extracting plan structure...</div>
                <div className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'} pt-2`}>Plan #4 approved</div>
                <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'} pt-2`}>Expected files (1):</div>
                <div className={`${isDark ? 'text-stone-400' : 'text-stone-600'}`}>&nbsp;&nbsp;- src/orders.ts</div>
                <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'} pt-2`}>Expected functions (2):</div>
                <div className={`${isDark ? 'text-stone-400' : 'text-stone-600'}`}>&nbsp;&nbsp;- createOrder</div>
                <div className={`${isDark ? 'text-stone-400' : 'text-stone-600'}`}>&nbsp;&nbsp;- markShipped</div>
                <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} pt-2`}>Run &apos;quack plan check 4&apos; after the agent commits.</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>What It Does</h3>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-center gap-2">
                  <Bot className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'} text-sm`}>One Structured Call</h4>
                </div>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Your configured AI provider extracts a JSON list of files and functions from the plan text, nothing else.</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-center gap-2">
                  <FileCode className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'} text-sm`}>Stored as Approved</h4>
                </div>
                <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Creating the plan record is what marks it approved in this workflow.</p>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-blue-400/10 border-blue-400/30' : 'bg-blue-400/20 border-blue-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <Bot className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Picking a provider</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>Use the root flags before the subcommand: <code className={`${isDark ? 'bg-stone-800 text-blue-300' : 'bg-stone-200 text-blue-700'} px-1.5 py-0.5 rounded`}>quack --provider anthropic plan create plan.md</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    planCheck: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Check a Plan</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Diff git history since the plan was created against what it expected to touch. Unplanned is the bucket that matters.</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Run It After the Agent Commits</h3>

            <div className="space-y-3">
              <CodeBlock code="quack plan check" />
              <CodeBlock code="quack plan check 4" />
              <CodeBlock code="quack plan check --strict" />
            </div>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>With no id it checks the most recently created plan for this project. <code className={`${isDark ? 'bg-stone-800 text-yellow-400' : 'bg-stone-200 text-yellow-600'} px-1.5 py-0.5 rounded`}>--strict</code> exits non-zero when anything unplanned was touched, for use in CI or a hook.</p>
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

              <div className="p-4 font-mono text-xs sm:text-sm space-y-1">
                <div className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>📋 Checking plan #6</div>
                <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'} pb-2`}>1 commit since plan creation</div>

                <div className={`${isDark ? 'text-stone-300' : 'text-stone-700'}`}>Files</div>
                <div className={`${isDark ? 'text-green-400' : 'text-green-600'}`}>&nbsp;&nbsp;Matched (3)</div>
                <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'}`}>&nbsp;&nbsp;&nbsp;&nbsp;- lib/agent-threads.ts</div>
                <div className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} pt-1`}>&nbsp;&nbsp;Missed, planned not touched (0)</div>
                <div className={`${isDark ? 'text-red-400' : 'text-red-600'} pt-1`}>&nbsp;&nbsp;Unplanned, touched not in plan (27)</div>
                <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'}`}>&nbsp;&nbsp;&nbsp;&nbsp;- lib/search-service.ts</div>
                <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'}`}>&nbsp;&nbsp;&nbsp;&nbsp;- prisma/schema.prisma</div>
                <div className={`${isDark ? 'text-stone-500' : 'text-stone-600'}`}>&nbsp;&nbsp;&nbsp;&nbsp;- ...25 more</div>

                <div className={`${isDark ? 'text-red-400' : 'text-red-600'} pt-3`}>⚠️  27 unplanned file(s), 34 unplanned function(s)</div>
              </div>
            </div>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Real output from checking a 3-file plan against an agent commit that quietly touched 30 files, taken while dogfooding on an unrelated project.</p>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>The Three Buckets</h3>

            <div className="space-y-3">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-start justify-between">
                  <code className={`${isDark ? 'text-green-400' : 'text-green-600'} text-sm`}>matched</code>
                </div>
                <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>In the plan, and actually touched.</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-start justify-between">
                  <code className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>missed</code>
                </div>
                <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>In the plan, but never touched.</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-start justify-between">
                  <code className={`${isDark ? 'text-red-400' : 'text-red-600'} text-sm`}>unplanned</code>
                </div>
                <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Touched, but not in the plan. This is the one that matters.</p>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-green-400/10 border-green-400/30' : 'bg-green-400/20 border-green-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <GitBranch className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-700'}`}>Reindex is optional</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>It reads Milestone 1&apos;s commit data when available, and falls back to resolving hunks against the AST index live for anything not yet reindexed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    planHook: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Pre-push Hook</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Close the loop: run the plan check automatically on every push instead of remembering to run it by hand.</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Install It</h3>

            <div className="space-y-3">
              <CodeBlock code="quack plan install-hook" />
              <CodeBlock code="quack plan install-hook --strict" />
            </div>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Without <code className={`${isDark ? 'bg-stone-800 text-yellow-400' : 'bg-stone-200 text-yellow-600'} px-1.5 py-0.5 rounded`}>--strict</code> the hook warns on push. With it, the push is blocked when something unplanned was touched.</p>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>What Gets Written</h3>

            <div className={`${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-300'} rounded-lg border overflow-hidden`}>
              <div className={`flex items-center justify-between px-3 sm:px-4 py-2 ${isDark ? 'bg-stone-800/80 border-stone-800' : 'bg-stone-100 border-stone-300'} border-b`}>
                <span className={`text-xs ${isDark ? 'text-stone-500' : 'text-stone-600'}`}>.git/hooks/pre-push</span>
              </div>
              <div className="p-4 font-mono text-xs sm:text-sm space-y-1">
                <div className={`${isDark ? 'text-stone-400' : 'text-stone-600'}`}>#!/bin/sh</div>
                <div className={`${isDark ? 'text-stone-200' : 'text-stone-800'}`}>quack plan check --strict</div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
              <div className="flex items-center gap-2">
                <ShieldCheck className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'} text-sm`}>Protects Existing Hooks</h4>
              </div>
              <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Refuses to overwrite a pre-push hook it did not create, unless you pass --force.</p>
            </div>

            <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
              <div className="flex items-center gap-2">
                <ClipboardList className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'} text-sm`}>Checks the Latest Plan</h4>
              </div>
              <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>The hook always runs plain &apos;quack plan check&apos;, which defaults to whichever plan you created most recently.</p>
            </div>
          </div>

          <div className={`${isDark ? 'bg-red-400/10 border-red-400/30' : 'bg-red-400/20 border-red-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <ShieldAlert className={`w-5 h-5 ${isDark ? 'text-red-400' : 'text-red-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-red-300' : 'text-red-700'}`}>--force overwrites</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>Only pass <code className={`${isDark ? 'bg-stone-800 text-red-300' : 'bg-stone-200 text-red-700'} px-1.5 py-0.5 rounded`}>--force</code> if you mean to replace whatever pre-push hook is already installed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  }

  return content[activeSection] || null
}
