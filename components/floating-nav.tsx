"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "mt-4 bg-black/80 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-2xl border-0"
          : "mt-0 bg-transparent w-full px-8 py-6"
      }`}
    >
      <div
        className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? "max-w-6xl" : "max-w-7xl mx-auto"
        }`}
      >
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">WA</span>
            </div>
            <span className="text-white font-semibold text-lg whitespace-nowrap">Workflows AI</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          <Link
            href="/dashboard"
            className="text-gray-300 hover:text-white transition-colors text-sm whitespace-nowrap"
          >
            Dashboard
          </Link>
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors text-sm whitespace-nowrap">
            Features
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button asChild size="sm" className="bg-white text-black hover:bg-gray-200 text-sm px-4 whitespace-nowrap">
            <Link href="/auth">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
