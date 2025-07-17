"use server"

import { createClient } from "@/utils/supabase/server"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error("Sign-in error:", error.message)
    return redirect(`/auth?message=${encodeURIComponent("Could not authenticate user. Check your credentials.")}`)
  }

  return redirect("/dashboard")
}

export async function signUp(formData: FormData) {
  const origin = headers().get("origin")
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const supabase = createClient()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    console.error("Sign-up error:", error.message)
    return { success: false, message: "Could not create user. " + error.message, email: "" }
  }

  // Return success and the email used for the client to display
  return { success: true, message: "Check your email to verify your account.", email }
}

export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error("Sign-out error:", error.message)
  }

  return redirect("/auth")
}

export async function resetPasswordForEmail(formData: FormData) {
  const email = formData.get("email") as string
  const origin = headers().get("origin")
  const supabase = createClient()

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/update-password`,
  })

  if (error) {
    console.error("Password reset request error:", error.message)
    return redirect(`/auth?message=${encodeURIComponent("Error requesting password reset. " + error.message)}`)
  }

  return redirect(`/auth?message=${encodeURIComponent("Password reset email sent. Check your inbox.")}`)
}

export async function updateUserPassword(formData: FormData) {
  const password = formData.get("password") as string
  const supabase = createClient()

  const { error } = await supabase.auth.updateUser({ password })

  if (error) {
    console.error("Update password error:", error.message)
    return redirect(`/auth/update-password?message=${encodeURIComponent("Error updating password. " + error.message)}`)
  }

  return redirect(`/dashboard?message=${encodeURIComponent("Your password has been updated successfully!")}`)
}

export async function signInWithOAuth(provider: "github") {
  const origin = headers().get("origin")
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    console.error("OAuth sign-in error:", error.message)
    return redirect(`/auth?message=${encodeURIComponent("Error with OAuth sign-in. " + error.message)}`)
  }

  // Supabase will redirect to data.url, which then redirects to redirectTo
  return redirect(data.url)
}
