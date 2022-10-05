import React, { useState, useEffect } from 'react'


import '../../styles/Works/Works.scss'

import data from '../../data'

// Importing child component 
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

    // Adding click functionality to Header of the cards 
    useEffect(() => {
        return () => {
            const collapibleBar = document.getElementsByClassName('project-card__header');
            let i;
            for (i = 0; i < collapibleBar.length; i++) {
                collapibleBar[i].addEventListener('click', function () {
                    var content = this.nextElementSibling
                    if (content.style.display === 'flex') {
                        content.style.display = 'none';
                        this.classList.remove('project-card__header--expanded');
                    } else {
                        content.style.display = 'flex';
                        this.classList.add('project-card__header--expanded');
                    }
                })
            }
        }
    }, [])

    return (
        <>
            <div className="works">
                <div className="works__container">
                    <div className="works__header" id='works__heading' >
                        <h1 data-aos='fade-down' data-aos-delay='0' data-aos-offset="0">WORKS.</h1>
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