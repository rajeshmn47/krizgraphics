import React from 'react';
import { Palette, Image, Monitor, Layout, PenTool, Languages, Smartphone } from 'lucide-react';
import Link from 'next/link'; // Or use <a> for external links

const features = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Graphic Design",
    description: "Creative branding solutions and visual identity design",
    link: "/services/graphic-design"
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: "Photo Editing",
    description: "Professional photo retouching and image manipulation",
    link: "/services/photo-editing"
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Print Design",
    description: "Marketing materials and publication design",
    link: "/services/print-design"
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Digital Art",
    description: "Custom illustrations and digital artwork",
    link: "/services/digital-art"
  },
  {
    icon: <Languages className="w-6 h-6" />,
    title: "English Training",
    description: "IELTS, TOEFL, and Business English courses",
    link: "/services/english-training"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "WhatsApp Wedding Invitations",
    description: "Beautifully designed digital wedding invitations for WhatsApp",
    link: "/services/whatsapp-wedding-invitations"
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Web Design",
    description: "Responsive and modern website design solutions",
    link: "/services/web-design"
  }
];

export function Features() {
  return (
    <div className="bg-gray-50 py-24" id='services'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Transforming ideas into visual excellence</p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {features.map((feature, index) => (
              <Link href={feature.link} key={index} className="group" style={{ justifySelf: index >= features.length - (features.length % 3 || 3) ? "center" : "start" }}>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
      </div>
    </div >
  );
}

export default Features;
