import React, { useEffect } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faLinkedin,
//   faGithub,
//   faYoutube,
// } from '@fortawesome/free-brands-svg-icons';

import '../../styles/Hero/Hero.scss';

// import Coding from '../../assets/videos/coding.gif';
import sphere from '../../assets/videos/sphere.mp4'

const Hero = () => {
  useEffect(() => {
    const alphbets = document.getElementsByClassName('hero__alphabet');
    for (let i = 0; i <= alphbets.length; i++) {
      alphbets[i]?.addEventListener('animationend', function () {
        alphbets[i].classList.remove('alphabet-animated');
      });

      alphbets[i]?.addEventListener('mouseover', function () {
        alphbets[i].classList.add('alphabet-animated');
      });
    }

    // Speeding up video upon Hover 
    const video = document.querySelector('video');
    video.addEventListener('mouseover', function () {
      video.playbackRate = 2
      video.classList.add('hero__video')
    })
    video.addEventListener('mouseout', function () {
      video.playbackRate = 1
      video.classList.remove('hero__video')
    })

    // Adding parallax effect to video 
    const parallax = document.getElementById("parallax");
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset;
      parallax.style.top = offset * 0.5 + "px";
    });

    // return () => {
    // };
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__intro-box">
            <p className="hero__intro-title">
              <span className="hero__intro-line" data-aos="fade-down"></span>
              Hello, I am Rajiv
            </p>
            <p className="hero__animated-alphabet-box">
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                F
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                R
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                O
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                N
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                T
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                E
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                N
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                D
              </span>
              <span
                className="hero__developer-text"
                data-aos="zoom-out-down"
                data-aos-delay="1800"
              >
                <span className="hero__dev-text">Developer</span>
              </span>
            </p>
            <div
              className="hero__description"
              data-aos="fade"
              data-aos-delay="1800"
            >
              <p>
                I'm a passionate and responsible{' '}
                <span>front-end developer</span>, with more than 6 months of
                experience. Skilled in developing highly responsive websites and
                mobile apps with elegant and efficient code.
              </p>
            </div>

            <div className="hero__buttons">
              <a
                className="hero__know-btn"
                href="#about"
                data-aos="fade-down"
                data-aos-delay="1800"
              >
                Know more
              </a>
              <a
                className="hero__contact-btn"
                href="#contact"
                data-aos="fade-down"
                data-aos-delay="2000"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="hero__gif" id="parallax" data-aos="zoom-in" data-aos-delay="200">
            <video loop autoPlay muted>
              <source src={sphere} type="video/mp4"></source>
            </video>
          </div>
          {/* <div className="hero__background-text">
                        <h1>
                            <span className="hero__alphabet">F</span>
                            <span className="hero__alphabet">R</span>
                            <span className="hero__alphabet">O</span>
                            <span className="hero__alphabet">N</span>
                            <span className="hero__alphabet">T</span>
                            <span className="hero__alphabet">E</span>
                            <span className="hero__alphabet">N</span>
                            <span className="hero__alphabet">D</span>
                        </h1>
                        <h1>FRONTEND</h1>
                        <h1>FRONTEND</h1>
                    </div> */}
          {/* <div className="hero__text">
                        <h2>
                            <span>Dev</span>eloper <span className="hero__dot">.</span>
                        </h2>
                    </div> */}

          {/* Side Bar  */}
          {/* <div className="hero__sider-bar-container">
            <div
              className="hero__side-bar"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </div>
            <div
              className="hero__side-bar"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
            <div
              className="hero__side-bar"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
