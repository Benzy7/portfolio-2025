'use client' // if using Next 13 app directory

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { ThemeProviderProps as NextThemeProviderProps } from 'next-themes'

export const ThemeProvider = (props: NextThemeProviderProps) => {
  return <NextThemeProvider {...props} />
}
