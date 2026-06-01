'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type ThemeContextType = {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDarkState] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('quackstack-theme')
    if (saved === 'dark') {
      setIsDarkState(true)
    } else {
      setIsDarkState(false)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('quackstack-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const setIsDark = (value: boolean) => {
    setIsDarkState(value)
    localStorage.setItem('quackstack-theme', value ? 'dark' : 'light')
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