'use client'

import {useState, useEffect} from 'react'
import Image from "next/image";
import { SectionProps } from './Card'

const Projects:React.FC<SectionProps> = ({dictionary}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 380);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      {isVisible && 
      <div className={`absolute lg:max-w-5xl mobile-s:w-full pl-20 pt-12 mt-[28vh] 
      mobile-s:mt-[18vh] mobile-s:mr-[18vw] sm:mt-[36vh] mobile-m:mt-[12vh] mobile-m:mr-[10vw] mobile-l:max-sm:pl-[1vw] mobile-l:max-sm:mr-[0]
      sm:max-lg:ml-[20vw] sm:max-md:mt-[28vh] 
      mobile-hd:max-lg:pl-[16vw]
      desktop-hd:mt-[32] 
      lg:mt-[28vh] lg:pl-2 lg:max-2xl:ml-[20vw] lg:scale-[80%] 
      xl:mt-[24vh] xl:scale-[95%]
      2xl:mt-[28vh] 2xl:ml-[28vh]
      desktop-full-hd:mt-[28vh] desktop-full-hd:ml-[36vh]
      z-20 transition-opacity opacity-${isVisible ? '100' : '0'} duration-1000 flex flex-wrap 
      mobile-s:max-md:scale-75 `}>
       <div className='flex flex-col items-center'>
       <Image src="/D&D_logo.jpg" alt="project_image" height={250} width={250}/>
       <p className='mr-4 mt-4 mb-4 mobile-s:max-sm:mr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex flex-col items-center'>
        <Image src="/D&D_logo.jpg" alt="project_image" height={250} width={250}/>
        <p className='mr-4 mt-4 mb-4 mobile-l:max-sm:mr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex flex-col justify-content items-center'>
        <Image src="/D&D_logo.jpg" alt="project_image" height={250} width={250}/>
        <p className='mr-4 mt-4 mb-4 mobile-l:max-sm:mr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex flex-col justify-content items-center'>
        <img src="/D&D_logo.jpg" alt="project_image" height={250} width={250}/>
        <p className='mr-4 mt-4 mb-4 mobile-l:max-sm:mr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      }
    </>
  );
}

export default Projects