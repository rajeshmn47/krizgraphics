import React from "react"

function Testimonials() {

    return (
        <section className="py-16 bg-white">
            <div className="max-w-screen-xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
                    What Our Clients Say
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    At KrizGraphics, we take pride in delivering outstanding designs and services.
                    Here’s what our clients have to say about their experiences:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-gray-600 mb-4">
                            "KrizGraphics transformed our vision into reality with their exceptional designs.
                            The attention to detail was beyond impressive!"
                        </p>
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                                {/* Placeholder avatar */}
                                <span className="font-bold text-lg">K</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">Katherine West</h4>
                                <span className="text-sm text-gray-500">Creative Director, ArtFusion</span>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-gray-600 mb-4">
                            "Working with KrizGraphics was a delight. Their innovative approach brought new life to our brand."
                        </p>
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                                {/* Placeholder avatar */}
                                <span className="font-bold text-lg">J</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">James Lee</h4>
                                <span className="text-sm text-gray-500">Founder, BrightStart Agency</span>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-gray-600 mb-4">
                            "The KrizGraphics team exceeded our expectations. The designs were stunning and
                            perfectly aligned with our brand."
                        </p>
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                                {/* Placeholder avatar */}
                                <span className="font-bold text-lg">S</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">Sophia Green</h4>
                                <span className="text-sm text-gray-500">Marketing Manager, Nexa Solutions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;