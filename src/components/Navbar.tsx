import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/60 border-b border-black/10 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo Left */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold text-slate-900 tracking-tight">
                            Shree Radheshyam Plast
                        </Link>
                    </div>

                    {/* Desktop Menu (Centered) */}
                    <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-slate-600 hover:text-slate-900 transition-colors duration-300 font-medium ${isActive(link.path) ? 'text-slate-900' : ''
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Enquiry Button (Right) */}
                    <div className="hidden md:flex items-center">
                        <Link
                            to="/contact"
                            className="bg-slate-900 text-white px-6 py-2 rounded-full font-medium hover:bg-slate-700 transition-colors duration-300 shadow-md"
                        >
                            Enquire Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden backdrop-blur-md bg-white/90 border-t border-slate-200 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-slate-900 bg-slate-100'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center mt-4 bg-slate-900 text-white px-6 py-2 rounded-full font-medium hover:bg-slate-700 transition-colors duration-300 shadow-md"
                        >
                            Enquire Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
