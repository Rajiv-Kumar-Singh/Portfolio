import React from 'react'

import '../styles/ProjectCard.scss'

// import angleDown from '../assets/images/icons/angle-down.svg'

const ProjectCard = (props) => {

    return (
        <>
            <div className="project-card" data-aos='fade-down' data-aos-delay={props.cardContent.animationDelay}>
                <div className="project-card__container">
                    <div className="project-card__header">
                        <h3>{props.cardContent.heading}</h3>
                    </div>
                    <p className="project-card__description">
                        {props.cardContent.description}
                    </p>
                    {/* <div className="project-card__header-arrow">
                        <img src={angleDown} alt="icon" />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ProjectCard