"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./components/button";

export default function LandingPage() {
  return (
    <div className="animated-grid-background flex min-h-screen flex-col items-center justify-center text-center text-white selection:bg-white selection:text-black">
      <div className="content-wrapper flex flex-col items-center justify-center p-4 w-full">
        {/* Main Hero Section */}
        <main className="flex flex-col items-center justify-center flex-1 py-20 md:py-32">
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight">
              <span className="bg-white text-black px-2 sm:px-3 md:px-4 py-1 rounded-md">Urban-NW</span>
              <span className="text-white">.js</span>
            </h1>
          </div>

          <p className="mt-5 mb-10 max-w-2xl text-xl text-neutral-300">
            In Kombination mit modernen Technologien wie React, TypeScript und TailwindCSS eröffnet NW.js einen neuen, effizienten Weg zur Entwicklung plattformübergreifender Desktop-Anwendungen – mit
            denselben Tools und Workflows wie bei der modernen Webentwicklung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-600 px-8 py-6 text-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              onClick={() => (window.location.href = "https://react.dev/")}
            >
              React
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="default"
              size="lg"
              className="bg-white hover:bg-neutral-200 text-black px-8 py-6 text-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              onClick={() => (window.location.href = "https://nwjs.io/")}
            >
              NW.js
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
