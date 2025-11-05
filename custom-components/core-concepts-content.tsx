import React from 'react'
import { Lock, Database, Zap } from 'lucide-react'
import { CodeBlock } from './code-block'
import { SimpleCodeBlock } from './simpler-code-block'

export function CoreConceptsContent({ activeSection }: { activeSection: string }) {
  const content: Record<string, React.ReactElement> = {
    'how-it-works': (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">How It Works</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Understanding QuackStack's architecture and workflow.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">The QuackStack Pipeline</h3>
            
            <div className="space-y-4">
              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                 
                  <div>
                    <h4 className="font-semibold text-stone-200">Scanning</h4>
                    <p className="text-sm text-stone-400 mt-1">QuackStack recursively scans your project directory, intelligently ignoring common patterns like node_modules, .git, dist, and build folders.</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
               
                  <div>
                    <h4 className="font-semibold text-stone-200">Parsing</h4>
                    <p className="text-sm text-stone-400 mt-1">For JS/TS files, we use AST (Abstract Syntax Tree) parsing to extract functions and classes with their context. Other languages use intelligent chunking strategies.</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
               
                  <div>
                    <h4 className="font-semibold text-stone-200">Local Embedding</h4>
                    <p className="text-sm text-stone-400 mt-1">Vector embeddings are generated entirely on your machine using local models. No API calls = complete privacy!</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                 
                  <div>
                    <h4 className="font-semibold text-stone-200">Storage</h4>
                    <p className="text-sm text-stone-400 mt-1">Embeddings and metadata are stored in your PostgreSQL database, organized by project name for easy isolation.</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                 
                  <div>
                    <h4 className="font-semibold text-stone-200">Semantic Search</h4>
                    <p className="text-sm text-stone-400 mt-1">When you ask a question, it's converted to a vector and compared against stored embeddings using cosine similarity.</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  
                  <div>
                    <h4 className="font-semibold text-stone-200">AI-Powered Answers</h4>
                    <p className="text-sm text-stone-400 mt-1">Top matching code snippets are sent to your chosen AI provider (OpenAI, Claude, etc.) to generate conversational answers.</p>
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
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">Local Embeddings</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Understanding QuackStack's privacy-first approach to code embeddings.</p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Lock className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-green-300">100% Private</p>
                <p className="text-stone-300 text-sm mt-1">All embeddings are generated locally on your machine. Your codebase never leaves your infrastructure during the indexing process.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">What Are Embeddings?</h3>
            <p className="text-stone-400/90 text-sm sm:text-base">Embeddings are numerical representations of text (vectors) that capture semantic meaning. Similar code snippets have similar vectors, enabling semantic search.</p>
            
              <SimpleCodeBlock code={`// Example: Converting code to embeddings
function greet(name) {
  return "Hello, " + name;
}

// Becomes a vector like:
[0.234, -0.891, 0.445, ... 768 dimensions]

// Similar code has similar vectors!`} />
            </div>
          

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">Privacy Model</h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-stone-800/50 border border-yellow-400/30 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Local Processing
                </h4>
                <ul className="text-sm text-stone-400 mt-2 space-y-1 list-disc list-inside">
                  <li>Code scanning</li>
                  <li>Embedding generation</li>
                  <li>Vector storage</li>
                  <li>Semantic search</li>
                </ul>
              </div>

              <div className="bg-stone-800/50 border border-yellow-400/30 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  API Calls
                </h4>
                <ul className="text-sm text-stone-400 mt-2 space-y-1 list-disc list-inside">
                  <li>Your natural language query</li>
                  <li>Retrieved code snippets only</li>
                  <li>Conversational answer generation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Database className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-yellow-300">Your Data, Your Infrastructure</p>
                <p className="text-stone-300 text-sm mt-1">Embeddings are stored in YOUR PostgreSQL database. You have complete control over your data and can delete it anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    database: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl text-yellow-300/80 font-semibold tracking-tight">Database Schema</h2>
          <p className="text-stone-400/90 text-sm sm:text-base leading-relaxed">Understanding how QuackStack stores your code embeddings.</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-stone-200">The CodeSnippet Model</h3>
            <p className="text-stone-400/90 text-sm sm:text-base">QuackStack uses a single table to store all code embeddings with rich metadata:</p>
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
            <h3 className="text-xl font-semibold text-stone-200">Field Descriptions</h3>
            
            <div className="space-y-3">
              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-3">
                <div className="flex items-start justify-between">
                  <code className="text-yellow-400 text-sm">embedding</code>
                  <span className="text-xs text-stone-500">JSON</span>
                </div>
                <p className="text-sm text-stone-400 mt-1">768-dimensional vector stored as JSON array. Used for semantic similarity search.</p>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-3">
                <div className="flex items-start justify-between">
                  <code className="text-yellow-400 text-sm">projectName</code>
                  <span className="text-xs text-stone-500">String</span>
                </div>
                <p className="text-sm text-stone-400 mt-1">Uses current directory name. Allows multiple projects to share one database.</p>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-3">
                <div className="flex items-start justify-between">
                  <code className="text-yellow-400 text-sm">functionName</code>
                  <span className="text-xs text-stone-500">String?</span>
                </div>
                <p className="text-sm text-stone-400 mt-1">Extracted from AST parsing for JS/TS. Helps identify specific functions/classes.</p>
              </div>

              <div className="bg-stone-800/50 border border-stone-800 rounded-lg p-3">
                <div className="flex items-start justify-between">
                  <code className="text-yellow-400 text-sm">lineStart/lineEnd</code>
                  <span className="text-xs text-stone-500">Int?</span>
                </div>
                <p className="text-sm text-stone-400 mt-1">Track exact location in source file for precise code references.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Database className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-yellow-300">Project Isolation</p>
                <p className="text-stone-300 text-sm mt-1">Each project gets its own namespace via projectName. Run QuackStack in different directories to index multiple projects in the same database!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  }

  return content[activeSection] || null
}