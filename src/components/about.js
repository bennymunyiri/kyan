import React, { useEffect, useState } from 'react';

export default function About() {
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
        <div className="abouts">
            <div className="abouts_title">
                <p className="farm_title">About Us</p>
            </div>
            {isScreenSmall ? (
                <div className="phone_about">
                    <p className="para">Kyan Export Limited is a reputable company that has been operating since January 2019
                        . With our rich history, we have developed expertise in establishing a reliable network of global
                        customers. We pride ourselves on fostering long-term, trusted partnerships, providing exceptional
                        services in delivering both small and large quantities of fresh cut flowers.</p>
                </div>
            ) : (
                <div className="about_us">
                    <p className="para">Kyan Export Limited is a reputable company that has been operating since January 2019
                        . With our rich history, we have developed expertise in establishing a reliable network of global
                        customers. We pride ourselves on fostering long-term, trusted partnerships, providing exceptional
                        services in delivering both small and large quantities of fresh cut flowers.</p>

                    <div className="location">
                        <div className="location maps">
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1555.5011061231896!2d36.91639012268632!3d-1.337846732794786!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2ske!4v1705859149643!5m2!1sen!2ske"
                                width="400"
                                height="300"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                        </div>
                        <div className="directions">
                            <div className="directions_title">
                                <p>Our Offices are located at Jomo Kenyatta International Airport. Agrotronics Building, second floor, Room 3.</p>
                            </div>
                        </div>
                    </div>

                </div>

            )}
        </div>
    );
}
