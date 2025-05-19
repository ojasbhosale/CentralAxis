"use client"

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Company logos for the moving carousel
const companyLogos = [
  { id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg', alt: 'Hewlett Packard Enterprise' },
  { id: 2, src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg', alt: 'Intel' },
  { id: 5, src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', alt: 'IBM' },
  { id: 6, src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg', alt: 'NVIDIA' },
  { id: 7, src: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg', alt: 'AMD' },
  { id: 8, src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg', alt: 'Cisco' },
  { id: 9, src: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png', alt: 'Dell Technologies' }
]

const HeroSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Effect for the continuous scrolling animation of the logos
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Create a clone of the first set of logos and append it
    const scrollContent = scrollContainer.querySelector('.scroll-content');
    if (!scrollContent) return;
    
    const scrollAnimation = () => {
      if (scrollContainer.scrollLeft >= scrollContent.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };
    
    const animationInterval = setInterval(scrollAnimation, 30);
    
    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="relative w-full bg-black text-white pt-16" style={{ height: 'calc(100vh)' }}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='none' stroke='%23fff' stroke-opacity='0.1' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px' 
        }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Main hero text */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4 mt-2">
          <h1 className="text-6xl font-bold mb-3  mx-auto " style={{ fontFamily: 'Arial, sans-serif', opacity: 0.8 }}>
            Data Center Management Software
          </h1>
          <p className=" text-gray mb-4 max-w-2xl mx-auto" style={{ fontFamily: 'Arial, sans-serif', opacity: 0.65 }}>
            Increase uptime, reduce costs, automate operations, and stay compliant.
          </p>
          <p className=" text-gray mb-16 max-w-2xl mx-auto" style={{ fontFamily: 'Arial, sans-serif', opacity: 0.65 }}>
            Built for colocations, data centers, and cloud providers.
          </p>
          
          {/* CTA Button */}
          <Link 
            href="#" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 px-36 mt-4 rounded transition-colors duration-300"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Request Demo
          </Link>
        </div>

        {/* line between two things */}
        <div className="w-full border-t border-gray-600/40 mb-4"></div>
        
        {/* Partner section */}
        <div className="my-6 text-center">
          <p className="text-gray-400 mb-8" style={{ fontFamily: 'Arial, sans-serif' }}>
            Seamless integrations with any data center hardware
          </p>
          
          {/* Logo carousel */}
          <div className="relative overflow-hidden" style={{ height: '80px' }}>
            <div 
              ref={scrollRef}
              className="flex items-center overflow-x-scroll scrollbar-hide"
              style={{ 
                whiteSpace: 'nowrap',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none', // IE and Edge
              }}
            >
              <div className="scroll-content flex space-x-16 px-8">
                {companyLogos.map((logo) => (
                  <div key={logo.id} className="flex-shrink-0 h-12 w-32 flex items-center justify-center">
                    <Image 
                      src={logo.src} 
                      alt={logo.alt}
                      width={100}
                      height={40}
                      style={{ 
                        objectFit: 'contain',
                        filter: 'brightness(0.8) grayscale(1) invert(0.8)'
                      }}
                    />
                  </div>
                ))}
              </div>
              {/* Duplicate set of logos for seamless scrolling */}
              <div className="scroll-content flex space-x-16 px-8">
                {companyLogos.map((logo) => (
                  <div key={`dup-${logo.id}`} className="flex-shrink-0 h-12 w-32 flex items-center justify-center">
                    <Image 
                      src={logo.src} 
                      alt={logo.alt}
                      width={100}
                      height={40}
                      style={{ 
                        objectFit: 'contain',
                        filter: 'brightness(0.8) grayscale(1) invert(0.8)'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient overlays to fade the edges */}
            <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Custom styles to hide scrollbar */}
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default HeroSection