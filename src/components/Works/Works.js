import React, { useEffect } from 'react';

import '../../styles/Works/Works.scss';

import data from '../../data';

// Importing child component
import ProjectCard from '../ProjectCard';

const Works = () => {
  // function useScrollPosition() {
  //   const [scrollPosition, setScrollPosition] = useState(0);

  //   useEffect(() => {
  //     const updatePosition = () => {
  //       setScrollPosition(window.pageYOffset);
  //     };
  //     window.addEventListener("scroll", updatePosition);
  //     updatePosition();

  //     return () => {
  //       window.removeEventListener("scroll", updatePosition);
  //     };
  //   }, []);

  //   return scrollPosition;
  // }

  // if (useScrollPosition() > 100) {
  //   const heading = document.getElementById("works__heading");
  //   heading.classList.add("works__heading");
  // }

  // Adding click functionality to Header of the cards
  useEffect(() => {
    return () => {
      const collapibleBar = document.getElementsByClassName(
        'project-card__header'
      );
      let i;
      for (i = 0; i < collapibleBar.length; i++) {
        collapibleBar[i].addEventListener('click', function () {
          const content = this.nextElementSibling;
          if (content.style.display === 'flex') {
            content.style.display = 'none';
            this.classList.remove('project-card__header--expanded');
          } else {
            content.style.display = 'flex';
            this.classList.add('project-card__header--expanded');
          }
        });
      }
    };
  }, []);

  return (
    <>
      <div className="works" id="work">
        <div className="works__container">
          <div className="works__header" id="works__heading">
            <h1 data-aos="fade-down">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                W
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                R
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                K
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
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
  );
};

export default Works;
