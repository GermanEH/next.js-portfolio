'use client'

import {useState, useEffect} from 'react'
import { SectionProps } from './Card'

const About:React.FC<SectionProps> = ({dictionary}) => {
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
      <div className={`absolute lg:max-w-5xl lg:w-full p-4 mt-[28vh] 
      mobile-s:mt-[40vh] mobile-s:pr-[10vw] 
      mobile-l:mt-[36vw] mobile-l:pl-[8vw] mobile-l:pr-[15vw] 
      sm:mt-[44vh] sm:pl-[12vw] 
      mobile-hd:px-[10vw]
      lg:mt-[30vh] lg:scale-[85%]
      xl:mt-[28vh] xl:scale-[95%] xl:px-2
      desktop-full-hd:mt-[32vh]
      2xl:mt-[30vh]
      ml-8 z-20 transition-opacity opacity-${isVisible ? '100' : '0'} duration-1000 
      mobile-s:max-xl:scale-[0.9]`}>
        <p className='pb-4'>{dictionary?.section_1_body_1}</p>
        <p className='pb-4'>{dictionary?.section_1_body_2}</p>
        <h3 className='pb-4'>{dictionary?.section_1_body_subtitle}</h3>
        <ul className='pb-4'>
          <li>{dictionary?.section_1_body_3}</li>
          <li>{dictionary?.section_1_body_4}</li>
          <li>{dictionary?.section_1_body_5}</li>
          <li>{dictionary?.section_1_body_6}</li>
        </ul>
        <p className='pb-4'>{dictionary?.section_1_body_7}</p>
        <p className='pb-4'>{dictionary?.section_1_body_8}</p>
      </div>
    }
    </>
  );
}
export default About