import React, { useEffect, useState } from 'react';

export default function Farms() {
    // State to track screen width
    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 600);

    // Update screen width on resize
    useEffect(() => {
        const handleResize = () => {
            setIsScreenSmall(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className="farms">
            <div className="farms_title">
                <p className="farm_title">More About Our Farms . . .</p>
            </div>
            {!isScreenSmall && (
                <div className="farms_parent">
                    <div className="farms_img">
                        <img className="img_farmers" src="https://thursd.com/storage/media/53667/beautiful-white-roses-in-a-greenhouse.jpg" alt='farmers'></img>
                    </div>
                    <div className="farms_description">
                        <p className="farm_desc">We acquire our flowers from renowned farms, including Mahee, PJ Dave, Amor,
                            Black Petal, Tambuzi, Subati, Africolor, Primarosa, Blue Sky, etc.
                            These exceptional blooms are cultivated in modern greenhouses on the
                            slopes of the Great Rift Valley in Northern Kenya, situated at an altitude of
                            2,200 meters above sea level, contributing to the exceptional High quality flowers.</p>
                    </div>
                </div>
            )}
            {/* The following div is empty when the screen is below 600 pixels */}
            {isScreenSmall && (
                <div className="phones_parent">
                    <div className='planes_img'>
                        <img className='phone_img' src='https://thursd.com/storage/media/53667/beautiful-white-roses-in-a-greenhouse.jpg' alt='roses'></img>
                    </div>
                    <div className='phones_description'>
                        <p className="phones_desc">We acquire our flowers from renowned farms, including Mahee, PJ Dave, Amor,
                            Black Petal, Tambuzi, Subati, Africolor, Primarosa, Blue Sky, etc.
                            These exceptional blooms are cultivated in modern greenhouses on the
                            slopes of the Great Rift Valley in Northern Kenya, situated at an altitude of
                            2,200 meters above sea level, contributing to the exceptional High quality flowers.</p>
                    </div>
                </div>)}
        </div>
    );
}
