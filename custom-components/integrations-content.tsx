import React from 'react'
import { Code, CheckCircle, Sparkles } from 'lucide-react'
import { CodeBlock } from './code-block'
import { SimpleCodeBlock } from './simpler-code-block'
import { useTheme } from '@/contexts/ThemeContext'

export function IntegrationsContent({ activeSection }: { activeSection: string }) {
  const { isDark } = useTheme()

  const base = {
    heading: isDark ? 'text-yellow-300/80' : 'text-yellow-600/80',
    subtext: isDark ? 'text-stone-400/90' : 'text-stone-600/90',
    text: isDark ? 'text-stone-300' : 'text-stone-700',
    card: isDark
      ? 'bg-stone-800/50 border-stone-800'
      : 'bg-stone-100 border-stone-300',
    cardAlt: isDark
      ? 'bg-stone-700/40 border-stone-700'
      : 'bg-stone-100/80 border-stone-300',
    highlight: isDark ? 'text-yellow-400' : 'text-yellow-600',
  }

  const content: Record<string, React.ReactElement> = {
    cursor: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${base.heading} font-semibold tracking-tight`}>Cursor Integration</h2>
          <p className={`${base.subtext} text-sm sm:text-base leading-relaxed`}>Give Cursor AI instant codebase context.</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Setup</h3>
            <p className={`${base.subtext} text-sm sm:text-base`}>In your project directory, run:</p>
            <CodeBlock code="quack --context" />
            <p className={`${base.subtext} text-sm sm:text-base mt-4`}>This creates a <code className={`${isDark ? 'bg-stone-800':'bg-stone-200'} px-2 py-0.5 rounded ${base.highlight}`}>.cursorrules</code> file.</p>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>How It Works</h3>
            <div className="space-y-3">
              <div className={`${base.card} border rounded-lg p-4`}>
                <h4 className={`font-semibold ${base.text}`}>Auto-Detection</h4>
                <p className={`${base.subtext} text-sm mt-1`}>Cursor reads .cursorrules on project open</p>
              </div>

              <div className={`${base.card} border rounded-lg p-4`}>
                <h4 className={`font-semibold ${base.text}`}>Context Injection</h4>
                <p className={`${base.subtext} text-sm mt-1`}>Project overview is injected into Cursor's context</p>
              </div>

              <div className={`${base.card} border rounded-lg p-4`}>
                <h4 className={`font-semibold ${base.text}`}>Smart Suggestions</h4>
                <p className={`${base.subtext} text-sm mt-1`}>Cursor understands your structure for better suggestions</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>What's Included</h3>
            <div className="space-y-2">
              {[
                'Project architecture overview',
                'Main entry points and flow',
                'Key functions and classes',
                'External dependencies',
                'Project structure tree',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle className={`w-4 h-4 text-green-600 shrink-0`} />
                  <span className={base.text}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-100 border-yellow-300'} border rounded-lg p-4`}>
            <div className="flex items-start gap-3">
              <Sparkles className={`w-5 h-5 ${base.highlight} mt-0.5 shrink-0`} />
              <div>
                <p className={`${base.highlight} font-semibold`}>Pro Tip</p>
                <p className={`${base.text} text-sm mt-1`}>Use <code className={`${isDark ? 'bg-stone-800' : 'bg-stone-200'} px-2 py-0.5 rounded ${base.highlight}`}>quack --watch</code> to keep context fresh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    windsurf: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${base.heading} font-semibold tracking-tight`}>Windsurf Integration</h2>
          <p className={`${base.subtext} text-sm sm:text-base leading-relaxed`}>Supercharge Windsurf with codebase knowledge.</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Setup</h3>
            <p className={`${base.subtext} text-sm sm:text-base`}>In your project directory, run:</p>
            <CodeBlock code="quack --context" />
            <p className={`${base.subtext} text-sm sm:text-base mt-4`}>This creates a <code className={`${isDark ? 'bg-stone-800':'bg-stone-200'} px-2 py-0.5 rounded ${base.highlight}`}>.windsurfrules</code> file.</p>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Benefits</h3>
            <div className="space-y-3">
              {[
                { title: 'Context-Aware Completions', desc: 'Windsurf uses your structure to improve suggestions' },
                { title: 'Faster Onboarding', desc: 'New team members understand the codebase instantly' },
                { title: 'Better Refactoring', desc: 'Suggests refactorings that respect your architecture' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <Code className={`w-5 h-5 ${base.highlight} shrink-0 mt-0.5`} />
                  <div>
                    <p className={`${base.text} text-sm font-medium`}>{title}</p>
                    <p className={`${base.subtext} text-xs mt-1`}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${isDark ? 'bg-green-400/10 border-green-400/30' : 'bg-green-100 border-green-300'} border rounded-lg p-4`}>
            <div className="flex items-start gap-3">
              <CheckCircle className={`w-5 h-5 text-green-600 mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-800'}`}>Zero Configuration</p>
                <p className={`${base.text} text-sm mt-1`}>Windsurf reads .windsurfrules automatically</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    cline: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${base.heading} font-semibold tracking-tight`}>Cline Integration</h2>
          <p className={`${base.subtext} text-sm sm:text-base leading-relaxed`}>Empower Cline with deep codebase understanding.</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Setup</h3>
            <p className={`${base.subtext} text-sm sm:text-base`}>In your project directory, run:</p>
            <CodeBlock code="quack --context" />
            <p className={`${base.subtext} text-sm sm:text-base mt-4`}>This creates a <code className={`${isDark ? 'bg-stone-800':'bg-stone-200'} px-2 py-0.5 rounded ${base.highlight}`}>.clinerules</code> file.</p>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Use Cases</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Code Review', desc: 'Context-aware reviews understanding your patterns' },
                { title: 'Bug Fixing', desc: 'Knows your codebase structure for faster debugging' },
                { title: 'Feature Development', desc: 'New features follow existing architectural patterns' },
                { title: 'Documentation', desc: 'Generate accurate docs based on actual code structure' },
              ].map(({ title, desc }) => (
                <div key={title} className={`${base.card} border rounded-lg p-4`}>
                  <h4 className={`font-semibold ${base.highlight} text-sm mb-2`}>{title}</h4>
                  <p className={`${base.subtext} text-xs`}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-100 border-yellow-300'} border rounded-lg p-4`}>
            <div className="flex items-start gap-3">
              <Sparkles className={`w-5 h-5 ${base.highlight} mt-0.5 shrink-0`} />
              <div>
                <p className={`${base.highlight} font-semibold`}>Perfect for Teams</p>
                <p className={`${base.text} text-sm mt-1`}>Share .clinerules in version control for consistent assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    continue: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${base.heading} font-semibold tracking-tight`}>Continue Integration</h2>
          <p className={`${base.subtext} text-sm sm:text-base leading-relaxed`}>Enhance Continue with persistent codebase context.</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Setup</h3>
            <p className={`${base.subtext} text-sm sm:text-base`}>In your project directory, run:</p>
            <CodeBlock code="quack --context" />
            <p className={`${base.subtext} text-sm sm:text-base mt-4`}>This creates <code className={`${isDark ? 'bg-stone-800':'bg-stone-200'} px-2 py-0.5 rounded ${base.highlight}`}>.continue/context.md</code></p>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Directory Structure</h3>
            <SimpleCodeBlock code={`.continue/\n└── context.md`} />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>How Continue Uses Context</h3>
            <div className="space-y-3">
              {[
                { title: 'Automatic Loading', desc: 'Continue reads context and includes it in all AI interactions' },
                { title: 'Persistent Memory', desc: 'Context persists across sessions without re-explaining' },
                { title: 'Smart Completions', desc: 'Suggests code that fits your project patterns and structure' },
              ].map(({ title, desc }) => (
                <div key={title} className={`${base.card} border rounded-lg p-4`}>
                  <h4 className={`font-semibold ${base.text} text-sm mb-2`}>{title}</h4>
                  <p className={`${base.subtext} text-xs`}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${isDark ? 'bg-green-400/10 border-green-400/30' : 'bg-green-100 border-green-300'} border rounded-lg p-4`}>
            <div className="flex items-start gap-3">
              <CheckCircle className={`w-5 h-5 text-green-600 mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-800'}`}>VS Code Extension</p>
                <p className={`${base.text} text-sm mt-1`}>Full integration with persistent project context</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    aider: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${base.heading} font-semibold tracking-tight`}>Aider Integration</h2>
          <p className={`${base.subtext} text-sm sm:text-base leading-relaxed`}>Give Aider codebase context for better CLI coding.</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Setup</h3>
            <p className={`${base.subtext} text-sm sm:text-base`}>In your project directory, run:</p>
            <CodeBlock code="quack --context" />
            <p className={`${base.subtext} text-sm sm:text-base mt-4`}>This creates two files:</p>
            <ul className={`text-sm ${base.subtext} space-y-1 ml-4`}>
              <li>• <code className={`${isDark ? 'bg-stone-800':'bg-stone-200'} px-2 py-0.5 rounded ${base.highlight}`}>.aider.conf.yml</code></li>
              <li>• <code className={`${isDark ? 'bg-stone-800':'bg-stone-200'} px-2 py-0.5 rounded ${base.highlight}`}>.aider.context.md</code></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Configuration Example</h3>
            <SimpleCodeBlock
              code={`# .aider.conf.yml
read:
  - .aider.context.md

model: gpt-4o-mini
edit-format: whole`}
            />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Using with Aider</h3>
            <SimpleCodeBlock
              code={`# Aider automatically reads .aider.conf.yml
aider

# Or explicitly specify config
aider --config .aider.conf.yml`}
            />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${base.text}`}>Benefits</h3>
            <div className="space-y-2">
              {[
                'Aider understands your project structure',
                'Better multi-file edits',
                'Context-aware refactoring',
                'Respects architectural patterns',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                  <span className={base.text}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-100 border-yellow-300'} border rounded-lg p-4`}>
            <div className="flex items-start gap-3">
              <Sparkles className={`w-5 h-5 ${base.highlight} mt-0.5 shrink-0`} />
              <div>
                <p className={`${base.highlight} font-semibold`}>CLI Power User?</p>
                <p className={`${base.text} text-sm mt-1`}>
                  Aider + QuackStack = The ultimate terminal-based coding experience with full codebase awareness!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  }

  return content[activeSection]
}