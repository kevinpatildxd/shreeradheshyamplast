import React from 'react';
import type { Product } from '../types/product';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <span className="text-xs text-brand font-semibold uppercase tracking-wider">
                    {product.category}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-text-main truncate">
                    {product.name}
                </h3>
                <p className="mt-2 text-sm text-text-body line-clamp-2">
                    {product.description}
                </p>
                <div className="mt-4">
                    <Link
                        to="/contact"
                        className="inline-block w-full text-center bg-accent text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors active:scale-95 duration-100"
                    >
                        Enquire Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
