"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { motion } from "framer-motion"
import { Github, Eye, EyeOff, Loader2 } from "lucide-react"
import { signIn, signUp, resetPassword } from "./actions"
import { createClient } from "@/utils/supabase/client"

export default function AuthPage() {
  const searchParams = useSearchParams()
  const [isLogin, setIsLogin] = useState(true)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [messageType, setMessageType] = useState<"success" | "error">("error")

  useEffect(() => {
    const msg = searchParams.get("message")
    if (msg) {
      setMessage(msg)
      setMessageType(msg.includes("Error") || msg.includes("Invalid") ? "error" : "success")
    }
  }, [searchParams])

  const handleGitHubSignIn = async () => {
    setIsLoading(true)
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setMessage("Error signing in with GitHub")
      setMessageType("error")
    }
    setIsLoading(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setMessage(null)

    const formData = new FormData(event.currentTarget)

    try {
      if (showForgotPassword) {
        await resetPassword(formData)
      } else if (isLogin) {
        await signIn(formData)
      } else {
        await signUp(formData)
      }
    } catch (error) {
      console.error("Auth error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-lg"
      >
        <Card className="bg-gray-950 border border-gray-800 shadow-2xl p-8 md:p-10 rounded-2xl">
          <CardHeader className="text-center mb-8 space-y-4">
            <CardTitle className="text-3xl font-bold text-white tracking-tight">
              {showForgotPassword ? "Reset Password" : isLogin ? "Welcome back" : "Join Workflows AI"}
            </CardTitle>
            <CardDescription className="text-gray-400 text-base">
              {showForgotPassword
                ? "Enter your email to receive a password reset link"
                : isLogin
                  ? "Sign in to continue to your dashboard"
                  : "Create your account to get started"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {message && (
              <Alert
                className={`${messageType === "error" ? "border-red-500 bg-red-500/10" : "border-green-500 bg-green-500/10"}`}
              >
                <AlertDescription className={messageType === "error" ? "text-red-400" : "text-green-400"}>
                  {message}
                </AlertDescription>
              </Alert>
            )}

            {!showForgotPassword && (
              <>
                <Button
                  variant="outline"
                  onClick={handleGitHubSignIn}
                  disabled={isLoading}
                  className="w-full bg-white text-black border-white hover:bg-gray-200 text-base py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-3"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Github className="w-5 h-5" />}
                  <span>Continue with GitHub</span>
                </Button>

                <div className="relative">
                  <Separator className="bg-gray-800" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-gray-950 px-4 text-gray-500 text-sm">or continue with email</span>
                  </div>
                </div>
              </>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 text-sm font-medium">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200 rounded-xl py-3"
                />
              </div>

              {!showForgotPassword && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-gray-300 text-sm font-medium">
                      Password
                    </Label>
                    {isLogin && (
                      <button
                        type="button"
                        onClick={() => setShowForgotPassword(true)}
                        className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-sm"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      required
                      disabled={isLoading}
                      className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200 rounded-xl py-3 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-black hover:bg-gray-200 text-base py-3 rounded-xl font-semibold transition-all duration-200 mt-6"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                {showForgotPassword ? "Send reset link" : isLogin ? "Sign in" : "Sign up"}
              </Button>
            </form>

            <div className="text-center text-sm text-gray-400 pt-4">
              {showForgotPassword ? (
                <button
                  onClick={() => setShowForgotPassword(false)}
                  className="text-white hover:text-gray-300 font-semibold transition-colors duration-200"
                >
                  Back to Sign In
                </button>
              ) : isLogin ? (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-white hover:text-gray-300 font-semibold transition-colors duration-200"
                  >
                    Sign up for free
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-white hover:text-gray-300 font-semibold transition-colors duration-200"
                  >
                    Sign in
                  </button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
