'use client'
import React from 'react'
import { Lock, Database, Zap } from 'lucide-react'
import { SimpleCodeBlock } from './simpler-code-block'
import { useTheme } from '@/contexts/ThemeContext'

export function CoreConceptsContent({ activeSection }: { activeSection: string }) {
  const { isDark } = useTheme()
  
  const content: Record<string, React.ReactElement> = {
    'how-it-works': (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>How It Works</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Understanding QuackStack's architecture and workflow.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>The QuackStack Pipeline</h3>
            
            <div className="space-y-4">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Scanning</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>QuackStack recursively scans your project directory, intelligently ignoring common patterns like node_modules, .git, dist, and build folders.</p>
                  </div>
                </div>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Parsing</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>For JS/TS files, we use AST (Abstract Syntax Tree) parsing to extract functions and classes with their context. Other languages use intelligent chunking strategies.</p>
                  </div>
                </div>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Local Embedding</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Vector embeddings are generated entirely on your machine using local models. No API calls = complete privacy!</p>
                  </div>
                </div>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Storage</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Embeddings and metadata are stored in your PostgreSQL database, organized by project name for easy isolation.</p>
                  </div>
                </div>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Semantic Search</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>When you ask a question, it's converted to a vector and compared against stored embeddings using cosine similarity.</p>
                  </div>
                </div>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>AI-Powered Answers</h4>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Top matching code snippets are sent to your chosen AI provider (OpenAI, Claude, etc.) to generate conversational answers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'local-embeddings': (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Local Embeddings</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Understanding QuackStack's privacy-first approach to code embeddings.</p>
        </div>
        
        <div className="space-y-8">
          <div className={`${isDark ? 'bg-green-400/10 border-green-400/30' : 'bg-green-400/20 border-green-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <Lock className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-600'}`}>100% Private</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>All embeddings are generated locally on your machine. Your codebase never leaves your infrastructure during the indexing process.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>What Are Embeddings?</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>Embeddings are numerical representations of text (vectors) that capture semantic meaning. Similar code snippets have similar vectors, enabling semantic search.</p>
            
            <SimpleCodeBlock code={`// Example: Converting code to embeddings
function greet(name) {
  return "Hello, " + name;
}

// Becomes a vector like:
[0.234, -0.891, 0.445, ... 768 dimensions]

// Similar code has similar vectors!`} />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Privacy Model</h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className={`${isDark ? 'bg-stone-800/50 border-yellow-400/30' : 'bg-stone-100/50 border-yellow-500/40'} border rounded-lg p-4`}>
                <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} flex items-center gap-2`}>
                  <Lock className="w-4 h-4" />
                  Local Processing
                </h4>
                <ul className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-2 space-y-1 list-disc list-inside`}>
                  <li>Code scanning</li>
                  <li>Embedding generation</li>
                  <li>Vector storage</li>
                  <li>Semantic search</li>
                </ul>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-yellow-400/30' : 'bg-stone-100/50 border-yellow-500/40'} border rounded-lg p-4`}>
                <h4 className={`font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} flex items-center gap-2`}>
                  <Zap className="w-4 h-4" />
                  API Calls
                </h4>
                <ul className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-2 space-y-1 list-disc list-inside`}>
                  <li>Your natural language query</li>
                  <li>Retrieved code snippets only</li>
                  <li>Conversational answer generation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-400/20 border-yellow-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <Database className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`}>Your Data, Your Infrastructure</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>Embeddings are stored in YOUR PostgreSQL database. You have complete control over your data and can delete it anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    database: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className={`text-2xl sm:text-3xl ${isDark ? 'text-yellow-300/80' : 'text-yellow-600/80'} font-semibold tracking-tight`}>Database Schema</h2>
          <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base leading-relaxed`}>Understanding how QuackStack stores your code embeddings.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>The CodeSnippet Model</h3>
            <p className={`${isDark ? 'text-stone-400/90' : 'text-stone-600/90'} text-sm sm:text-base`}>QuackStack uses a single table to store all code embeddings with rich metadata:</p>
            
            <SimpleCodeBlock code={`model codeSnippet {
  id           Int      @id @default(autoincrement())
  content      String
  embedding    Json
  filePath     String
  projectName  String
  language     String?
  functionName String?
  lineStart    Int?
  lineEnd      Int?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  @@index([projectName])
}`} />
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>Field Descriptions</h3>
            
            <div className="space-y-3">
              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-start justify-between">
                  <code className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>embedding</code>
                  <span className={`text-xs ${isDark ? 'text-stone-500' : 'text-stone-600'}`}>JSON</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>768-dimensional vector stored as JSON array. Used for semantic similarity search.</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-start justify-between">
                  <code className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>projectName</code>
                  <span className={`text-xs ${isDark ? 'text-stone-500' : 'text-stone-600'}`}>String</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Uses current directory name. Allows multiple projects to share one database.</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-start justify-between">
                  <code className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>functionName</code>
                  <span className={`text-xs ${isDark ? 'text-stone-500' : 'text-stone-600'}`}>String?</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Extracted from AST parsing for JS/TS. Helps identify specific functions/classes.</p>
              </div>

              <div className={`${isDark ? 'bg-stone-800/50 border-stone-800' : 'bg-stone-100/50 border-stone-300'} border rounded-lg p-3`}>
                <div className="flex items-start justify-between">
                  <code className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} text-sm`}>lineStart/lineEnd</code>
                  <span className={`text-xs ${isDark ? 'text-stone-500' : 'text-stone-600'}`}>Int?</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'} mt-1`}>Track exact location in source file for precise code references.</p>
              </div>
            </div>
          </div>

          <div className={`${isDark ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-yellow-400/20 border-yellow-500/40'} border rounded-lg p-4`}>
            <div className="flex items-start space-x-3">
              <Database className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mt-0.5 shrink-0`} />
              <div>
                <p className={`font-semibold ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`}>Project Isolation</p>
                <p className={`${isDark ? 'text-stone-300' : 'text-stone-700'} text-sm mt-1`}>Each project gets its own namespace via projectName. Run QuackStack in different directories to index multiple projects in the same database!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  }

  return content[activeSection] || null
}