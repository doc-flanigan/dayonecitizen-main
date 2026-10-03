'use client'

import { createContext, useContext, type ReactNode } from 'react'

/**
 * Server-computed "is a Free Fly running" flag, handed down from the root layout.
 * The banner starts from this value so server and client render the same HTML
 * (no hydration mismatch), then re-checks the clock in an effect.
 */
const FreeFlyActiveContext = createContext(false)

export function useServerFreeFlyActive(): boolean {
  return useContext(FreeFlyActiveContext)
}

export default function FreeFlyStatusProvider({
  active,
  children,
}: {
  active: boolean
  children: ReactNode
}) {
  return <FreeFlyActiveContext.Provider value={active}>{children}</FreeFlyActiveContext.Provider>
}
