import React, { useEffect } from 'react';

// Importing TagCloud for  3D Rotating Text Sphere
import TagCloud from 'TagCloud';

import '../../styles/Skill/Skill.scss';

const Skill = () => {
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

  // if (useScrollPosition() > 850) {
  //   const heading = document.getElementById("skill__heading");
  //   heading.classList.add("skill__heading");
  // }

  // Animation settings for Text Cloud

  useEffect(() => {
    const container = '.tagcloud';
    let radii;
    const texts = [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'React',
      'Vue',
      'Nuxt',
      'NodeJS',
      'Shopify',
      'Jquery',
      'ES6',
      'GIT',
      'GITHUB',
    ];


    function radiusValue() {
      if (window.screen.width <= 778) {
        radii = 180;
      } else {
        radii = 250;
      }
      return radii;
    }

    const options = {
      radius: radiusValue(),
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    };

    return () => {
      TagCloud(container, texts, options);

    };
  }, []);

  return (
    <>
      <div className="skill">
        <div className="skill__main-container">
          <div className="skill__header" id="skill__heading">
            <h1>
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                K
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                I
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
          </div>
          <div className="skill__inner-container">
            <div className="skill__info">
              {/* <div className="skill__skill-tags">
                <span>HTML</span>&nbsp;&nbsp;
                <span>PUG</span>&nbsp;&nbsp;
                <span>CSS</span>&nbsp;&nbsp;
                <span>SASS</span>&nbsp;&nbsp;
                <span>Javascript</span>&nbsp;&nbsp;
                <span>JQuery</span>
              </div> */}
              <div className="skill__details-container">
                <div className="skill__details">
                  <h4>HTML / CSS</h4>
                  <ul>
                    <li>
                      <span>HTML5, CSS3</span>
                    </li>
                    <li>
                      <span>
                        <b>Preprocessors:</b> PUG, SASS
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>Modular:</b> BEM
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>JavaScript</h4>
                  <ul>
                    <li>
                      <span>
                        <b>Frameworks & Libraries:</b> &nbsp; React JS, React
                        Native, Vue.js, Nuxt
                      </span>
                    </li>
                    <li>
                      <span>ES5/ES6</span>
                    </li>
                    <li>
                      <span>Node.js</span>
                    </li>
                    <li>
                      <span>jQuery</span>
                    </li>
                    <li>
                      <span>Typescript</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Version Control Systems</h4>
                  <ul>
                    <li>
                      <span>GIT</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>E-Commerce</h4>
                  <ul>
                    <li>
                      <span>Shopify</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Server Side</h4>
                  <ul>
                    <li>
                      <span>Node.js</span>
                    </li>
                    <li>
                      <span>Express.js</span>
                    </li>
                    <li>
                      <span>MongoDB</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="skill__cloud">
              <span
                data-aos="zoom-in-up"
                data-aos-once="true"
                className="tagcloud"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
