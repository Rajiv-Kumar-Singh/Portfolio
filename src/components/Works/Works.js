import React, { useState, useEffect } from 'react'


import '../../styles/Works/Works.scss'

const Works = () => {
    function useScrollPosition() {
        const [scrollPosition, setScrollPosition] = useState(0);

        useEffect(() => {
            const updatePosition = () => {
                setScrollPosition(window.pageYOffset);
            }
            window.addEventListener("scroll", updatePosition);
            updatePosition();

            return () => {
                window.removeEventListener("scroll", updatePosition);
            }

        }, []);

        return scrollPosition;
    };

    if (useScrollPosition() > 280) {
        const heading = document.getElementById('works__heading');
        heading.classList.add('works__heading')
    }

    return (
        <>
            <div className="works">
                <div className="works__container">
                    <div className="works__header" id='works__heading' >
                        <h1 data-aos='fade-down' data-aos-delay='0' data-aos-offset="20">WORKS.</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Works