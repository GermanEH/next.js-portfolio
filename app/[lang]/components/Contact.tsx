'use client'

import {useState, useEffect} from 'react'

export default function Contact({handleClickedState}:any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div className={`absolute lg:max-w-5xl lg:w-full p-4 lg:mt-44 z-20 transition-opacity opacity-${isVisible ? '100' : '0'} duration-1000 grid grid-cols-2 items-center`}>
        <section className='flex flex-col justify-center items-center'>
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
          <div className="w-72 h-24 mb-2 flex flex-col justify-center items-center border dark:border-neutral-700 dark:bg-slate-900">
          <img></img>
            <p>Freelancer</p>
          </div>
        </section>
        <section className='flex flex-col justify-center items-center'>
        <h2 className="text-xl font-bold mb-4">Send a message</h2>
          <form className='flex flex-col justify-center items-center p-4'>
            <input type="text" placeholder="Email" className='p-2 m-4 rounded text-black' />
            <input type="text" placeholder="Full Name" className='p-2 m-4 rounded text-black'/>
            <input type="text" placeholder="Subject" className='p-2 m-4 rounded text-black'/>
            <input type="text" placeholder="Message" className='p-2 m-4 rounded text-black'/>
            <button type="submit" className="mt-4 pt-2 pb-2 pl-8 pr-8 rounded-lg border dark:border-neutral-700 dark:bg-slate-900">Send</button>
          </form>
        </section>
      </div>
    </>
  );
}