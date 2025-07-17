import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export function createClient() {
  const cookieStore = cookies()

  // Create a supabase client on the server with project's credentials
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: any) {
        try {
          cookieStore.set({ name, value, ...options })
        } catch (error) {
          // The `cookies().set()` method can only be called from a Server Component or an Edge API Route.
          // This error is typically thrown when attempting to set a cookie from a Client Component.
          // For client-side cookie management, consider using `createBrowserClient`.
          console.warn("Could not set cookie from server component:", error)
        }
      },
      remove(name: string, options: any) {
        try {
          cookieStore.set({ name, value: "", ...options })
        } catch (error) {
          console.warn("Could not remove cookie from server component:", error)
        }
      },
    },
  })
}
