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
      <div className={`absolute lg:max-w-5xl lg:w-full pl-20 pt-12 mt-[28vh] mobile-s:mt-[18vh] mobile-s:mr-[20vw] sm:mt-[36vh] mobile-m:mt-[12vh] mobile-m:mr-[10vw] mobile-hd:mt-[44vh] mobile-hd:ml-[15vw] md:mt-[56vh] lg:mt-[34vh] desktop-hd:mt-[32] xl:mt-[28vh] desktop-full-hd:mt-[34vh] z-20 transition-opacity opacity-${isVisible ? '100' : '0'} duration-1000 flex flex-wrap mobile-s:max-xl:scale-75 lg:max-xl:ml-[20vw] `}>
       <div className='flex flex-col justify-content items-center'>
       <Image src="/D&D_logo.jpg" alt="project_image" height={250} width={250}/>
       <p className='mr-4 mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex flex-col justify-content items-center'>
        <Image src="/D&D_logo.jpg" alt="project_image" height={250} width={250}/>
        <p className='mr-4 mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex flex-col justify-content items-center'>
        <Image src="/D&D_logo.jpg" alt="project_image" height={250} width={250}/>
        <p className='mr-4 mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex flex-col justify-content items-center'>
        <img src="/D&D_logo.jpg" alt="project_image" height={250} width={250}/>
        <p className='mr-4 mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      }
    </>
  );
}

export default Projects