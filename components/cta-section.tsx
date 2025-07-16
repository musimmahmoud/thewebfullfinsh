import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm rounded-3xl border border-white/10 p-12 shadow-2xl shadow-black/50">
        <Badge variant="outline" className="mb-8 border-gray-700 text-white bg-gray-900 backdrop-blur-sm px-4 py-2">
          <Sparkles className="w-4 h-4 mr-2" />
          Ready to Get Started?
        </Badge>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transform Your Ideas into
          <br />
          <span className="text-white">Powerful Automations</span> Today
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of users who are already automating their workflows with AI.
          <br />
          Start building your first workflow in minutes, not hours.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-black hover:bg-gray-200 px-10 py-4 text-lg font-medium rounded-xl"
        >
          <Link href="/auth">
            Start Building Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
