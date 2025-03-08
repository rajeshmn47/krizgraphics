import React from "react";
import { CheckCircle, DollarSign, Users } from "lucide-react";

function WhyChooseUs() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
                    Why Choose Us
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    We are committed to providing the best services tailored to your needs.
                    Here’s why we stand out:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center text-purple-600 mb-4">
                            <CheckCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Exceptional Quality
                        </h3>
                        <p className="text-gray-600">
                            We deliver top-notch services to ensure your satisfaction every time.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center text-purple-600 mb-4">
                            <DollarSign className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Affordable Prices
                        </h3>
                        <p className="text-gray-600">
                            Enjoy premium services without breaking the bank. We offer value for your money.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center text-purple-600 mb-4">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Expert Team
                        </h3>
                        <p className="text-gray-600">
                            Our team of experts ensures high-quality outcomes tailored to your needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>)
}

export default WhyChooseUs;