'use client'

import { useState } from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { DocsSidebar } from '@/custom-components/docs-sidebar'
import { ContentSection } from '@/custom-components/content-section'
export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('installation')

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-stone-900">
        <DocsSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="flex-1 p-6 sm:p-8 lg:p-12 max-w-4xl">
          <div className="lg:hidden mb-6">
            <SidebarTrigger className="text-yellow-400 hover:text-yellow-300" />
          </div>
          <ContentSection activeSection={activeSection} />
        </main>
      </div>
    </SidebarProvider>
  )
}