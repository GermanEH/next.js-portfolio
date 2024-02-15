'use client'

import {useState, useEffect} from 'react'
import { SectionProps } from './Card'

const About:React.FC<SectionProps> = ({dictionary}) => {
  const [isVisible, setIsVisible] = useState(false);
  // const {section_1_body_1, section_1_body_2, section_1_body_3} = dictionary
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 380);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div className={`absolute lg:max-w-5xl lg:w-full p-4 lg:mt-40 ml-8 z-20 transition-opacity opacity-${isVisible ? '100' : '0'} duration-1000`}>
        <p className='pb-4 px-20'>{dictionary?.section_1_body_1}</p>
        <p className='pb-4 px-20'>{dictionary?.section_1_body_2}</p>
        <h3 className='pb-4 px-20'>{dictionary?.section_1_body_subtitle}</h3>
        <ul className='pb-4 px-20'>
          <li>✅ React JS, Typescript, and React Native</li>
          <li>✅ Node and Express JS</li>
          <li>✅ PostgreSQL and Mongo DB</li>
          <li>✅ Also some experience in Vue.js</li>
        </ul>
        <p className='pb-4 px-20'>{dictionary?.section_1_body_7}</p>
        <p className='pb-4 px-20'>{dictionary?.section_1_body_8}</p>
      </div>
    </>
  );
}
export default About