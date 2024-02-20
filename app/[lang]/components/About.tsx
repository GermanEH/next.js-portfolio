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
      <div className={`absolute lg:max-w-5xl lg:w-full p-4 mt-[28vh] mobile-s:mt-[40vh] sm:mt-[52vh] mobile-hd:mt-[48vh] mobile-hd:px-[10vw] md:mt-[56vh] lg:mt-[34vh] xl:mt-[28vh] desktop-full-hd:mt-[34vh] ml-8 z-20 transition-opacity opacity-${isVisible ? '100' : '0'} duration-1000 mobile-s:max-xl:scale-[0.9]`}>
        <p className='pb-4 lg:px-20'>{dictionary?.section_1_body_1}</p>
        <p className='pb-4 lg:px-20'>{dictionary?.section_1_body_2}</p>
        <h3 className='pb-4 lg:px-20'>{dictionary?.section_1_body_subtitle}</h3>
        <ul className='pb-4 lg:px-20'>
          <li>✅ React JS, Typescript, and React Native</li>
          <li>✅ Node and Express JS</li>
          <li>✅ PostgreSQL and Mongo DB</li>
          <li>✅ Also some experience in Vue.js</li>
        </ul>
        <p className='pb-4 lg:px-20'>{dictionary?.section_1_body_7}</p>
        <p className='pb-4 lg:px-20'>{dictionary?.section_1_body_8}</p>
      </div>
    }
    </>
  );
}
export default About