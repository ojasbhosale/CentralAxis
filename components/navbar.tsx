
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

// Define the dropdown menu items structure
interface NavItem {
  title: string;
  items?: string[];
}

// Navigation data structure
const navItems: NavItem[] = [
  {
    title: "Data Center Infrastructure Management",
    items: [
      "Monitoring Devices",
      "Asset Tracking",
      "Network Management",
      "Change Management",
      "Colocation Management",
      "Data Center Planner",
      "Firmware Management",
      "IP Address Management",
      "Customer Portal",
      "Custom Insights",
      "Custom Data Center Solutions"
    ]
  },
  {
    title: "Intelligence Solutions",
    items: [
      "Digital Twins",
      "Smart Power Mapping",
      "Predictive Failure and Alerting",
      "Smart Control Systems",
      "Automated Discovery"
    ]
  },
  {
    title: "Data Center Compliance",
    items: [
      "DCOI Compliance",
      "(EU) 2023/1791",
      "EN 50600",
      "LEED Certification",
      "ISO/IEC 30134-2",
      "(EPA) ENERGY STAR",
      "European Commission Joint Research Centre (JRC)"
    ]
  },
  {
    title: "Sustainability Blog",
    items: [
      "Energy Efficiency",
      "Stranded Energy Map",
      "Environmental Product Declaration",
      "Renewables Integration",
      "Power Resource Management"
    ]
  }
]

export function Navbar() {
  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = React.useState<number | null>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Effect to handle scrolling
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full bg-black text-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-800">
        {/* Logo - Improved alignment and sizing */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image 
                src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75" 
                alt="CentralAxis Logo" 
                width={32} 
                height={32}
              />
            </div>
            <span className="text-lg font-bold font-['Arial'] ml-2">CentralAxis</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="hidden lg:flex">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link 
                href="#"
                className="flex items-center px-4 py-2 text-white hover:text-gray-300 font-['Arial'] text-sm"
              >
                {item.title}
                <svg 
                  className="ml-1 h-5 w-5" 
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M6 9l6 6 6-6" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              
              {/* Dropdown Menu - Improved styling with border */}
              <div 
                className={`absolute right-0 mt-0 w-64 bg-black border border-white-500 rounded-sm shadow-lg z-10 transition-all duration-150 ease-in-out ${
                  openDropdown === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ minWidth: '250px' }}
              >
                <div className="py-2">
                  {item.items?.map((subItem, subIndex) => (
                    <Link 
                      key={subIndex} 
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-800 font-['Arial']"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button (hidden in desktop) */}
        <div className="lg:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar