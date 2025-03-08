import React from "react";
import Layout from '../../components/Layout';

export default function GraphicsDesignServices() {
    const services = [
        {
            title: "Product Package Design",
            description: `Our product package designs focus on combining functionality with aesthetics. 
            We ensure that your packaging not only looks attractive but also effectively communicates 
            your brand identity. Whether you need eco-friendly, minimalist, or luxury packaging, we 
            tailor each design to meet your target audience's expectations. Our process involves 
            in-depth research, creative brainstorming, and precise execution. The result is a product 
            package that stands out on the shelves and leaves a lasting impression.`,
            image: "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F19%2F05%2F03%2F48%2F5e5065b0-9034-4fe3-a302-e68a298ad94a%2FHero_1.png?auto=format&ch=Width%2CDPR&crop=false&fm=png&q=25&w=600&h=600",
        },
        {
            title: "Brochure Design",
            description: `A well-designed brochure can be a powerful marketing tool, and we specialize in 
            creating professional, visually captivating brochures that convey your brand's message clearly. 
            Our designs feature thoughtful layouts, elegant typography, and engaging visuals. Whether for 
            corporate presentations or promotional campaigns, our brochures are designed to attract and 
            retain attention. We ensure that your brochure represents your brand values and engages your 
            audience effectively, delivering results that exceed expectations.`,
            image: "https://www.aabhishek.com/wp-content/uploads/2020/02/Creative-Brochure-Design-Agency-in-Vadodara-India-Brochure-Design-Service-India.jpg",
        },
        {
            title: "Digital Brochure Design",
            description: `In the digital era, traditional brochures have transformed into dynamic, interactive 
            experiences. Our digital brochure designs are optimized for online platforms and tailored to 
            maximize audience engagement. Whether it’s for product showcases, business pitches, or events, 
            we ensure your digital brochures are visually compelling and easy to navigate. Each design is 
            crafted with precision to balance aesthetics and functionality, creating a seamless experience 
            that highlights your brand's strengths.`,
            image: "https://www.titanui.com/wp-content/uploads/2022/08/04/Company-Profile-Brochure-Design-PSD.webp",
        },
        {
            title: "Social Media Graphics",
            description: `Social media is the voice of your brand, and our graphics are designed to make 
            your message heard. We create custom designs for posts, stories, ads, and banners that align 
            with your brand’s identity. Our designs are optimized for platforms like Instagram, Facebook, 
            and LinkedIn, focusing on trends and audience preferences. From eye-catching visuals to 
            impactful typography, we ensure your social media content captivates, engages, and converts 
            your target audience effectively.`,
            image: "https://www.socialchamp.io/wp-content/uploads/2024/05/Content-Blog-Banner_Q2-2024_1125x600_56_Social-Media-Graphics.png",
        },
        {
            title: "Exhibition Stall Design",
            description: `Exhibition stalls are the face of your brand at trade shows and events, and we 
            specialize in creating designs that draw attention and engage visitors. Our team focuses on 
            layout, branding, and visual appeal to make your stall a standout feature. Whether you need 
            innovative concepts, bold graphics, or functional setups, we design stalls that reflect your 
            brand's personality and leave a memorable impression on your audience.`,
            image: "https://www.aabhishek.com/wp-content/uploads/2016/07/Glass-Company-Exhibition-Stall-Design-1200x800.jpg",
        },
        {
            title: "Magazine Design",
            description: `Our magazine designs blend creativity with strategy to captivate readers and 
            elevate your content. From striking covers to thoughtful content layouts, we prioritize 
            visual hierarchy and clarity. Each design is tailored to reflect the theme and target 
            audience of the publication. With a focus on typography, imagery, and storytelling, our 
            magazine designs aim to enhance reader engagement and create a lasting impact on every page.`,
            image: "https://futurevisioncomputers.com/wp-content/uploads/2021/12/magazine-design-surat-magazine-design-course.jpg",
        },
    ];

    return (
        <div>
            <header className="bg-blue-600 text-white text-center py-12">
                <h1 className="text-4xl font-bold">Graphic Design Services</h1>
                <p className="text-lg mt-4">We transform ideas into creative visuals that bring your brand to life.</p>
            </header>
            <section className="py-16 bg-gray-100">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold">What We Offer</h2>
                    <p className="text-lg text-gray-700 mt-4">Explore our comprehensive range of graphic design services designed to cater to diverse business needs.</p>
                </div>
                <div className="space-y-12 px-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                            <div className="flex flex-col md:flex-row items-center">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full md:w-1/2 min-h-96 h-auto object-contain rounded-lg mb-6 md:mb-0"
                                />
                                <div className="md:ml-8">
                                    <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                                    <p className="mt-4 text-gray-600">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-16 bg-blue-600 text-white text-center">
                <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                <p className="text-lg mt-4">Let us bring your vision to life with designs that speak volumes about your brand.</p>
                <a href="#contact" className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-md">
                    Start a Project
                </a>
            </section>
        </div>
    );
}
