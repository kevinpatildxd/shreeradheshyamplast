import React from 'react';

const About: React.FC = () => {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-text-main mb-4">About Shree Radheshyam Plast</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        We are a leading manufacturer and supplier of high-quality plastic packaging solutions, serving diverse industries with excellence and innovation.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-slate-200 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold text-brand mb-4">Our Mission</h2>
                        <p className="text-slate-700">
                            To provide superior quality plastic packaging products that meet global standards, ensuring customer satisfaction through innovation, reliability, and sustainable practices.
                        </p>
                    </div>
                    <div className="bg-slate-200 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold text-brand mb-4">Our Vision</h2>
                        <p className="text-slate-700">
                            To be the most trusted partner in the packaging industry, recognized for our commitment to quality, integrity, and environmental responsibility.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-text-main mb-8 text-center">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                            <div className="text-brand text-4xl mb-4">🏆</div>
                            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                            <p className="text-slate-600">Rigorous quality checks at every stage of production.</p>
                        </div>
                        <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                            <div className="text-brand text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                            <p className="text-slate-600">Efficient logistics network ensuring on-time delivery.</p>
                        </div>
                        <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                            <div className="text-brand text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
                            <p className="text-slate-600">Customized designs to meet specific client needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
