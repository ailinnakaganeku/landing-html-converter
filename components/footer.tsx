import React from "react";
import { Button } from "./button";

export function Footer() {
  return (
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
  );
}
