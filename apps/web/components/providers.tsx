"use client"

import * as React from "react"
import { ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { useAuth } from '@clerk/nextjs'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "")

/**
 * Wraps the application subtree with Convex + Clerk authentication providers.
 *
 * Provides the Convex client and Clerk `useAuth` hook to all descendant components using ConvexProviderWithClerk.
 *
 * @param children - React nodes to render inside the provider.
 * @returns The provider element wrapping `children`.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>

  )
}
