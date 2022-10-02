import React from 'react'

import '../../styles/Hero/Hero.scss'

const Hero = () => {

    // window.onload = function () {
    //     const alphbets = document.getElementsByClassName('hero__alphabet');
    //     for (let i = 0; i <= alphbets.length; i++) {
    //         alphbets[i].addEventListener('animationend', function () {
    //             alphbets[i].classList.remove('alphabet-animated');
    //         });

    //         alphbets[i].addEventListener('mouseover', function () {
    //             alphbets[i].classList.add('alphabet-animated')
    //         })
    //     }
    // };

    window.onload = function () {
        const alphbets = document.getElementsByClassName('hero__alphabet');
        for (let i = 0; i <= alphbets.length; i++) {
            alphbets[i]?.addEventListener('animationend', function () {
                alphbets[i].classList.remove('alphabet-animated');
            });

            alphbets[i]?.addEventListener('mouseover', function () {
                alphbets[i].classList.add('alphabet-animated')
            })
        }
    }

    // const alphabet = useRef();
    // useEffect(() => {
    //     const alphabetRef = alphabet.current;
    //     alphabetRef.addEventListener('animationend', function () {
    //         alphabetRef.classList.remove('alphabet-animated');
    //     });
    //     alphabetRef.addEventListener('mouseover', function () {
    //         alphabetRef.classList.add('alphabet-animated')
    //     })
    // }, [])

    return (
        <>
            <div className="hero">
                <div className="hero__container">
                    <div className="hero__background-text">
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
                    </div>
                    <div className="hero__text">
                        <h2><span>Dev</span>eloper <span>.</span></h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero