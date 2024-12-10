import { CodePreview } from "@/components/code-preview";
import { Footer } from "@/components/footer";
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
      <Footer />
    </div>
  );
}
