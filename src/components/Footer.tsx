import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from '../data/footerLinks';

const Footer: React.FC = () => {
    return (
        <footer className="bg-text-main text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand & Desc */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Shree Radheshyam Plast</h3>
                        <p className="text-slate-400">
                            Leading manufacturer and supplier of high-quality plastic packaging solutions.
                        </p>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        {link.path.startsWith('http') || link.path.startsWith('tel') || link.path.startsWith('mailto') ? (
                                            <a
                                                href={link.path}
                                                className="text-slate-400 hover:text-white transition-colors"
                                                target={link.path.startsWith('http') ? "_blank" : undefined}
                                                rel={link.path.startsWith('http') ? "noopener noreferrer" : undefined}
                                            >
                                                {link.name}
                                            </a>
                                        ) : (
                                            <Link to={link.path} className="text-slate-400 hover:text-white transition-colors">
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Shree Radheshyam Plast. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
