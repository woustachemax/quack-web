'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type ThemeContextType = {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDarkState] = useState(true) 

  useEffect(() => {
    const saved = localStorage.getItem('quackstack-theme')
    console.log("[ThemeProvider] Saved theme from localStorage:", saved)

    if (saved === 'light') {
      setIsDarkState(false)
      console.log("[ThemeProvider] Setting theme to light")
    } else {
      setIsDarkState(true)
      console.log("[ThemeProvider] Setting theme to dark (default)")
    }
  }, [])

  useEffect(() => {
    console.log("[ThemeProvider] Applying theme, isDark:", isDark)
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('quackstack-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const setIsDark = (value: boolean) => {
    console.log("[ThemeProvider] setIsDark called with value:", value)
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
