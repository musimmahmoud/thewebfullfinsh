import Link from "next/link"
import { ArrowRight, Sparkles, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroContent() {
  return (
    <div className="max-w-6xl mx-auto text-center relative z-10">
      <Badge variant="outline" className="mb-8 border-gray-700 text-white bg-gray-900 backdrop-blur-sm px-4 py-2">
        <Sparkles className="w-4 h-4 mr-2" />
        Automate, integrate & optimize your n8n workflows
      </Badge>

      <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
        Automate faster with
        <br />
        <span className="text-white">AI-powered</span>
        <br />
        n8n workflows
      </h1>

      <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        Built for automation enthusiasts, loved by developers. Transform your integration workflow with intelligent n8n
        workflow generation and seamless deployment.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          asChild
          size="lg"
          className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-medium rounded-xl"
        >
          <Link href="/auth">
            Generate Workflows
            <Code2 className="ml-2 w-5 h-5" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-gray-700 text-white hover:bg-gray-900 px-8 py-4 text-lg bg-gray-950 backdrop-blur-sm rounded-xl"
        >
          <Link href="/auth">
            Watch The Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
      {/* Removed the "Optimized for modern development • Free forever" paragraph */}
    </div>
  )
}
