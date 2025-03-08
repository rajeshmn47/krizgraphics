import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const photoEditingTutorials = [
  {
    title: "Basics of Photo Editing",
    description: "Learn how to get started with photo editing tools and techniques.",
    slug: "basics-photo-editing",
  },
  {
    title: "Mastering Adobe Photoshop",
    description: "Explore advanced editing techniques in Adobe Photoshop.",
    slug: "mastering-photoshop",
  },
  {
    title: "Retouching Portraits",
    description: "Learn how to professionally retouch portraits for a polished look.",
    slug: "retouching-portraits",
  },
  {
    title: "Color Grading Basics",
    description: "Understand the fundamentals of color grading and how to apply them.",
    slug: "color-grading-basics",
  },
  {
    title: "Creative Photo Manipulation",
    description: "Dive into the art of photo manipulation to create stunning visuals.",
    slug: "creative-photo-manipulation",
  },
  {
    title: "Editing for Social Media",
    description: "Optimize photos for various social media platforms with ease.",
    slug: "editing-social-media",
  },
];

export default function PhotoEditingTutorials() {
  return (
    <Layout>
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Photo Editing Tutorials
          </h2>
          <p className="text-xl text-gray-600">
            Discover the secrets of professional photo editing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoEditingTutorials.map((tutorial, index) => (
            <Link
              href={`/photo-editing-tutorials/${tutorial.slug}`}
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
