import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { VercelV0Chat } from "@/components/ui/v0-ai-chat"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar" // Import sidebar components
import { DashboardSidebar } from "@/components/dashboard-sidebar" // Import the new sidebar component
import { Separator } from "@/components/ui/separator" // Import Separator

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        {/* Dashboard Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-white/10 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4 bg-white/10" />
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">WA</span>
            </div>
            <span className="text-white font-semibold text-lg">Workflows AI Dashboard</span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button size="sm" className="bg-white text-black hover:bg-gray-200 text-sm px-4">
              <Plus className="w-4 h-4 mr-2" />
              New Workflow
            </Button>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 flex flex-col py-12 px-8">
          {/* VercelV0Chat Component */}
          <div className="mt-12 flex-1">
            <VercelV0Chat />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
