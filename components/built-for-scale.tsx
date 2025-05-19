// components/built-for-scale.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BuiltForScaleProps {
  className?: string;
}

const BuiltForScale: React.FC<BuiltForScaleProps> = ({ className }) => {
  return (
    <section className={cn("w-full bg-black text-white min-h-screen", className)}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 space-y-12">

        {/* Built for Scale badge */}
        <div className="inline-block px-4 py-1 bg-zinc-800 rounded-full text-sm opacity-70 font-medium">
          Built for Scale
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="lg:w-5/12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Dynamic Resource Management</h1>
            <p className="text-sm text-zinc-400">
              Seamlessly expand from racks to data centers. Our system grows with you, automatically managing resources across your entire infrastructure.
            </p>
          </div>

          {/* Cards */}
          <div className="lg:w-6/12 space-y-4">
            {/* Resource Management Card */}
            <div className="bg-zinc-900/90 rounded-lg p-6 flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                📦
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Resource Management</h3>
                <p className="text-sm text-zinc-400">Manage resources dynamically across your data center infrastructure.</p>
              </div>
            </div>

            {/* Deployment Automation Card */}
            <div className="bg-zinc-900/90 rounded-lg p-6 flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                🚀
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Deployment Automation</h3>
                <p className="text-sm text-zinc-400">Automate deployment processes for seamless scalability.</p>
              </div>
            </div>

            {/* Networking Card */}
            <div className="bg-zinc-900/90 rounded-lg p-6 flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                🌐
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Networking</h3>
                <p className="text-sm text-zinc-400">Ensure your network infrastructure is always ready to scale.</p>
              </div>
            </div>

            {/* Firmware Versioning Card */}
            <div className="bg-zinc-900/90 rounded-lg p-6 flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                🛠️
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Firmware Versioning</h3>
                <p className="text-sm text-zinc-400">Keep firmware up to date with automated versioning and security checks.</p>
              </div>
            </div>

            {/* New Digital Twins Card */}
            <div className="bg-zinc-900/90 rounded-lg p-6 flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                🧠
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Digital Twins</h3>
                <p className="text-sm text-zinc-400">Plan capacity intelligently with our digital twin technology.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Book a Demo Section */}
        <div 
          className="relative rounded-lg overflow-hidden mt-16 h-56 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://www.centralaxis.com/background.png')", opacity: 0.8 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-semibold mb-2">Book a Demo</h2>
            <p className="text-gray-300 mb-4">See how CentralAxis can revolutionize your data center operations.</p>
            <button className="bg-white text-black py-2 px-4 rounded-md font-medium hover:bg-gray-200 transition">
              Schedule Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForScale;
