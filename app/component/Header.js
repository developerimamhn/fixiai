'use client';

import { useEffect, useRef } from "react";
import NavBar from './NavBar';
import HeroPage from './HeroPage';
import image1 from './image/backgroundimageheader.svg';
import Image from 'next/image';
import { gsap } from "gsap";    


const Header = () => {
    const svgRef = useRef(null);

    useEffect(() => {
      // Ensure GSAP runs only on the client-side
      if (typeof window === "undefined") return;
  
      const svg = svgRef.current;
      if (!svg) return; // Guard against null ref
  
      // Target SVG elements directly with querySelectorAll
      const verticalLines = svg.querySelectorAll(".vertical-lines path");
      const horizontalLines = svg.querySelectorAll(".horizontal-lines path");
      const rectangles = svg.querySelectorAll(".rect-1, .rect-2, .rect-3");
      const highlightLines = svg.querySelectorAll(
        ".highlight-line, .vertical-highlight"
      );
  
      // Animate vertical lines
      gsap.from(verticalLines, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
      });
  
      // Animate horizontal lines
      gsap.from(horizontalLines, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.5,
      });
  
      // Animate rectangles
      gsap.from(rectangles, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.3,
        delay: 1,
      });
  
      // Animate highlight lines
      gsap.fromTo(
        highlightLines,
        { opacity: 0.5 },
        {
          opacity: 1,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.2,
          delay: 1.5,
        }
      );
    }, []);
    return (
        <div className='relative overflow-hidden h-screen'>
            <Image className="w-full absolute top-0 left-0 z-[-2]" src={image1} alt="loading ..."/>
            {/* <svg className="w-2/5 absolute top-0 left-0 z-[-1]" viewBox="0 0 649 651" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_5_454)">
              <ellipse cx="60" cy="38" rx="130" ry="154" fill="#FF6035"/>
              </g>
              <defs>
              <filter id="filter0_f_5_454" x="-528.5" y="-574.5" width="1177" height="1225" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="229.25" result="effect1_foregroundBlur_5_454"/>
              </filter>
              </defs>
              </svg>
              <svg className="w-3/5 absolute top-1/2 -translate-y-1/2 left-[10%] z-[-1]" viewBox="0 0 1063 793" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6" filter="url(#filter0_f_5_457)">
              <ellipse cx="522.458" cy="307.264" rx="280.999" ry="114.058" transform="rotate(-34.6954 522.458 307.264)" fill="#FB6B43"/>
              </g>
              <defs>
              <filter id="filter0_f_5_457" x="-17.5868" y="-178.178" width="1080.09" height="970.884" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_5_457"/>
              </filter>
              </defs>
              </svg>
              <svg className="w-3/5 absolute top-0 right-0 z-[-1]" viewBox="0 0 868 804" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6" filter="url(#filter0_f_5_453)">
              <ellipse cx="675.5" cy="184" rx="375.5" ry="320" fill="#FB6B43"/>
              </g>
              <defs>
              <filter id="filter0_f_5_453" x="0" y="-436" width="1351" height="1240" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_5_453"/>
              </filter>
              </defs>
              </svg> */}
            <NavBar/>
            <HeroPage/>
        </div>
    );
};

export default Header;