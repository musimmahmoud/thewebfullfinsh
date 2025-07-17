import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { VercelV0Chat } from "@/components/ui/v0-ai-chat" // Import the new component

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Dashboard Header */}
      <header className="py-6 px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">WA</span>
            </div>
            <span className="text-white font-semibold text-lg">Workflows AI Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-white text-black hover:bg-gray-200 text-sm px-4">
              <Plus className="w-4 h-4 mr-2" />
              New Workflow
            </Button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="max-w-7xl mx-auto py-12 px-8">
        {/* The "Welcome, Automator!" heading was here and has been removed. */}

        {/* VercelV0Chat Component */}
        <div className="mt-12">
          <VercelV0Chat />
        </div>
      </main>
    </div>
  )
}
