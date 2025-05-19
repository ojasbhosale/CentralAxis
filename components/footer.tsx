// components/footer.tsx
"use client";

import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0c0c] py-6 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto flex items-center gap-4">
        {/* Logo */}
        <Image 
          src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75" 
          alt="CentralAxis Logo" 
          width={32} 
          height={32}
        />

        {/* Copyright Text */}
        <p className="text-gray-400 text-sm">
          Copyright © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
