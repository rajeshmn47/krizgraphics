import React from "react";
import Layout from "../components/Layout";

export default function About() {
    return (
            <section className="bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold">About KRIZ Graphics</h2>
                        <p className="mt-4 text-lg text-gray-300">Your trusted partner in professional graphic design, photo editing, and creative solutions.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
                            <p className="text-gray-700">At KRIZ Graphics, we specialize in delivering top-notch graphic design and creative solutions tailored to your needs. With a passion for artistry and precision, we transform ideas into visual masterpieces.</p>
                        </div>
                        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                            <p className="text-gray-700">To empower businesses and individuals with creative designs that captivate and inspire. Our mission is to blend creativity with strategy, delivering impactful results every time.</p>
                        </div>
                        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
                            <p className="text-gray-700">From graphic design and photo editing to digital solutions and beyond, KRIZ Graphics offers a wide range of services designed to meet the unique needs of our clients.</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}