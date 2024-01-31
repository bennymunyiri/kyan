import React, { useState, useEffect } from 'react';
import { image1, image2, image3 } from '../index';

export default function Banner() {
    const [currentSentence, setCurrentSentence] = useState(0);
    const [showImage, setShowImage] = useState(true);
    const [currentText, setCurrentText] = useState('');
    const [textAnimationTimeout, setTextAnimationTimeout] = useState(null);
    const screenWidth = window.innerWidth;

    let sentences = [
        "Become a part of our growth story, and let's blossom together in a flourishing collaboration.",
        "Your satisfaction is our priority, ensuring a seamless experience from petal to recipient",
        "Dive into a world of beautiful blooms with our wide range of flowers. See our delightful products below"
    ];

    const images = [image1, image2, image3];

    useEffect(() => {
        if (screenWidth > 600) {
            const interval = setInterval(() => {
                setShowImage(false); // Hide image before changing sentence
                setTextAnimationTimeout(null); // Clear any existing text animation timeout
                setTimeout(() => {
                    setCurrentSentence((prev) => (prev + 1) % sentences.length);
                    setShowImage(true);
                }, 1000);
            }, 10000);

            return () => {
                clearInterval(interval);
                clearTimeout(textAnimationTimeout); // Clear the text animation timeout on component unmount
            };
        }
    }, [currentSentence, textAnimationTimeout, screenWidth]);

    useEffect(() => {
        let index = 0;
        const textInterval = setInterval(() => {
            setCurrentText((prevText) => sentences[currentSentence].slice(0, index + 1));
            index++;

            if (index === sentences[currentSentence].length) {
                clearInterval(textInterval);
            }
        }, 100);

        setTextAnimationTimeout(textInterval);

        return () => clearInterval(textInterval);
    }, [currentSentence]);

    if (screenWidth <= 600) {
        return <div className="bannr">
            <img className="phn_img" src={image1} />
            <p className='over'>Blossom with KyanExports.</p>
        </div>;
    }

    return (
        <div className="banner">
            <div className="banner_des">
                {sentences.map((sentence, index) => (
                    <div
                        key={index}
                        className={`sentence ${index === currentSentence ? 'visible' : ''}`}
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
                            className={`image ${index === currentSentence ? 'zoom' : ''}`}
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src={image}
                            alt={`Image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
