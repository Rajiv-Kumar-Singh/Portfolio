import React, { useState, useEffect } from 'react'
import TagCloud from 'TagCloud'

import '../../styles/About/About.scss'

const About = () => {

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

    if (useScrollPosition() > 850) {
        const heading = document.getElementById('about__heading');
        heading.classList.add('about__heading')
    }

    // Adding 3D Text Sphere
    // useEffect(() => {
    //     const script = document.createElement('script');

    //     script.src = "https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js";
    //     script.async = true;

    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     }
    // }, []);

    // <TagCloud container={container} texts={texts} options={options} />


    useEffect(() => {
        const container = '.tagcloud';
        const texts = [
            '3D', 'TagCloud', 'JavaScript',
            'CSS3', '3D', 'TagCloud', 'JavaScript',
            'CSS3',
        ];
        const options = {
            radius: 230,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            keep: true
        };

        TagCloud(container, texts, options);
    }, []);
    return (
        <>
            <div className="about">
                <div className="about__container">
                    <div className="about__header" id='about__heading' >
                        <h1 data-aos='fade-down' data-aos-delay='0' data-aos-offset="20">About.</h1>
                        <p></p>
                    </div>

                    <span className="tagcloud"></span>
                </div>
            </div>
        </>
    )
}

export default About