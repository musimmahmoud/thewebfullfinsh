import { FloatingNav } from "@/components/floating-nav"
import { HeroContent } from "@/components/hero-content"
import { FeaturesSection } from "@/components/features-section"
import { CtaSection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <FloatingNav />
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects - now subtle grayscale */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/20 dark:from-gray-900/20 via-gray-200/20 dark:via-gray-800/20 to-gray-100/20 dark:to-gray-900/20 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>

        <HeroContent />
        {/* PartnerLogos component removed */}
      </section>
      <FeaturesSection id="features" />
      <CtaSection />
      <FooterSection />
    </div>
  )
}
