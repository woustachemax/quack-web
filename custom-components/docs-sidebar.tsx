import React, { useState, useEffect } from 'react'
import { ChevronRight, Home, BookOpen, Settings, Terminal, Sparkles, Code, Search, X } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { useTheme } from '@/contexts/ThemeContext'

const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Home,
    subsections: [
      { id: 'installation', title: 'Installation' },
      { id: 'setup', title: 'Setup & Configuration' },
      { id: 'first-run', title: 'Your First Run' }
    ]
  },
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    icon: BookOpen,
    subsections: [
      { id: 'how-it-works', title: 'How It Works' },
      { id: 'local-embeddings', title: 'Local Embeddings' },
      { id: 'database', title: 'Database Schema' }
    ]
  },
  {
    id: 'commands',
    title: 'Commands',
    icon: Terminal,
    subsections: [
      { id: 'interactive', title: 'Interactive Mode' },
      { id: 'context', title: 'Context Generation' },
      { id: 'watch', title: 'Watch Mode' },
      {id: 'readme', title: 'Generate README' },
      { id: 'reindex', title: 'Reindexing' }
    ]
  },
  {
    id: 'ai-providers',
    title: 'AI Providers',
    icon: Sparkles,
    subsections: [
      { id: 'openai', title: 'OpenAI' },
      { id: 'claude', title: 'Anthropic Claude' },
      { id: 'gemini', title: 'Google Gemini' },
      { id: 'deepseek', title: 'DeepSeek' },
      { id: 'mistral', title: 'Mistral AI' }
    ]
  },
  {
    id: 'integrations',
    title: 'AI Tool Integrations',
    icon: Code,
    subsections: [
      { id: 'cursor', title: 'Cursor' },
      { id: 'windsurf', title: 'Windsurf' },
      { id: 'cline', title: 'Cline' },
      { id: 'continue', title: 'Continue' },
      { id: 'aider', title: 'Aider' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Usage',
    icon: Settings,
    subsections: [
      { id: 'multiple-projects', title: 'Multiple Projects' },
      { id: 'performance', title: 'Performance Tips' },
      { id: 'troubleshooting', title: 'Troubleshooting' }
    ]
  }
]

export function DocsSidebar({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (id: string) => void }) {
  const { isDark } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchActive, setIsSearchActive] = useState(false)

  const allSubsections = sections.flatMap(section => 
    section.subsections.map(sub => ({
      ...sub,
      category: section.title,
      sectionId: section.id
    }))
  )

  const filteredSections = searchQuery.trim()
    ? sections.map(section => ({
        ...section,
        subsections: section.subsections.filter(sub =>
          sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.subsections.length > 0)
    : sections

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchActive(true)
        setTimeout(() => {
          document.getElementById('sidebar-search')?.focus()
        }, 100)
      }
      if (e.key === 'Escape' && isSearchActive) {
        setIsSearchActive(false)
        setSearchQuery('')
        document.getElementById('sidebar-search')?.blur()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isSearchActive])
  
  return (
    <Sidebar className={`${isDark ? 'bg-stone-900! border-stone-800!' : 'bg-stone-100! border-stone-300!'} [*]:bg-transparent!`}>
      <SidebarHeader className={`p-6 border-b ${isDark ? 'border-stone-800! bg-stone-900!' : 'border-stone-300! bg-stone-100!'}`}>
        <div className="flex items-center space-x-2 group cursor-pointer"
        onClick={()=>window.location.href='/'}>
          <img src={`${isDark?'/logo.svg':'/light-logo.svg'}`} alt='Logo' className='h-6 w-6 sm:h-8 sm:w-8'/>
          <span className="text-lg sm:text-xl font-medium">
            <span className={isDark ? 'text-stone-300!' : 'text-stone-700!'}>Quack</span>
            <span className={isDark ? 'text-yellow-400!' : 'text-yellow-600!'}>Stack</span>
          </span>
        </div>
        
        {!isSearchActive ? (
          <button
            onClick={() => setIsSearchActive(true)}
            className={`w-full mt-2 px-0 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-2 ${
              isDark 
                ? 'bg-transparent text-stone-400 hover:text-yellow-400' 
                : 'bg-transparent text-stone-600 hover:text-yellow-500'
            }`}
          >
            <span className="text-sm">Press</span>
            <kbd className={`text-xs px-1.5 py-0.5 rounded ${isDark ? 'bg-stone-700 text-stone-400' : 'bg-stone-200 text-stone-600'}`}>
              ⌘K
            </kbd>
            <span className="text-sm">to search</span>
          </button>
        ) : (
          <div className={`relative mt-4 ${isDark ? 'bg-stone-800/50' : 'bg-white/50'} rounded-lg border transition-all duration-200 ${isDark ? 'border-stone-700' : 'border-stone-300'}`}>
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`} />
            <input
              id="sidebar-search"
              type="text"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-10 py-2 text-sm bg-transparent outline-none ${
                isDark ? 'text-stone-200 placeholder-stone-500' : 'text-stone-900 placeholder-stone-400'
              }`}
            />
            <button
              onClick={() => {
                setIsSearchActive(false)
                setSearchQuery('')
              }}
              className={`absolute right-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-stone-400 hover:text-stone-300' : 'text-stone-600 hover:text-stone-700'}`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </SidebarHeader>
      
      <SidebarContent className={`p-4 ${isDark ? 'bg-stone-900!' : 'bg-stone-100!'} overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
        {filteredSections.map((section) => {
          const Icon = section.icon
          return (
            <SidebarGroup key={section.id}>
              <SidebarGroupLabel className={`${isDark ? 'text-yellow-400!' : 'text-yellow-600!'} text-xs uppercase tracking-wider font-semibold`}>
                <Icon className="w-4 h-4 mr-2" />
                {section.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.subsections.map((subsection) => (
                    <SidebarMenuItem key={subsection.id}>
                      <SidebarMenuButton
                        onClick={() => setActiveSection(subsection.id)}
                        isActive={activeSection === subsection.id}
                        className={`bg-transparent!
                          ${activeSection === subsection.id
                            ? isDark 
                              ? 'bg-white/5! text-yellow-400/80!' 
                              : 'bg-stone-800/5! text-yellow-600/80!'
                            : isDark
                              ? 'text-stone-300! hover:bg-white/5! hover:text-yellow-400/80!'
                              : 'text-stone-700! hover:bg-stone-800/5! hover:text-yellow-600/80!'
                          }
                        `}
                      >
                        <span>{subsection.title}</span>
                        {activeSection === subsection.id && (
                          <ChevronRight className="w-4 h-4 ml-auto" />
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}
        
        {filteredSections.length === 0 && (
          <div className={`text-center py-8 ${isDark ? 'text-stone-500' : 'text-stone-600'}`}>
            <p className="text-sm">No results found</p>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  )
}