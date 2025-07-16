"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

export default function LoginPage() {
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
            <CardTitle className="text-3xl font-bold text-white tracking-tight">Welcome back</CardTitle>
            <CardDescription className="text-gray-400 text-base">Sign in to continue to your dashboard</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* GitHub Sign In Button */}
            <Button
              variant="outline"
              className="w-full bg-white text-black border-white hover:bg-gray-200 text-base py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-3"
            >
              <Github className="w-5 h-5" />
              <span>Continue with GitHub</span>
            </Button>

            <div className="relative">
              <Separator className="bg-gray-800" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-gray-950 px-4 text-gray-500 text-sm">or continue with email</span>
              </div>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 text-sm font-medium">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200 rounded-xl py-3"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-300 text-sm font-medium">
                    Password
                  </Label>
                  <Link href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200 rounded-xl py-3"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 text-base py-3 rounded-xl font-semibold transition-all duration-200 mt-6"
              >
                Sign in
              </Button>
            </form>

            <div className="text-center text-sm text-gray-400 pt-4">
              Don't have an account?{" "}
              <Link href="#" className="text-white hover:text-gray-300 font-semibold transition-colors duration-200">
                Sign up for free
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
