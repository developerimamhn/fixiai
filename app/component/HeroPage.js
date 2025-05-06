'use client';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import image1 from './image/image1 (2).png';


const HeroPage = () => {

  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Check if the screen width is greater than 768px (non-mobile)
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      // Animation for text elements
      gsap.from(textRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: 'power2.out',
      });

      // Animation for buttons
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Animation for image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });
    }
  }, []);


  const itemRefs = useRef([]);

  // GSAP animation effect
  useEffect(() => {
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1, // Delay between each item
          }
        );
      });
    }
  }, []);


    return (
        <div id="hero" ref={buttonRef} className='relative'>
          <div className='relative z-[2] overflow-hidden'>
              <div className='w-1/6 h-1/6 absolute right-[20%] top-1/2 -translate-y-1/2 -z-10 sm:block hidden rounded-[388px] opacity-[0.76] bg-[#03FC9E] blur-[200px]'></div>
              <div className='pt-[80px] sm:pt-[81px] md:pt-[100px] lg:pt-[150px] xl:pt-[200px] 2xl:pt-[250px] sm:pb-0 pb-[50px] container mx-auto px-[24px] sm:px-0 w-full flex felx-center justify-center'>
                <div  className='grid grid-cols-1 items-center'>
                  <div className='flex items-center flex-col justify-center'>
                    <h2 className='tradines pt-2 sm:pt-0 text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[61px]  text-center lg:px-[20%]'>Pioneering Intelligence Shaping the Future with Vision</h2>
                    <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[20px] !text-center'>Al consulting redefined with best visionary intelligence. We craft
                    tailored solutions to <br className='lg:block hidden'/> supercharge your digital transformation.</p>
                    <div className='sm:flex-row flex-col flex items-center justify-center pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px]'>
                      <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center py-[9px] sm:py-[10px] md:py-[11px] lg:py-[12px] xl:py-[13px] 2xl:py-[14px] px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] group gap-[7.50px]'>
                      Free Consultation
                      </button>
                      <div className='flex items-center justify-center'>
                        <Image className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[85px] mr-[11px] sm:mr-[12px] md:mr-[13px] lg:mr-[14px] xl:mr-[15px] 2xl:mr-[16px]' src={image1}/>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[19px]' viewBox="0 0 19 17" fill="none">
                          <path d="M9.5 14.237L13.8649 16.8458C14.6642 17.324 15.6424 16.6172 15.432 15.7233L14.2751 10.8174L18.1351 7.51216C18.8398 6.90932 18.4611 5.76599 17.5356 5.69324L12.4555 5.26709L10.4676 0.631427C10.11 -0.210476 8.88997 -0.210476 8.53237 0.631427L6.54451 5.25669L1.46443 5.68284C0.538871 5.7556 0.160232 6.89892 0.864921 7.50177L4.72494 10.807L3.56799 15.7129C3.35763 16.6068 4.33578 17.3136 5.13513 16.8355L9.5 14.237Z" fill="#FAD921"/>
                        </svg>
                        <span className='trustesss text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] md:ml-[4px] lg:ml-[8px]'>4.5 Trustsct:ye</span>
                      </div>
                    </div>
                    <p className='bowrerss text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[96px] 2xl:pt-[120px]'>Powered by</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default HeroPage;