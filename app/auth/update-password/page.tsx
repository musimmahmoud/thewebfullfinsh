"use client"

import type React from "react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { updateUserPassword } from "../actions" // Import the update password action

export default function UpdatePasswordPage() {
  const searchParams = useSearchParams()
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const msg = searchParams.get("message")
    if (msg) {
      setMessage(decodeURIComponent(msg))
    }
  }, [searchParams])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage(null)
    const formData = new FormData(event.currentTarget)
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.")
      return
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.")
      return
    }

    await updateUserPassword(formData)
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Modern geometric background pattern */}
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
            <CardTitle className="text-3xl font-bold text-white tracking-tight">Set New Password</CardTitle>
            <CardDescription className="text-gray-400 text-base">Enter your new password below.</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300 text-sm font-medium">
                  New Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your new password"
                  required
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200 rounded-xl py-3"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-300 text-sm font-medium">
                  Confirm New Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your new password"
                  required
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200 rounded-xl py-3"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 text-base py-3 rounded-xl font-semibold transition-all duration-200 mt-6"
              >
                Update Password
              </Button>
            </form>

            {message && <div className="text-center text-sm text-gray-400 pt-4">{message}</div>}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
