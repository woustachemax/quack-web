'use client'
import React from 'react'
import { Sparkles, Check } from 'lucide-react'
import { CodeBlock } from './code-block'
import { CoreConceptsContent } from './core-concepts-content'
import { CommandsContent } from './commands-content'
import { AIProvidersContent } from './ai-providers-content'
import { IntegrationsContent } from './integrations-content'
import { AdvancedUsageContent } from './advanced-usage-content'
import { SimpleCodeBlock } from './simpler-code-block'
import { useTheme } from '@/contexts/ThemeContext'

export function ContentSection({ activeSection }: { activeSection: string }) {
  const { isDark } = useTheme()
  
  const gettingStartedContent: Record<string, React.ReactElement> = {
    installation: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Installation</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Get QuackStack up and running in minutes.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Global Install (Recommended)</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Install QuackStack globally to use it in any project:</p>
            
            <CodeBlock code={`npm install -g quackstack`} />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Verify Installation</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Check that QuackStack is installed correctly:</p>
            
            <CodeBlock code="quack --help" />
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-400/20 border-yellow-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <Sparkles className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`}>Pro Tip</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>After installation, navigate to any project directory and run <code className={`${isDark ? 'bg-stone-800 text-yellow-400' : 'bg-stone-200 text-yellow-600'} px-2 py-0.5 rounded`}>quack</code> to get started!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    setup: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Setup & Configuration</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Configure QuackStack for your project.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Database Setup</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>QuackStack requires PostgreSQL to store embeddings. Free options include:</p>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800 hover:border-yellow-400/30' : 'bg-stone-100/50 border-stone-300 hover:border-yellow-500/40'} border rounded-lg p-4 transition-colors`}>
                <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>Neon</h4>
                <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Serverless Postgres with generous free tier</p>
                <a href="https://neon.tech" target="_blank" className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm hover:underline mt-2 inline-block`}>
                  Get started 
                </a>
              </div>
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800 hover:border-yellow-400/30' : 'bg-stone-100/50 border-stone-300 hover:border-yellow-500/40'} border rounded-lg p-4 transition-colors`}>
                <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>Supabase</h4>
                <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Open source Firebase alternative with Postgres</p>
                <a href="https://supabase.com" target="_blank" className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm hover:underline mt-2 inline-block`}>
                  Get started 
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Environment Variables</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Create a <code className={`${isDark ? 'bg-stone-800 text-yellow-400' : 'bg-stone-200 text-yellow-600'} px-2 py-0.5 rounded`}>.env</code> file in your project root:</p>
            
            <SimpleCodeBlock code={`QUACKSTACK_DATABASE_URL=postgresql://user:pass@host:port/dbname
QUACKSTACK_OPENAI_KEY=sk-...`} />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Initialize Database</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Run these commands to set up the database schema:</p>
            
            <CodeBlock code={`npx prisma generate && npx prisma db push`} />
          </div>

          <div className={`${isDark ? 'bg-green-400/10 border-green-400/30' : 'bg-green-400/20 border-green-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <Check className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-600'}`}>You're all set!</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>QuackStack is now configured. Run <code className={`${isDark ? 'bg-stone-800 text-green-400' : 'bg-stone-200 text-green-600'} px-2 py-0.5 rounded`}>quack</code> to start exploring your codebase.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'first-run': (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Your First Run</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Let's explore what happens when you run QuackStack for the first time.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Starting QuackStack</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Navigate to your project directory and run:</p>
            
            <CodeBlock code="quack" />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>What Happens Next?</h3>
            
            <div className="space-y-4">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Indexing</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>QuackStack scans your codebase, finding all relevant files while ignoring node_modules, .git, etc.</p>
                  </div>
                </div>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Parsing & Chunking</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Code is intelligently parsed using AST for JS/TS, extracting functions and classes.</p>
                  </div>
                </div>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">              
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Local Embedding Generation</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Vector embeddings are generated locally - no API calls, complete privacy!</p>
                  </div>
                </div>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Interactive REPL</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Start asking questions! The REPL stays open until you press Ctrl+C.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-400/20 border-yellow-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <Sparkles className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`}>Next Steps</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>After your first run, only changed files will be re-indexed, making subsequent runs much faster!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  }

  const coreConcepts = ['how-it-works', 'local-embeddings', 'database']
  const commands = ['interactive', 'context', 'watch', 'readme', 'reindex']
  const aiProviders = ['openai', 'claude', 'gemini', 'deepseek', 'mistral']
  const integrations = ['cursor', 'windsurf', 'cline', 'continue', 'aider']
  const advanced = ['multiple-projects', 'performance', 'troubleshooting']

  if (coreConcepts.includes(activeSection)) {
    return <CoreConceptsContent activeSection={activeSection} />
  }
  
  if (commands.includes(activeSection)) {
    return <CommandsContent activeSection={activeSection} />
  }
  
  if (aiProviders.includes(activeSection)) {
    return <AIProvidersContent activeSection={activeSection} />
  }
  
  if (integrations.includes(activeSection)) {
    return <IntegrationsContent activeSection={activeSection} />
  }
  
  if (advanced.includes(activeSection)) {
    return <AdvancedUsageContent activeSection={activeSection} />
  }

  return gettingStartedContent[activeSection] || gettingStartedContent.installation
}