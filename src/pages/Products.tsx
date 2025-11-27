import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Products: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="bg-ui min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-text-main mb-8 text-center">Our Products</h1>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setSelectedCategory('All')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === 'All'
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-lg scale-105'
                            : 'bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-600 hover:bg-white hover:shadow-md'
                            }`}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-lg scale-105'
                                : 'bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-600 hover:bg-white hover:shadow-md'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center text-slate-500 mt-12">
                        No products found in this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
