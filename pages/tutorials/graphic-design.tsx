import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const tutorials = [
  {
    title: "Logo Design Basics",
    description: "Learn the principles of creating impactful logos.",
    link: "/tutorials/logo-design",
  },
  {
    title: "Mastering Color Theory",
    description: "Understand how colors influence design and mood.",
    link: "/tutorials/color-theory",
  },
  {
    title: "Typography for Designers",
    description: "Discover the power of fonts in graphic design.",
    link: "/tutorials/typography",
  },
  {
    title: "Photoshop Essentials",
    description: "Kickstart your journey with Photoshop.",
    link: "/tutorials/photoshop-essentials",
  },
  {
    title: "Creating Stunning Posters",
    description: "Design posters that grab attention instantly.",
    link: "/tutorials/poster-design",
  },
];

export default function GraphicDesignTutorials() {
  return (
    <Layout>
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Graphic Design Tutorials
          </h2>
          <p className="text-xl text-gray-600">
            Explore our curated tutorials to level up your design skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <Link
              to={tutorial.link}
              key={index}
              className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {tutorial.title}
              </h3>
              <p className="text-gray-600">{tutorial.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
}
