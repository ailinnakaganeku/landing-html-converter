import React from "react";
import { Button } from "./button";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold mb-6 leading-tight">
        <span className="text-[#00FF9D]">Transform</span> Your HTML Code
        <br />
        into Polished PDFs <span className="bg-[#00FF9D] px-2">Instantly!</span>
      </h1>
      <p className="text-lg mb-10 max-w-2xl mx-auto">
        Effortlessly convert your HTML code to professional-looking PDF
        documents with our user-friendly online tool.
      </p>
      <Button>Get Started Now</Button>
    </section>
  );
}
