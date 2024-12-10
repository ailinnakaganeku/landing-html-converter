import React from "react";
import Image from "next/image";
import { Button } from "./button";

export function HowItWorks() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16 relative">
        How It Works Section
        <Image
          src="/0.png"
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
              src="/2.png"
              alt="Paste your HTML code"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <p className="max-w-[70%] mx-auto">
            Paste your HTML code into the designated area
          </p>
        </div>
        <div className="text-center">
          <div className="relative mb-6">
            <Image
              src="/1.png"
              alt="Generate PDF"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <p className="max-w-[70%] mx-auto">
            Click &apos;Generate PDF&apos; and watch as your HTML code
            transforms into a sleek PDF
          </p>
        </div>
        <div className="text-center">
          <div className="relative mb-6">
            <Image
              src="/3.png"
              alt="Download and share"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <p className="max-w-[70%] mx-auto">
            Download your PDF and share your content effortlessly
          </p>
        </div>
      </div>
      <div className="text-center mt-16">
        <Button>Get Started Now</Button>
      </div>
    </section>
  );
}
