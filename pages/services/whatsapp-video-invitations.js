import React from 'react';
import { NextSeo } from 'next-seo';

const invitations = [
  {
    title: 'Elegant Floral Video Invitation',
    description: 'A beautiful floral video invitation perfect for a spring wedding.',
    video: 'https://www.example.com/videos/invitation1.mp4',
  },
  {
    title: 'Modern Minimalist Video Invitation',
    description: 'A sleek and modern video invitation for a contemporary wedding.',
    video: 'https://www.example.com/videos/invitation2.mp4',
  },
  {
    title: 'Classic Vintage Video Invitation',
    description: 'A timeless vintage video invitation for a classic wedding.',
    video: 'https://www.example.com/videos/invitation3.mp4',
  },
];

export default function WhatsAppWeddingInvitationsPage() {
  return (
    <>
      <NextSeo
        title="WhatsApp Wedding Video Invitations | Kriz Graphics"
        description="Discover our collection of beautiful WhatsApp wedding video invitations. Choose the perfect design to share your special day with friends and family."
        openGraph={{
          title: 'WhatsApp Wedding Video Invitations | Kriz Graphics',
          description: 'Discover our collection of beautiful WhatsApp wedding video invitations. Choose the perfect design to share your special day with friends and family.',
          url: 'https://www.krizgraphics.com/services/whatsapp-wedding-invitations',
          type: 'article',
          images: [
            {
              url: 'https://www.krizgraphics.com/images/whatsapp-wedding-invitations.jpg',
              width: 1200,
              height: 630,
              alt: 'WhatsApp Wedding Invitations',
            },
          ],
        }}
      />
      <div className="bg-gray-50 py-24 px-4 sm:px-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-red-900 mb-8">WhatsApp Wedding Video Invitations</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Discover our collection of beautiful WhatsApp wedding video invitations. Choose the perfect design to share your special day with friends and family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {invitations.map((invitation, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <video controls className="w-full rounded-lg mb-4">
                  <source src={invitation.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{invitation.title}</h2>
                <p className="text-gray-600">{invitation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}