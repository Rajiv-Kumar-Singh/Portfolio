import React, { useRef, useEffect } from 'react'

import '../../styles/Header/Header.scss'
const Header = () => {

    const navLinkAbout = useRef();
    const navLinkWork = useRef();
    const navLinkContact = useRef();
    // window.onload = function () {
    //     const routee = document.getElementsByClassName('header__route');
    //     for (let i = 0; i <= routee.length; i++) {
    //         console.log(routee)
    //         console.log('hello')
    //         routee[i].addEventListener('mouseover', function () {
    //             routee[i].style.backgroundColor = '#ffffff';
    //         });
    //         console.log('hello')
    //     }
    //     console.log('hello')
    // };
    // window.onload = function () {
    // }

    useEffect(() => {
        const route = document.getElementsByClassName('header__route');
        for (let i = 0; i <= route.length; i++) {
            route[i]?.addEventListener('mouseover', function () {
                this.nextSibling.classList.add('header__route-bg-animation');
            });
            route[i]?.addEventListener('mouseout', function () {
                this.nextSibling.classList.remove('header__route-bg-animation');
            });

        }
    },)

    return (
        <>
            <div className='header'>
                <div className='header__container'>
                    <div className='header__logo'>
                        <span data-aos='fade-down' data-aos-delay='0'>P</span>
                        <span data-aos='fade-down' data-aos-delay='700'>o</span>
                        <span data-aos='fade-down' data-aos-delay='800'>r</span>
                        <span data-aos='fade-down' data-aos-delay='900'>t</span>
                        <span data-aos='fade-down' data-aos-delay='1000'>f</span>
                        <span data-aos='fade-down' data-aos-delay='1100'>o</span>
                        <span data-aos='fade-down' data-aos-delay='1200'>l</span>
                        <span data-aos='fade-down' data-aos-delay='1300'>i</span>
                        <span data-aos='fade-down' data-aos-delay='1400'>o</span>
                    </div>
                    <div className='header__nav-links'>
                        <ul>
                            <div className='header__nav-links-container'>
                                <li className='header__route' ref={navLinkAbout} data-aos='fade-down' data-aos-delay='0'>
                                    <a href='/'>About</a>
                                </li>
                                <div className='header__route-bg'></div>
                            </div>
                            <div className='header__nav-links-container'>
                                <li className='header__route' ref={navLinkWork} data-aos='fade-down' data-aos-delay='200'>
                                    <a href='/'>Works</a>
                                </li>
                                <div className='header__route-bg'></div>
                            </div>
                            <div className='header__nav-links-container'>
                                <li className='header__route' ref={navLinkContact} data-aos='fade-down' data-aos-delay='300'>
                                    <a href='/'>Contact me</a>
                                </li>
                                <div className='header__route-bg'></div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header