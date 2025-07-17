"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

export async function signUp(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.error("Sign up error:", error)
    redirect("/auth?message=Error signing up: " + error.message)
  }

  revalidatePath("/", "layout")
  redirect("/auth?message=Check your email to confirm your account")
}

export async function signIn(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error("Sign in error:", error)
    redirect("/auth?message=Invalid credentials")
  }

  revalidatePath("/", "layout")
  redirect("/dashboard")
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath("/", "layout")
  redirect("/auth")
}

export async function resetPassword(formData: FormData) {
  const supabase = await createClient()
  const email = formData.get("email") as string

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/reset-password`,
  })

  if (error) {
    console.error("Reset password error:", error)
    redirect("/auth?message=Error sending reset email")
  }

  redirect("/auth?message=Password reset email sent")
}

export async function updatePassword(formData: FormData) {
  const supabase = await createClient()
  const password = formData.get("password") as string

  const { error } = await supabase.auth.updateUser({
    password: password,
  })

  if (error) {
    console.error("Update password error:", error)
    redirect("/auth/reset-password?message=Error updating password")
  }

  revalidatePath("/", "layout")
  redirect("/dashboard?message=Password updated successfully")
}

// ──────────────────────────────────────────────────────────────
// TEMPORARY alias for legacy imports (update-password page) ----
export async function updateUserPassword(formData: FormData) {
  // Re-use the current implementation
  return updatePassword(formData)
}
