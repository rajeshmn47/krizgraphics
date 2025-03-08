import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const programmingTutorials = [
  {
    title: "JavaScript Basics",
    description: "Learn the fundamentals of JavaScript, the language of the web.",
    slug: "javascript-basics",
  },
  {
    title: "Mastering Python",
    description: "An in-depth guide to Python programming for beginners and professionals.",
    slug: "mastering-python",
  },
  {
    title: "Building REST APIs with Node.js",
    description: "Create powerful and scalable REST APIs using Node.js.",
    slug: "rest-apis-nodejs",
  },
  {
    title: "Introduction to React",
    description: "Dive into React and build interactive user interfaces.",
    slug: "react-introduction",
  },
  {
    title: "Understanding Databases",
    description: "Learn about SQL and NoSQL databases and when to use them.",
    slug: "understanding-databases",
  },
  {
    title: "Version Control with Git",
    description: "Master Git and GitHub for version control and collaboration.",
    slug: "version-control-git",
  },
];

export default function ProgrammingTutorials() {
  return (
    <Layout>
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Software Programming Tutorials
            </h2>
            <p className="text-xl text-gray-600">
              Explore coding tutorials to enhance your programming skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmingTutorials.map((tutorial, index) => (
              <Link
                href={`/programming-tutorials/${tutorial.slug}`}
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
