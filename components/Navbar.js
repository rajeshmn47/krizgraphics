import React, { useState } from "react";
import Link from "next/link";
import { Palette, Image, PenTool, Languages, Smartphone, Menu, X, Code } from "lucide-react";

function NavbarWithDropdowns() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const services = [
    { icon: <Palette className="w-4 h-4" />, title: "Graphic Design", link: "/services/graphic-design" },
    { icon: <Image className="w-4 h-4" />, title: "Photo Editing", link: "/services/photo-editing" },
    { icon: <PenTool className="w-4 h-4" />, title: "Digital Art", link: "/services/digital-art" },
    { icon: <Languages className="w-4 h-4" />, title: "English Training", link: "/services/english-training" },
    { icon: <Smartphone className="w-4 h-4" />, title: "WhatsApp Wedding Invitations", link: "/services/whatsapp-wedding-invitations" },
  ];

  const tutorials = [
    { icon: <Palette className="w-4 h-4" />, title: "Graphic Design", link: "/tutorials/graphic-design" },
    { icon: <Image className="w-4 h-4" />, title: "Photo Editing", link: "/tutorials/photo-editing" },
    { icon: <Languages className="w-4 h-4" />, title: "English Training", link: "/tutorials/english-training" },
    { icon: <Code className="w-4 h-4" />, title: "Software Programming", link: "/tutorials/software-programming" }
  ];

  const toggleMobileDropdown = (dropdownName) => {
    setMobileDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const openDropdown = (dropdownName) => setActiveDropdown(dropdownName);
  const closeDropdown = () => setActiveDropdown(null);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4">
      <div className={`container mx-auto flex  ${menuOpen?'flex-col':'justify-between items-center'} es-center`}>
        <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">
          <img src='./logo.png' alt='' className="w-24 h-8 cover"/>
        </h1>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>
        {/* Menu Items */}
        <ul className={`md:flex ${menuOpen ? "flex flex-col mt-4" : "hidden"} md:mt-0`}>
          <li className="mb-2 md:mb-0 md:ml-4 lg:ml-6">
            <Link href="/" className="block md:inline-block hover:text-yellow-300">Home</Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative mb-2 md:mb-0 md:ml-4 lg:ml-6"
            onMouseEnter={() => openDropdown("services")}
            onMouseLeave={closeDropdown}
          >
            <button
              className="block md:inline-block hover:text-yellow-300"
              onClick={() => toggleMobileDropdown("services")}
            >
              Services
            </button>
            {/* Dropdown for Desktop */}
            {activeDropdown === "services" && (
              <div className="absolute bg-white text-black mt-0 shadow-lg rounded w-56 z-10 hidden md:block">
                <ul>
                  {services.map((service, index) => (
                    <li key={index} className="border-b last:border-none">
                      <Link
                      href={service.link}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-nowrap overflow-hidden text-ellipsis"
                      >
                        <span className="mr-2">{service.icon}</span>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Dropdown for Mobile */}
            {mobileDropdown === "services" && (
              <div className="bg-white text-black shadow-lg rounded w-full md:hidden">
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="border-b last:border-none">
                      <Link
                        href={service.link}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-nowrap"
                      >
                        <span className="mr-2">{service.icon}</span>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* Tutorials Dropdown */}
          <li
            className="relative mb-2 md:mb-0 md:ml-4 lg:ml-6 hidden"
            onMouseEnter={() => openDropdown("tutorials")}
            onMouseLeave={closeDropdown}
          >
            <button
              className="block md:inline-block hover:text-yellow-300 text-nowrap"
              onClick={() => toggleMobileDropdown("tutorials")}
            >
              Video Tutorials
            </button>
            {/* Dropdown for Desktop */}
            {activeDropdown === "tutorials" && (
              <div className="absolute bg-white text-black mt-0 shadow-lg rounded w-56 z-10 hidden md:block">
                <ul>
                  {tutorials.map((tutorial, index) => (
                    <li key={index} className="border-b last:border-none">
                      <Link
                        href={tutorial.link}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-nowrap"
                      >
                        <span className="mr-2">{tutorial.icon}</span>
                        {tutorial.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Dropdown for Mobile */}
            {mobileDropdown === "tutorials" && (
              <div className="bg-white text-black shadow-lg rounded w-full md:hidden">
                <ul className="space-y-2">
                  {tutorials.map((tutorial, index) => (
                    <li key={index} className="border-b last:border-none">
                      <Link
                        href={tutorial.link}
                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                      >
                        <span className="mr-2">{tutorial.icon}</span>
                        {tutorial.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <li className="mb-2 md:mb-0 md:ml-4 lg:ml-6">
            <Link href="/about" className="block md:inline-block hover:text-yellow-300">About</Link>
          </li>
          <li className="mb-2 md:mb-0 md:ml-4 lg:ml-6">
            <Link href="/contact" className="block md:inline-block hover:text-yellow-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarWithDropdowns;
