import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { ReactNode } from "react"
import { Target, MessageSquare, Bot } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-white">Built to cover your needs</h2>
          <p className="mt-4 text-gray-300">
            Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.
          </p>
        </div>
        <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 *:text-center md:mt-16">
          <Card className="group bg-gradient-to-br from-gray-800/50 to-black/50 border border-gray-700/50 backdrop-blur-sm hover:border-white/30 transition-all duration-300 relative overflow-hidden p-4">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <CardHeader className="pb-6 pt-8 relative z-10">
              <CardDecorator>
                <Bot className="size-6 text-white" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium text-white">AI Agent Mode</h3>
            </CardHeader>
            <CardContent className="relative z-10 px-6 pb-8">
              <p className="text-sm text-gray-300">
                Autonomous agents that build and adapt workflows using real-time data.
              </p>
            </CardContent>
          </Card>
          <Card className="group bg-gradient-to-br from-gray-800/50 to-black/50 border border-gray-700/50 backdrop-blur-sm hover:border-white/30 transition-all duration-300 relative overflow-hidden p-4">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <CardHeader className="pb-6 pt-8 relative z-10">
              <CardDecorator>
                <Target className="size-6 text-white" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium text-white">Intent Mapping</h3>
            </CardHeader>
            <CardContent className="relative z-10 px-6 pb-8">
              <p className="text-sm text-gray-300">Describe your goal — get full multi-step workflows instantly.</p>
            </CardContent>
          </Card>
          <Card className="group bg-gradient-to-br from-gray-800/50 to-black/50 border border-gray-700/50 backdrop-blur-sm hover:border-white/30 transition-all duration-300 relative overflow-hidden p-4">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <CardHeader className="pb-6 pt-8 relative z-10">
              <CardDecorator>
                <MessageSquare className="size-6 text-white" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium text-white">Chat Assistant</h3>
            </CardHeader>
            <CardContent className="relative z-10 px-6 pb-8">
              <p className="text-sm text-gray-300">Plan and edit workflows through simple AI chat.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 [--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
    <div className="bg-gray-800 absolute inset-0 m-auto flex size-12 items-center justify-center rounded-full border border-gray-700">
      {children}
    </div>
  </div>
)
