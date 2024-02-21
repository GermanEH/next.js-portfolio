'use client'

import {useState, useEffect} from 'react'
import { SectionProps } from './Card'

const Contact:React.FC<SectionProps> = ({dictionary}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 380);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
    {isVisible  && 
      <div className={`absolute lg:max-w-5xl lg:w-full ml-20 lg:ml-0 p-4 mt-[28vh] 
      mobile-s:mt-[24vh] mobile-s:mr-[20vw] 
      sm:mt-[40vh] sm:ml-[21vw] 
      mobile-hd:mt-[50vh] mobile-hd:ml-[25vw] 
      lg:mt-[32vh] lg:max-2xl:ml-[24vw]
      desktop-hd:mt-[26vh] 
      xl:mt-[24vh]
      2xl:mt-[28vh] 2xl:ml-[32vh]
      desktop-full-hd:mt-[28vh] desktop-full-hd:ml-[38vh]
      z-20 transition-opacity opacity-${isVisible ? '100' : '0'} duration-1000 items-center 
      lg:grid lg:grid-cols-2  items-center mobile-s:scale-75 sm:scale-[90%]`}>
        <section className='flex flex-col justify-center items-center sm:max-md:mt-[5vh]'>
          <div className="w-72 h-24 mb-2 flex flex-col justify-center items-center border dark:border-neutral-700 dark:bg-slate-900">
            <img src="/logo.png" height={'50px'} width={'50px'}></img>
            <p>Mar del Plata, Argentina</p>
          </div>
          <div className="w-72 h-24 mb-2 flex flex-col justify-center items-center border dark:border-neutral-700 dark:bg-slate-900">
          <img></img>
            <p>+5492236216726</p>
          </div>
          <div className="w-72 h-24 mb-2 flex flex-col justify-center items-center border dark:border-neutral-700 dark:bg-slate-900">
          <img></img>
            <p>germanhdev@gmail.com</p>
            </div>
        </section>
        <section className='flex flex-col justify-center items-center'>
        <h2 className="text-xl font-bold mt-16 mobile-s:mt-8 sm:mt-[10vh] lg:mt-0 mb-4">{dictionary?.section_3_body_1}</h2>
          <form className='flex flex-col justify-center items-center'>
            <input type="text" placeholder="Email" className='p-2 m-4 rounded text-black' />
            <input type="text" placeholder="Full Name" className='p-2 m-4 rounded text-black'/>
            <input type="text" placeholder="Subject" className='p-2 m-4 rounded text-black'/>
            <input type="text" placeholder="Message" className='p-2 m-4 rounded text-black'/>
            <button type="submit" className="mt-4 pt-2 pb-2 pl-8 pr-8 rounded-lg border dark:border-neutral-700 dark:bg-slate-900">Send</button>
          </form>
        </section>
      </div>
    }
    </>
  );
}

export default Contact