
"use client"

import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg'
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import { useEffect, useState } from 'react';

const images = [
    { image: burgerImg, alt: 'A delicious, juicy burger' },
    { image: curryImg, alt: 'A delicious, spicy curry' },
    { image: dumplingsImg, alt: 'Steamed dumplings' },
    { image: macncheeseImg, alt: 'Mac and cheese' },
    { image: pizzaImg, alt: 'A delicious pizza' },
    { image: schnitzelImg, alt: 'A delicious schnitzel' },
    { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlider() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex < images.length - 1 ? prevIndex + 1 : 0
            );
        }, 5000);

        return () => clearInterval(interval); // return in useEffect for cleanup 
    }, []);

    return (
        <>
            <div className="relative w-100 h-100 rounded-lg overflow-hidden shadow-[0_0_0.5rem_rgba(0,0,0,0.5)]">
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image.image}
                        className={`absolute object-cover top-0 left-0 transition-all duration-500 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                        alt={image.alt}
                    />
                ))}
            </div>
        </>
    )
}