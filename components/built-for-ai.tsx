// components/built-for-ai.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BuiltForAIProps {
  className?: string;
}

const BuiltForAI: React.FC<BuiltForAIProps> = ({ className }) => {
  return (
    <section className={cn("w-full bg-black text-white", className)}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        {/* Built for AI badge */}
        <div className="flex justify-center mb-3">
          <div className="px-4 py-1 bg-zinc-800 rounded-full text-sm opacity-60 font-medium">
            Built for AI
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-medium mb-2 text-center">
          Modernizing the Digital Backbone
        </h1>

        {/* Subheading */}
        <p className="text-lg text-zinc-400 opacity-70 text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          Data center software (DCIM, BMS and EPMS) has stagnated. We&#39;ve built a better way.
        </p>

        {/* Advanced Monitoring Section 1*/}
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="bg-zinc-900/90 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
            {/* Text content */}
            <div className="lg:w-1/2 xl:w-7/12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Advanced Monitoring</h2>
              <p className="text-base text-zinc-400 leading-relaxed mb-5">
                CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights 
                and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Real-time performance metrics and predictive analytics</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Automated alerts and intelligent incident response</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Comprehensive reporting and trend analysis</span>
                </div>
              </div>
            </div>

            {/* Dashboard video - reduced to about 40% width */}
            <div className="lg:w-4/12 xl:w-4/12 flex items-center">
              <div className="relative bg-black rounded-lg overflow-hidden border border-zinc-800 w-full">
                <video 
                  className="w-full h-auto rounded-lg" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://www.centralaxis.com/hb-monitoring.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div className="max-w-[1400px] mt-5 mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        {/* Advanced Monitoring Section 2*/}
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="bg-zinc-900/90 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
            {/* Dashboard video - reduced to about 40% width */}
            <div className="lg:w-4/12 xl:w-4/12 flex items-center">
              <div className="relative bg-black rounded-lg overflow-hidden border border-zinc-800 w-full">
                <video 
                  className="w-full h-auto rounded-lg" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://www.centralaxis.com/landing/networking-b.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            {/* Text content */}
            <div className="lg:w-1/2 xl:w-7/12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Network Management and Monitoring</h2>
              <p className="text-base text-zinc-400 leading-relaxed mb-5">
                Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Real-time network performance monitoring and bandwidth optimization</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Automated network security and threat detection</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Advanced network diagnostics and troubleshooting tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mt-5 mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        {/* Advanced Monitoring Section 3*/}
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="bg-zinc-900/90 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
            {/* Text content */}
            <div className="lg:w-1/2 xl:w-7/12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Asset Management</h2>
              <p className="text-base text-zinc-400 leading-relaxed mb-5">
                Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Automated inventory tracking and lifecycle management</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Intelligent ticketing based on asset health and performance</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Efficient resource allocation and optimization</span>
                </div>
              </div>
            </div>
            {/* Dashboard video - reduced to about 40% width */}
            <div className="lg:w-4/12 xl:w-4/12 flex items-center">
              <div className="relative bg-black rounded-lg overflow-hidden border border-zinc-800 w-full">
                <video 
                  className="w-full h-auto rounded-lg" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://www.centralaxis.com/landing/asset-management-b.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mt-5 mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        {/* Advanced Monitoring Section 4*/}
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="bg-zinc-900/90 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
            {/* Dashboard video - reduced to about 40% width */}
            <div className="lg:w-4/12 xl:w-4/12 flex items-center">
              <div className="relative bg-black rounded-lg overflow-hidden border border-zinc-800 w-full">
                <video 
                  className="w-full h-auto rounded-lg" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://www.centralaxis.com/landing/SinglePane-b.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            {/* Text content */}
            <div className="lg:w-1/2 xl:w-7/12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">A Single Pane of Glass</h2>
              <p className="text-base text-zinc-400 leading-relaxed mb-5">
                A unified view across all of your BMS and EPMS systems, tailored to your needs.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Comprehensive visibility across all of your colocation infrastructure</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Customizable interface tailored to your specific operational requirements and priorities.</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mt-5 mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        {/* Advanced Monitoring Section 5*/}
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="bg-zinc-900/90 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
            {/* Text content */}
            <div className="lg:w-1/2 xl:w-7/12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Built-In Compliance</h2>
              <p className="text-base text-zinc-400 leading-relaxed mb-5">
                CentralAxis provides compliance as a service for data centers.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Track data for EU, US, and global regulatary standards.</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">We guarantee compliance and handle every step between monitoring and reporting.</span>
                </div>
              </div>
            </div>
            {/* Dashboard video - reduced to about 40% width */}
            <div className="lg:w-4/12 xl:w-4/12 flex items-center">
              <div className="relative bg-black rounded-lg overflow-hidden border border-zinc-800 w-full">
                <video 
                  className="w-full h-auto rounded-lg" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://www.centralaxis.com/landing/__compliance.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] my-5 mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        {/* Advanced Monitoring Section 6*/}
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="bg-zinc-900/90 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
            {/* Dashboard video - reduced to about 40% width */}
            <div className="lg:w-4/12 xl:w-4/12 flex items-center">
              <div className="relative bg-black rounded-lg overflow-hidden border border-zinc-800 w-full">
                <video 
                  className="w-full h-auto rounded-lg" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://www.centralaxis.com/landing/dc-planning.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            {/* Text content */}
            <div className="lg:w-1/2 xl:w-7/12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Data Center Planning</h2>
              <p className="text-base text-zinc-400 leading-relaxed mb-5">
                Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Model new architectures and see detailed implications on power and cooling needs.</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Design unique specifications for your data center.</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600/80 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-zinc-300 text-base">Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a132b] py-8 px-6 md:px-12 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 shadow-lg max-w-[1350px] my-32 mx-auto">
      {/* Left Section */}
      <div className="text-center md:text-left">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
          We&apos;ve Built the Future of Data Centers
        </h2>
        <p className="text-gray-400">Contact our team for a demo</p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-4">
        <button className="text-sm bg-[#7a5ef8] hover:bg-[#6c52e3] text-white py-1 px-4 rounded-full font-normal transition">
          Set Up a Time
        </button>
        <button className="text-sm bg-[#1f1a29] hover:bg-[#2a2436] text-gray-300 py-1 px-4 rounded-full font-normal transition">
          Learn More
        </button>
      </div>
      </div>
    </section>
  );
};

export default BuiltForAI;