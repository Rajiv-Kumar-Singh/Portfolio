import React, { useState, useEffect } from 'react'

// Importing TagCloud for  3D Rotating Text Sphere 
import TagCloud from 'TagCloud'

import '../../styles/Skill/Skill.scss'

const Skill = () => {

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
        const heading = document.getElementById('skill__heading');
        heading.classList.add('skill__heading')
    }

    // Animation settings for Text Cloud 

    useEffect(() => {
        return () => {
            const container = '.tagcloud';
            const texts = [
                'HTML', 'CSS', 'SASS', 'JavaScript',
                'React', 'Vue', 'NodeJS', 'Shopify',
                'Jquery', 'ES6', 'GIT', 'GITHUB'
            ];

            const options = {
                radius: 230,
                maxSpeed: 'normal',
                initSpeed: 'normal',
                keep: true
            };

            TagCloud(container, texts, options);
        }
    }, []);


    return (
        <>
            <div className="skill">
                <div className="skill__main-container">
                    <div className="skill__header" id='skill__heading' >
                        <h1 data-aos='fade-down' data-aos-delay='0' data-aos-offset="20">Skill.</h1>
                    </div>
                    <div className="skill__inner-container">
                        <div className="skill__info">
                            <div className="skill__skill-tags">
                                <span>HTML</span>&nbsp;&nbsp;
                                <span>PUG</span>&nbsp;&nbsp;
                                <span>CSS</span>&nbsp;&nbsp;
                                <span>SASS</span>&nbsp;&nbsp;
                                <span>Javascript</span>&nbsp;&nbsp;
                                <span>JQuery</span>
                            </div>
                            <div className="skill__details-container">
                                <div className="skill__details">
                                    <h4>Frameworks & Libraries</h4>
                                    <ul>
                                        <li><span>React JS</span></li>
                                        <li><span>Vue.js</span></li>
                                    </ul>
                                </div>
                                <div className="skill__details">
                                    <h4>Version Control Systems</h4>
                                    <ul>
                                        <li><span>GIT</span></li>
                                    </ul>
                                </div>
                                <div className="skill__details">
                                    <h4>E-Commerce</h4>
                                    <ul>
                                        <li><span>Shopify</span></li>
                                    </ul>
                                </div>
                                <div className="skill__details">
                                    <h4>Server Side</h4>
                                    <ul>
                                        <li><span>Node.js</span></li>
                                        <li><span>Express.js</span></li>
                                        <li><span>MongoDB</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="skill__cloud">
                            <span className='tagcloud'></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill