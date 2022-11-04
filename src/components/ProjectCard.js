import React from 'react'

import '../styles/ProjectCard.scss'

// import angleDown from '../assets/images/icons/angle-down.svg'

const ProjectCard = (props) => {

    return (
        <>
            <div className="project-card" data-aos='fade-up' data-aos-once="true" data-aos-delay={props.cardContent.animationDelay}>
                <div className="project-card__container">
                    <div className="project-card__header">
                        <h3>{props.cardContent.heading}</h3>
                    </div>
                    <div className="project-card__description">
                        <div className='project-card__description-content'>
                            <p>{props.cardContent.description}</p>
                            <a href="https://arduino-rv.herokuapp.com/" target="_blank" rel="noreferrer">{props.cardContent.buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard