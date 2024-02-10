'use client'

import {useState, useEffect} from 'react'

export default function Projects({handleClickedState}:any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      {isVisible && (<div className="z-10 max-w-5xl w-full h-110 font-mono lg:flex" onClick={() => handleClickedState('isProjectsClicked')}>
        {/* <p className="text-8xl fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> */}
        <p className="text-4xl flex w-full justify-center lg:static lg:p-4 border rounded-lg border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
          &larr;
          Projects
        </p>
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div> */}
      </div>
      )}
    </>
  );
}
