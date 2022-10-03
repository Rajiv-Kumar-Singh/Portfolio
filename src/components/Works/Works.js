import React, { useState, useEffect } from 'react'


import '../../styles/Works/Works.scss'

import data from '../../data'

import '../../Animation/animation'
import ProjectCard from '../ProjectCard';

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

    if (useScrollPosition() > 500) {
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
                    <div className="works__grid">
                        <div className="works__grid-container">
                            {data.portfolio.projectCard.cards.map((content) => (
                                <ProjectCard key={content.heading} cardContent={content} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Works