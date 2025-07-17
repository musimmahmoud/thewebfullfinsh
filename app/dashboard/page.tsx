import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, Workflow, Users, Plus, ChevronDown } from "lucide-react"
import { createClient } from "@/utils/supabase/server" // Import server-side client
import { redirect } from "next/navigation"
import { signOut } from "@/app/auth/actions" // Import signOut action
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default async function DashboardPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/auth") // Redirect to login if no user session
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Dashboard Header */}
      <header className="py-6 px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">WA</span>
            </div>
            <span className="text-white font-semibold text-lg">Workflows AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent text-sm px-4 flex items-center gap-2"
                >
                  {user.email}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-950 border-gray-800 text-white">
                <DropdownMenuItem className="hover:bg-gray-800 cursor-pointer">Account</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-800" />
                <DropdownMenuItem className="hover:bg-gray-800 cursor-pointer">
                  <form action={signOut} className="w-full">
                    <button type="submit" className="w-full text-left">
                      Sign Out
                    </button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" className="bg-white text-black hover:bg-gray-200 text-sm px-4">
              <Plus className="w-4 h-4 mr-2" />
              New Workflow
            </Button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="max-w-7xl mx-auto py-12 px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome, Automator!</h1> {/* Display user email */}
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-gray-800/50 to-black/50 border border-gray-700/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Workflows</CardTitle>
              <Workflow className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,234</div>
              <p className="text-xs text-gray-400">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800/50 to-black/50 border border-gray-700/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Active Users</CardTitle>
              <Users className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">5,678</div>
              <p className="text-xs text-gray-400">+180 since last hour</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800/50 to-black/50 border border-gray-700/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Workflow Executions</CardTitle>
              <Activity className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">78,901</div>
              <p className="text-xs text-gray-400">+19% from last month</p>
            </CardContent>
          </Card>
        </div>
        {/* Recent Workflows Section */}
        <h2 className="text-3xl font-bold text-white mb-6">Recent Workflows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-gray-800/50 to-black/50 border border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-white">Stripe Payment Alert</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-sm">
              Sends Slack notification on new Stripe payments.
              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  View Workflow
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800/50 to-black/50 border border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-white">CRM Lead Automation</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-sm">
              Automates lead creation in CRM from form submissions.
              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  View Workflow
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800/50 to-black/50 border border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-white">Email Marketing Sequence</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-sm">
              Triggers email sequence for new subscribers.
              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  View Workflow
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
