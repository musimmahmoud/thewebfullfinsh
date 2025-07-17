"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FloatingNav() {
  return (
    <nav className="w-full px-8 py-6 bg-black">
      {" "}
      {/* Removed fixed positioning and scroll effects */}
      <div className="flex justify-between items-center max-w-7xl mx-auto">
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
