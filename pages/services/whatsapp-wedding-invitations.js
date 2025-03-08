import React from 'react';

const invitations = [
  {
    title: 'Elegant Floral Invitation',
    description: 'A beautiful floral design perfect for a spring wedding.',
    image: 'https://media.istockphoto.com/id/469993382/photo/wedding-invitation-with-watercolor-pink-flowers.webp?a=1&b=1&s=612x612&w=0&k=20&c=MMqU3Kz2_BzpXhM3PylOVQKWYY89Kce3_7hwlcYeMDA=',
  },
  {
    title: 'Modern Minimalist Invitation',
    description: 'A sleek and modern design for a contemporary wedding.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8toMPRX5N4G2HBw5rwUE2iefxwWyB4SQtRQ&s',
  },
  {
    title: 'Classic Vintage Invitation',
    description: 'A timeless vintage design for a classic wedding.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnx9gRpKznns7D8CSwrUfE-hXCBNa_vGteQ&s',
  },
];

export default function WhatsAppWeddingInvitationsPage() {
  return (
    <div className="bg-gray-50 py-24 px-4 sm:px-52">
      <div className="sm:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-red-900 mb-8">WhatsApp Wedding Invitations</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Discover our collection of beautiful WhatsApp wedding invitations. Choose the perfect design to share your special day with friends and family.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {invitations.map((invitation, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img src={invitation.image} alt={invitation.title} className="w-full rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{invitation.title}</h2>
              <p className="text-gray-600">{invitation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}