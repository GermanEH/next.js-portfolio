import Image from "next/image";
interface CV {
  CV: string
}
const Header = ({CV}:CV) => {
  return (
    <>
           <div className="max-w-5xl w-full flex justify-between items-center pb-20">
      <div className="flex place-items-center 
      before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] 
      after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"
      >
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/profile_photo_no_background.jpg"
          alt="profile photo"
          width={65.5}
          height={13.5}
          priority
        />
      <h2 className="ml-2 font-bold">Germán Horianski</h2>
      </div>
      <div>
        <a 
        href="/CV Germán Horianski (english).pdf" 
        target="_blank" 
        className="text-lg font-semibold" 
        rel="noopener noreferrer"><h2>{CV}</h2>
        </a>
      </div>
    </div>
    </>
  )
}

export default Header