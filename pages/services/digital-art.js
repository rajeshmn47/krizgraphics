import React from 'react';
import { NextSeo } from 'next-seo';

const artworks = [
  {
    title: 'Abstract Art',
    description: 'A beautiful abstract art piece with vibrant colors.',
    image: 'https://plus.unsplash.com/premium_photo-1673126683242-b3da3aec8129?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Digital Portrait',
    description: 'A stunning digital portrait with intricate details.',
    image: 'https://images.unsplash.com/photo-1592160884144-921e26cb84e2?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlnaXRhbCUyMHBvcnRyYWl0fGVufDB8fDB8fHww',
  },
  {
    title: 'Fantasy Landscape',
    description: 'A mesmerizing fantasy landscape with magical elements.',
    image: 'https://plus.unsplash.com/premium_photo-1682308191763-2813d4a2e746?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function DigitalArtPage() {
  return (
    <>
      <NextSeo
        title="Digital Art Services | Kriz Graphics"
        description="Explore our collection of stunning digital art pieces. From abstract art to digital portraits, we offer a wide range of styles to suit your taste."
        openGraph={{
          title: 'Digital Art Services | Kriz Graphics',
          description: 'Explore our collection of stunning digital art pieces. From abstract art to digital portraits, we offer a wide range of styles to suit your taste.',
          url: 'https://www.krizgraphics.com/services/digital-art',
          type: 'article',
          images: [
            {
              url: 'https://plus.unsplash.com/premium_photo-1673126683242-b3da3aec8129?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              width: 1200,
              height: 630,
              alt: 'Abstract Art',
            },
            {
              url: 'https://images.unsplash.com/photo-1592160884144-921e26cb84e2?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlnaXRhbCUyMHBvcnRyYWl0fGVufDB8fDB8fHww',
              width: 1200,
              height: 630,
              alt: 'Digital Portrait',
            },
            {
              url: 'https://plus.unsplash.com/premium_photo-1682308191763-2813d4a2e746?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              width: 1200,
              height: 630,
              alt: 'Fantasy Landscape',
            },
          ],
        }}
      />
      <div className="bg-gray-50 py-24 px-6 sm:px-52">
        <div className="sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-red-900 mb-8">Digital Art Services</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Explore our collection of stunning digital art pieces. From abstract art to digital portraits, we offer a wide range of styles to suit your taste.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img src={artwork.image} alt={artwork.title} className="w-full rounded-lg mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{artwork.title}</h2>
                <p className="text-gray-600">{artwork.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}