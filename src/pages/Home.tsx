import React from 'react';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import VideoCard from '../components/VideoCard';
import TestimonialCard from '../components/TestimonialCard';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    // Show first 4 products as featured
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="relative bg-ui min-h-screen overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-blue-400/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-[-10%] right-[20%] w-96 h-96 bg-cyan-400/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2 w-96 h-96 bg-teal-400/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10">
                <Carousel />

                {/* Featured Products */}
                <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent inline-block">Our Product Range</h2>
                        <p className="mt-4 text-text-body">Explore our high-quality plastic packaging solutions</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/products" className="inline-block bg-accent text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors active:scale-95 duration-100">
                            View All Products
                        </Link>
                    </div>
                </section>

                {/* Featured Video */}
                <section className="py-16 bg-white/50 backdrop-blur-sm">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent inline-block mb-8">Manufacturing Excellence</h2>
                        <VideoCard videoId="dQw4w9WgXcQ" title="Manufacturing Process" />
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 bg-slate-200/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent inline-block mb-12">What Our Clients Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial) => (
                                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
