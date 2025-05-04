"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from './image/logo.png';
import righticon from './image/righticon.png';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false); // For background styling
    const [isVisible, setIsVisible] = useState(true); // For show/hide
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Tracks scroll direction

    // Handle clicks outside to close the menu
    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Smooth scroll to section
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth",
            });
            setToggle(false);
        }
    };

    // Scroll logic for show/hide and background change
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Update scrolled state for background styling
            if (currentScrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Show/hide navbar based on scroll direction
            if (currentScrollPos < 50) {
                setIsVisible(true); // Show near the top
            } else if (currentScrollPos > prevScrollPos) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleScrollToTop   = (e, targetId) => {
        e.preventDefault();
        if (targetId === "") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      

    return (
        <div className={` header ${scrolled ? "scrolled" : " "}  w-full header backgronsdvg px-[24px] sm:px-0 pt-[20px] sm:pt-[24px] md:pt-[32px] lg:pt-[36px] xl:pt-[40px] 2xl:pt-[44px]  ${
            isVisible ? "translate-y-0 transition-transform duration-300" : "-translate-y-full transition-transform duration-300"
        }`}>
            
            <header className='px-[24px] container mx-auto  flex  justify-between items-center py-[10px] sm:py-[12px] lg:py-[14px] relative  sm:overflow-hidden backgroundimage  sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]'>
            <dev className='linersext absolute bottom-0 left-0 w-full h-[2px] z-10'></dev>
            <Link onClick={(e) => handleScrollToTop(e, "")} href='/' className='cursor-pointer flex items-center justify-start Froggo-Logo'>
                <Image className='w-full h-[24px] sm:h-[28px] 2xl:h-[34px]' src={logo} alt=''/></Link>
                <div className='sm:hidden relative top-[-11px] -left-6'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                 

                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:left-0 sm:relative duration-1000 z-[999] sm:opacity-100 flex justif-start sm:justify-center items-start sm:items-center gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[32px] xl:gap-[36px] 2xl:gap-[40px] sm:bg-transparent bg-[#15161B] sm:flex-row flex-col p-[20px] sm:p-[0] sm:w-fit w-full h-screen sm:h-full pl-[24px] sm:pl-[32px] md:pl-[36px] lg:pl-[40px] xl:pl-[48px] 2xl:pl-[60px]
                    ${toggle ? 'left-[0]' :'left-[120%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Aboutus" onClick={(e) => handleScroll(e, "Aboutus")}>
                    About us</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#OurServices" onClick={(e) => handleScroll(e, "OurServices")}>
                    Our Services </a>
                                        
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#CaseStudies" onClick={(e) => handleScroll(e, "CaseStudies")}>
                    Case Studies</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Industries" onClick={(e) => handleScroll(e, "Industries")}>
                    Industries</a>

                    <ul className='sm:hidden flex flex-col ml-atuo gap-4'>
                    <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[59px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px] w-[50px] md:w-[68px] lg:w-[84px] xl:w-[110px] 2xl:w-[136px] group gap-[7.50px]'>
                    Industries
                    </button>
                    </ul>
                </nav>
                
                <ul className='sm:flex hidden gap-4 '>
                    <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[59px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px] w-[50px] md:w-[68px] lg:w-[84px] xl:w-[110px] 2xl:w-[136px] group gap-[7.50px]'>
                    Industries
                    </button>
                </ul>
                
                
            </header>
            <div className='navbarunderborder'></div>
        </div>
    );
};

export default NavBar;