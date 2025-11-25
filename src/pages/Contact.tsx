import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-ui py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center text-text-main mb-12">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div>
                        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                            <h2 className="text-2xl font-bold text-text-main mb-6">Get in Touch</h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="text-brand mr-3">📍</span>
                                    <p className="text-slate-600">
                                        123 Industrial Area, Phase 2,<br />
                                        Ahmedabad, Gujarat, India - 380001
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-brand mr-3">📞</span>
                                    <a href="tel:+919876543210" className="text-slate-600 hover:text-brand">+91 98765 43210</a>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-brand mr-3">✉️</span>
                                    <a href="mailto:info@shreeradheshyamplast.in" className="text-slate-600 hover:text-brand">info@shreeradheshyamplast.in</a>
                                </div>
                            </div>

                            <div className="mt-8 flex space-x-4">
                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-green-500 text-white py-2 px-4 rounded text-center hover:bg-green-600 transition-colors"
                                >
                                    WhatsApp
                                </a>
                                <a
                                    href="sms:+919876543210"
                                    className="flex-1 bg-blue-500 text-white py-2 px-4 rounded text-center hover:bg-blue-600 transition-colors"
                                >
                                    SMS
                                </a>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.958744038378!2d72.5074!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzAnMjYuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-text-main mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand sm:text-sm p-2 border"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand sm:text-sm p-2 border"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand sm:text-sm p-2 border"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-accent text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
