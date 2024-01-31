import React, { useState, useEffect } from 'react';
import { image1, image2, image3 } from '../index';

export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const sentences = [
        "Become a part of our growth story, and let's blossom together in a flourishing collaboration.",
        "Your satisfaction is our priority, ensuring a seamless experience from petal to recipient",
        "Dive into a world of beautiful blooms with our wide range of flowers. See our delightful products below"
    ];

    const images = [image1, image2, image3];

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (screenWidth > 600) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % sentences.length);
            }, 10000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [currentSlide, screenWidth, sentences.length]);

    return (
        <div className={screenWidth <= 600 ? "bannr" : "banner"}>
            {screenWidth <= 600 ? (
                <>
                    <img className="phn_img" src={images[currentSlide]} alt={`Mobile Banner ${currentSlide + 1}`} />
                    <p className='over'>{sentences[currentSlide]}</p>
                </>
            ) : (
                <>
                    <div className="banner_des">
                        {sentences.map((sentence, index) => (
                            <div
                                key={index}
                                className={`sentence ${index === currentSlide ? 'visible' : ''}`}
                            >
                                {sentence}
                            </div>
                        ))}
                    </div>
                    <div className='slide'>
                        <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    className={`image ${index === currentSlide ? 'zoom' : ''}`}
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                    src={image}
                                    alt={`banner ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
