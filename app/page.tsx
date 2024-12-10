import { Button } from "@/components/button";
import { CodePreview } from "@/components/code-preview";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Scrolling Text */}
      <div className="container mx-auto overflow-hidden py-6 whitespace-nowrap flex justify-between items-center gap-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={i % 2 === 0 ? "text-[#00FF9D]" : ""}>
            Convert code to PDF
          </span>
        ))}
      </div>

      {/* Code Preview Section */}
      <section className="container mx-auto px-4 py-16">
        <CodePreview />
      </section>

      {/* Scrolling Text */}
      <div className="container mx-auto overflow-hidden py-6 whitespace-nowrap flex justify-between items-center gap-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={i % 2 === 0 ? "text-[#00FF9D]" : ""}>
            Convert code to PDF
          </span>
        ))}
      </div>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Footer */}
      <footer className="bg-black text-white py-16 rounded-t-[39px]">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-6">
            Have questions or feedback? Reach out to our support team at
          </p>
          <Button variant="contact" showArrow={false}>
            Contact us
          </Button>
          <p className="mt-8 text-sm opacity-60">© 2024 HTML Converter</p>
        </div>
      </footer>
    </div>
  );
}
