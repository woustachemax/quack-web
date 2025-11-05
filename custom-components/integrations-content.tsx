import React from 'react'
import { Code, CheckCircle, Sparkles } from 'lucide-react'
import { CodeBlock } from './code-block'

export function IntegrationsContent({ activeSection }: { activeSection: string }) {
  const content: Record<string, React.ReactElement> = {
    cursor: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">Cursor Integration</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Give Cursor AI instant codebase context.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Setup</h3>
            <p className="text-stone-400/90 text-sm sm:text-base">In your project directory, run:</p>
            
            <CodeBlock code="quack --context" />
            
            <p className="text-stone-400/90 text-sm sm:text-base mt-4">This creates a <code className="bg-stone-800 px-2 py-0.5 rounded text-yellow-400">.cursorrules</code> file.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">How It Works</h3>
            
            <div className="space-y-3">
              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                 
                  <div>
                    <h4 className="font-semibold text-stone-200">Auto-Detection</h4>
                    <p className="text-sm text-stone-400 mt-1">Cursor automatically reads .cursorrules when you open the project</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  
                  <div>
                    <h4 className="font-semibold text-stone-200">Context Injection</h4>
                    <p className="text-sm text-stone-400 mt-1">Codebase overview and structure are injected into Cursor's context</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                 
                  <div>
                    <h4 className="font-semibold text-stone-200">Smart Suggestions</h4>
                    <p className="text-sm text-stone-400 mt-1">Cursor now understands your project structure and can make better suggestions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">What's Included</h3>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span className="text-stone-300">Project architecture overview</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span className="text-stone-300">Main entry points and flow</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span className="text-stone-300">Key functions and classes</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span className="text-stone-300">External dependencies</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span className="text-stone-300">Project structure tree</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-yellow-300">Pro Tip</p>
                <p className="text-stone-300 text-sm mt-1">Use <code className="bg-stone-800 px-2 py-0.5 rounded text-yellow-400">quack --watch</code> to keep context always fresh as you code!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    windsurf: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">Windsurf Integration</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Supercharge Windsurf with codebase knowledge.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Setup</h3>
            <p className="text-stone-400/90 text-sm sm:text-base">In your project directory, run:</p>
            
            <CodeBlock code="quack --context" />
            
            <p className="text-stone-400/90 text-sm sm:text-base mt-4">This creates a <code className="bg-stone-800 px-2 py-0.5 rounded text-yellow-400">.windsurfrules</code> file.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Benefits</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-300 text-sm font-medium">Context-Aware Completions</p>
                  <p className="text-stone-400 text-xs mt-1">Windsurf understands your project structure for better code suggestions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-300 text-sm font-medium">Faster Onboarding</p>
                  <p className="text-stone-400 text-xs mt-1">New team members can use Windsurf to understand the codebase instantly</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-300 text-sm font-medium">Better Refactoring</p>
                  <p className="text-stone-400 text-xs mt-1">Windsurf can suggest refactorings that respect your architecture</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-green-300">Zero Configuration</p>
                <p className="text-stone-300 text-sm mt-1">Windsurf automatically reads .windsurfrules - no additional setup needed!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    cline: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">Cline Integration</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Empower Cline with deep codebase understanding.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Setup</h3>
            <p className="text-stone-400/90 text-sm sm:text-base">In your project directory, run:</p>
            
            <CodeBlock code="quack --context" />
            
            <p className="text-stone-400/90 text-sm sm:text-base mt-4">This creates a <code className="bg-stone-800 px-2 py-0.5 rounded text-yellow-400">.clinerules</code> file.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Use Cases</h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 text-sm mb-2">Code Review</h4>
                <p className="text-xs text-stone-400">Cline can provide context-aware code reviews understanding your patterns</p>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 text-sm mb-2">Bug Fixing</h4>
                <p className="text-xs text-stone-400">Cline knows your codebase structure for faster debugging</p>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 text-sm mb-2">Feature Development</h4>
                <p className="text-xs text-stone-400">New features follow existing architectural patterns automatically</p>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 text-sm mb-2">Documentation</h4>
                <p className="text-xs text-stone-400">Cline can generate accurate docs based on actual code structure</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-yellow-300">Perfect for Teams</p>
                <p className="text-stone-300 text-sm mt-1">Share .clinerules in version control so everyone gets consistent AI assistance!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    continue: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">Continue Integration</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Enhance Continue with persistent codebase context.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Setup</h3>
            <p className="text-stone-400/90 text-sm sm:text-base">In your project directory, run:</p>
            
            <CodeBlock code="quack --context" />
            
            <p className="text-stone-400/90 text-sm sm:text-base mt-4">This creates <code className="bg-stone-800 px-2 py-0.5 rounded text-yellow-400">.continue/context.md</code> file.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Directory Structure</h3>
            
            <CodeBlock code={`.continue/
└── context.md    # Your codebase context`} />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">How Continue Uses Context</h3>
            
            <div className="space-y-3">
              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <h4 className="font-semibold text-stone-200 text-sm mb-2">Automatic Loading</h4>
                <p className="text-xs text-stone-400">Continue reads .continue/context.md and includes it in all AI interactions</p>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <h4 className="font-semibold text-stone-200 text-sm mb-2">Persistent Memory</h4>
                <p className="text-xs text-stone-400">Context persists across sessions - no need to re-explain your codebase</p>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <h4 className="font-semibold text-stone-200 text-sm mb-2">Smart Completions</h4>
                <p className="text-xs text-stone-400">Continue suggests code that fits your project's patterns and structure</p>
              </div>
            </div>
          </div>

          <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-green-300">VS Code Extension</p>
                <p className="text-stone-300 text-sm mt-1">Works seamlessly with the Continue VS Code extension - just install and go!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    aider: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">Aider Integration</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Give Aider codebase context for better CLI coding.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Setup</h3>
            <p className="text-stone-400/90 text-sm sm:text-base">In your project directory, run:</p>
            
            <CodeBlock code="quack --context" />
            
            <p className="text-stone-400/90 text-sm sm:text-base mt-4">This creates two files:</p>
            <ul className="text-sm text-stone-400 space-y-1 ml-4">
              <li>• <code className="bg-stone-800 px-2 py-0.5 rounded text-yellow-400">.aider.conf.yml</code> - Aider configuration</li>
              <li>• <code className="bg-stone-800 px-2 py-0.5 rounded text-yellow-400">.aider.context.md</code> - Codebase context</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Configuration Example</h3>
            
            <CodeBlock code={`# .aider.conf.yml
read:
  - .aider.context.md

model: gpt-4o-mini
edit-format: whole`} />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Using with Aider</h3>
            
            <CodeBlock code={`# Aider automatically reads .aider.conf.yml
aider

# Or explicitly specify config
aider --config .aider.conf.yml`} />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Benefits</h3>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span className="text-stone-300">Aider understands your project structure</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span className="text-stone-300">Better multi-file edits</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span className="text-stone-300">Context-aware refactoring</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span className="text-stone-300">Respects architectural patterns</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-yellow-300">CLI Power User?</p>
                <p className="text-stone-300 text-sm mt-1">Aider + QuackStack = The ultimate terminal-based coding experience with full codebase awareness!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  }

  return content[activeSection] || null
}