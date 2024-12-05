import Image from 'next/image'
import { Button } from '@/components/button'
import { CodePreview } from '@/components/code-preview'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="bg-[#00FF9D] px-3 py-1.5 border-2 border-black font-bold text-sm">
          HTML CONVERTER
        </div>
        <div className="bg-[#00FF9D] px-3 py-1.5 border-2 border-black font-bold text-sm">
          HTML CONVERTER
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          <span className="text-[#00FF9D]">Transform</span> Your HTML Code
          <br />
          into Polished PDFs <span className="bg-[#00FF9D] px-2">Instantly!</span>
        </h1>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Effortlessly convert your HTML code to professional-looking PDF documents with our user-friendly online tool.
        </p>
        <Button>Get Started Now</Button>
      </section>

      {/* Scrolling Text */}
      <div className="w-full overflow-hidden py-6 whitespace-nowrap">
        <div className="animate-scroll inline-flex gap-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className={i % 2 === 0 ? "text-[#00FF9D]" : ""}>
              Convert code to PDF
            </span>
          ))}
        </div>
      </div>

      {/* Code Preview Section */}
      <section className="container mx-auto px-4 py-16">
        <CodePreview />
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          How It Works Section
          <Image
            src="/Scribble.png"
            alt=""
            width={200}
            height={20}
            className="absolute left-1/2 transform -translate-x-1/2 mt-2"
          />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="relative mb-6">
              <Image
                src="/Hand coding-bro 1.png"
                alt="Paste your HTML code"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
            <p className="font-bold">
              Paste your HTML code into the designated area
            </p>
          </div>
          <div className="text-center">
            <div className="relative mb-6">
              <Image
                src="/Files sent-rafiki 1.png"
                alt="Generate PDF"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
            <p className="font-bold">
              Click &apos;Generate PDF&apos; and watch as your HTML code transforms into a sleek PDF
            </p>
          </div>
          <div className="text-center">
            <div className="relative mb-6">
              <Image
                src="/Download-bro 1.png"
                alt="Download and share"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
            <p className="font-bold">
              Download your PDF and share your content effortlessly
            </p>
          </div>
        </div>
        <div className="text-center mt-16">
          <Button>Get Started Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 rounded-t-[39px]">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-6">
            Have questions or feedback? Reach out to our support team at
          </p>
          <Button variant="contact" showArrow={false}>Contact us</Button>
          <p className="mt-8 text-sm opacity-60">
            © 2024 HTML Converter
          </p>
        </div>
      </footer>
    </div>
  )
}

