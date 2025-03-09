import React from "react";
import { Star, GraduationCap, Briefcase, Globe } from 'lucide-react';
import Link from "next/link";
import { NextSeo } from 'next-seo';

export default function EnglishTraining() {
  const programs = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: "IELTS Preparation",
      description: "Comprehensive training to help you score high in IELTS."
    },
    {
      icon: <Star className="w-6 h-6 text-blue-600" />,
      title: "TOEFL Training",
      description: "Master the skills required to excel in the TOEFL exam."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      title: "Business English",
      description: "Enhance your professional English communication skills."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "General English",
      description: "Improve your grammar, vocabulary, and conversational English."
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback: "The IELTS training helped me achieve a band score of 8. Highly recommend!"
    },
    {
      name: "Sarah Lee",
      feedback: "The Business English course boosted my confidence during client meetings."
    }
  ];

  return (
    <>
      <NextSeo
        title="English Training Programs | Kriz Graphics"
        description="Achieve your language goals with our expert trainers. Explore our comprehensive English training programs including IELTS, TOEFL, Business English, and General English."
        openGraph={{
          title: 'English Training Programs | Kriz Graphics',
          description: 'Achieve your language goals with our expert trainers. Explore our comprehensive English training programs including IELTS, TOEFL, Business English, and General English.',
          url: 'https://www.krizgraphics.com/services/english-training',
          type: 'article',
          images: [
            {
              url: 'https://www.krizgraphics.com/images/english-training.jpg',
              width: 1200,
              height: 630,
              alt: 'English Training Programs',
            },
          ],
        }}
      />
      <div>
        <div className="bg-gray-50">
          {/* Hero Section */}
          <section className="bg-blue-600 text-white py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">English Training Programs</h1>
            <p className="text-lg">Achieve your language goals with our expert trainers.</p>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Enroll Now
            </Link>
          </section>

          {/* About Section */}
          <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-4">About Our English Training</h2>
            <p className="text-gray-700">
              We provide tailored English training programs to help individuals and professionals excel in their personal and professional lives. Our experienced trainers ensure every session is interactive and effective.
            </p>
          </section>

          {/* Programs Offered */}
          <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-semibold mb-8 text-center">Programs We Offer</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {programs.map((program, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
                    <div className="mb-4">{program.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-semibold mb-8 text-center">What Our Students Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-6">
                    <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                    <p className="mt-4 text-gray-900 font-bold">{testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Take the First Step Towards Fluency</h2>
            <p className="text-gray-700 mb-6">Contact us today to start your English training journey.</p>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
