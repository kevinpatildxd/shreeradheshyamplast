import React from 'react';
import type { Product } from '../types/product';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-lg shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all duration-500 group">
            <div className="h-48 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-6">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                    {product.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-900 truncate tracking-tight">
                    {product.name}
                </h3>
                <p className="mt-3 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {product.description}
                </p>
                <div className="mt-6">
                    <Link
                        to="/contact"
                        className="inline-block w-full text-center bg-slate-900 text-white py-3 px-6 rounded-full font-medium shadow-md hover:bg-slate-700 hover:shadow-lg transition-all duration-300"
                    >
                        Enquire Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
