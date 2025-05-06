'use client';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
              <div className='pt-[80px] sm:pt-[81px] md:pt-[32px] lg:pt-[36px] xl:pt-[30px] 2xl:pt-[200px] sm:pb-0 pb-[50px] container mx-auto px-[24px] sm:px-0 w-full flex felx-center justify-center'>
                <div  className='grid grid-cols-1 items-center'>
                  <div className='flex items-center flex-col justify-center'>
                    <h2 className='tradines pt-2 sm:pt-0 text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[61px]  text-center px-[20%]'>Pioneering Intelligence Shaping the Future with Vision</h2>
                    <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[20px] !text-center'>Al consulting redefined with best visionary intelligence. We craft
                    tailored solutions to <br className='lg:block hidden'/> supercharge your digital transformation.</p>

                    <div className='flex items-center justify-center'>
                    <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center py-[9px] sm:py-[10px] md:py-[11px] lg:py-[12px] xl:py-[13px] 2xl:py-[14px] px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] group gap-[7.50px]'>
                    Free Consultation
                    </button>
                    </div>
                  </div>
                  <div className='relative'>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default HeroPage;