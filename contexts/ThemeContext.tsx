'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type ThemeContextType = {
  isDark: boolean
  setIsDark: (value: boolean | 'system') => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDarkState] = useState(false)
  const [mode, setMode] = useState<'light' | 'dark' | 'system'>('system')

  useEffect(() => {
    const saved = localStorage.getItem('quackstack-theme')

    if (saved === 'dark' || saved === 'light') {
      setMode(saved)
      setIsDarkState(saved === 'dark')
    } else {
      setMode('system')
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkState(systemDark)
    }
  }, [])

  useEffect(() => {
    if (mode !== 'system') return

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => setIsDarkState(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [mode])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const setIsDark = (value: boolean | 'system') => {
    if (value === 'system') {
      localStorage.removeItem('quackstack-theme')
      setMode('system')
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkState(systemDark)
    } else {
      setMode(value ? 'dark' : 'light')
      setIsDarkState(value)
      localStorage.setItem('quackstack-theme', value ? 'dark' : 'light')
    }
  }

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
