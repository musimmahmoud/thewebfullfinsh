export function FooterSection() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">WA</span>
              </div>
              <span className="text-white font-semibold text-lg">Workflows AI</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building the future of automation with AI-powered n8n workflow generation and seamless integrations.
            </p>
          </div>
          {/* Product, Company, and Support sections were removed as per previous request */}
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Workflows AI. All rights reserved. Automate smarter, not harder.</p>
        </div>
      </div>
    </footer>
  )
}
