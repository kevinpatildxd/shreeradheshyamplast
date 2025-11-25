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
        <div className="bg-ui">
            <Carousel />

            {/* Featured Products */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-text-main">Our Product Range</h2>
                    <p className="mt-4 text-slate-600">Explore our high-quality plastic packaging solutions</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/products" className="inline-block bg-accent text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        View All Products
                    </Link>
                </div>
            </section>

            {/* Featured Video */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-text-main mb-8">Manufacturing Excellence</h2>
                    <VideoCard videoId="dQw4w9WgXcQ" title="Manufacturing Process" />
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-text-main mb-12">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
