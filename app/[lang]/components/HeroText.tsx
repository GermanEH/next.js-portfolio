
interface title {
  title_1: string;
  title_2: string
}
export default function HeroText({title_1, title_2}: title) {

  return (
    <>
      <div className="max-w-5xl w-full items-center font-mono lg:flex">
        {/* <p className="text-8xl fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> */}
        <p className="text-8xl left-0 top-0 flex w-full lg:static lg:w-auto p-4 mobile-hd:px-20 lg:px-28">
          {title_1}
        </p>
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div> */}
      </div>
      <div className="w-full max-w-5xl pb-16 mobile-hd:px-20">
        <p className="text-2xl w-full pl-28 lg:pl-48">{title_2}</p>
      </div>
    </>
  );
}
