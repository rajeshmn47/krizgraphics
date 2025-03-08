import React from 'react';

const portfolioItems = [
  {
    image: "https://www.ephotozine.com/articles/10-photo-editing-software-for-windows-11-available-in-2022-36053/images/fotor-windows-11-photo-editor.png",
    category: "Photo Editing",
    title: "Professional Retouching"
  },
  {
    image: "https://5.imimg.com/data5/SELLER/Default/2023/2/YR/KH/LQ/25252182/wedding-invitation-video.jpg",
    category: "Wedding Invitations",
    title: "Elegant Wedding Invitation",
  },
  {
    image: "https://media.istockphoto.com/id/609910358/vector/corporate-identity-set.jpg?s=612x612&w=0&k=20&c=w7wP6sisIKyDRTQi4mxrDT76PDYqS9r4RIvYdzYnTdk=",
    category: "Print Design",
    title: "Marketing Materials"
  },
  {
    image: "https://admin.12grids.com/uploads/blogs/original_cover_images/Webp/Future_Of_Responsive_Web_Design_12Grids.webp",
    category: "Web Design",
    title: "Modern Interfaces"
  },
  {
    image: "https://media.istockphoto.com/id/1306691787/photo/bust-sculpture-with-sunglasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=NS3lYqg238Zf5BYz01w88d8bz69pBkJ2wLdae2qBfJo=",
    category: "Digital Art",
    title: "Custom Illustrations"
  },
  {
    image: "https://learndigital.co/wp-content/uploads/2023/08/G.-Pic-1024x453.png",
    category: "Graphic Designing",
    title: "Graphic Designing"
  }
];

function Portfolio() {
  return (
    <div className="bg-white py-24" id='portfolio'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600">Transforming brands through creative excellence</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6">
                  <p className="text-purple-300 text-sm mb-2">{item.category}</p>
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;