'use client'

export default function HeroText() {
  
  return (
    <>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono lg:flex">
        {/* <p className="text-8xl fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> */}
        <p className="text-8xl fixed left-0 top-0 flex w-full justify-center lg:static lg:w-auto lg:p-4">
          I make
        </p>
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div> */}
      </div>
      <div className="w-full max-w-5xl pb-20">
        <p className="text-2xl fixed w-full ml-48">fast, solid, and performant front-end for a delightful user experience.</p>
    </div>
    </>
  );
}
