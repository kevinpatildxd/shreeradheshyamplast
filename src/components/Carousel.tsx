import React, { useState, useEffect } from 'react';

const images = [
    'https://placehold.co/1200x400?text=Premium+Packaging+Solutions',
    'https://placehold.co/1200x400?text=High+Quality+HDPE+Bottles',
    'https://placehold.co/1200x400?text=Industrial+Jerry+Cans',
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
