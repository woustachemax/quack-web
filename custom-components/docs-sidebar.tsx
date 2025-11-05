'use client'
import { ChevronRight, Home, BookOpen, Settings, Terminal, Sparkles, Code } from 'lucide-react'
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
  return (
    <Sidebar className="bg-stone-900 border-stone-800 [*]:bg-transparent!">
      <SidebarHeader className="p-6 border-b border-stone-800 bg-stone-900!">
        <div className="flex items-center space-x-2 group cursor-pointer"
        onClick={()=>window.location.href='/'}>
          <img src='/logo.svg' alt='Logo' className='h-6 w-6 sm:h-8 sm:w-8'/>
          <span className="text-lg sm:text-xl font-medium">
            <span className="text-stone-300">Quack</span>
            <span className="text-yellow-400">Stack</span>
          </span>
        </div>
        <p className="text-xs text-stone-400 mt-2">Documentation</p>
      </SidebarHeader>
      
      <SidebarContent className="p-4 bg-stone-900! overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <SidebarGroup key={section.id}>
              <SidebarGroupLabel className="text-yellow-400 text-xs uppercase tracking-wider font-semibold">
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
                            ? 'bg-white/5! text-yellow-400/80!'
                            : 'text-stone-300! hover:bg-white/5! hover:text-yellow-400/80!'
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
      </SidebarContent>
    </Sidebar>
  )
}