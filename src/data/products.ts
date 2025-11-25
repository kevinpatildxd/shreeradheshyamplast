import type { Product } from '../types/product';

export const categories = [
    "HDPE Bottle",
    "HDPE Jerry Can",
    "Packaging Jars",
    "Jerry Cans",
    "Toilet Cleaner Bottle",
    "Floor Cleaner Bottle",
    "Glass Bottle",
    "HDPE Jar",
    "Oil Can"
];

export const products: Product[] = [
    {
        id: '1',
        name: '100ml HDPE Bottle',
        category: 'HDPE Bottle',
        image: 'https://placehold.co/300x300?text=HDPE+Bottle',
        description: 'High quality HDPE bottle suitable for various liquids.'
    },
    {
        id: '2',
        name: '5L Jerry Can',
        category: 'HDPE Jerry Can',
        image: 'https://placehold.co/300x300?text=Jerry+Can',
        description: 'Durable 5L Jerry Can for industrial use.'
    },
    {
        id: '3',
        name: '500g Packaging Jar',
        category: 'Packaging Jars',
        image: 'https://placehold.co/300x300?text=Packaging+Jar',
        description: 'Wide mouth jar for powders and pastes.'
    },
    {
        id: '4',
        name: 'Toilet Cleaner Bottle',
        category: 'Toilet Cleaner Bottle',
        image: 'https://placehold.co/300x300?text=Toilet+Cleaner',
        description: 'Angled neck bottle for toilet cleaners.'
    },
    {
        id: '5',
        name: '1L Floor Cleaner',
        category: 'Floor Cleaner Bottle',
        image: 'https://placehold.co/300x300?text=Floor+Cleaner',
        description: 'Standard floor cleaner bottle.'
    },
    {
        id: '6',
        name: 'Glass Dropper Bottle',
        category: 'Glass Bottle',
        image: 'https://placehold.co/300x300?text=Glass+Bottle',
        description: 'Premium glass bottle with dropper.'
    },
    {
        id: '7',
        name: '1kg HDPE Jar',
        category: 'HDPE Jar',
        image: 'https://placehold.co/300x300?text=HDPE+Jar',
        description: 'Heavy duty HDPE jar.'
    },
    {
        id: '8',
        name: 'Engine Oil Can',
        category: 'Oil Can',
        image: 'https://placehold.co/300x300?text=Oil+Can',
        description: 'Robust can for engine oils.'
    },
];
