'use client'

import {useState, useEffect} from 'react'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 380);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <>
      <div className={`absolute lg:max-w-5xl lg:w-full pl-20 pt-12 lg:mt-48 z-20 transition-opacity opacity-${isVisible ? '100' : '0'} duration-1000 flex flex-wrap `}>
       <div className='flex flex-col justify-content items-center'>
       <img src="/D&D_logo.jpg" height={'250px'} width={'250px'}/>
       <p className='mr-4 mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex flex-col justify-content items-center'>
        <img src="/D&D_logo.jpg" height={'250px'} width={'250px'}/>
        <p className='mr-4 mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex flex-col justify-content items-center'>
        <img src="/D&D_logo.jpg" height={'250px'} width={'250px'}/>
        <p className='mr-4 mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex flex-col justify-content items-center'>
        <img src="/D&D_logo.jpg" height={'250px'} width={'250px'}/>
        <p className='mr-4 mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
    </>
  );
}
