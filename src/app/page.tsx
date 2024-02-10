'use client'

import Image from "next/image";
import {useState} from "react"
import HeroText from "./ui/HeroText";
import About from "./ui/About";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";

export default function Home() {

  interface MyState {
    [key: string]: boolean;
  }

  const [isClickedState, setClickedState] = useState<MyState>({
    isAboutClicked: false,
    isProjectsClicked: false,
    isContactClicked: false
  })

  const handleClickedState = (itemClicked: string) => {
    setClickedState(prevState => {
      const updatedState: MyState = {...prevState}
      for (const key in prevState) {
        if(key === itemClicked) {
          updatedState[key] = !prevState[key]
           } else {
          updatedState[key] = false
        }
      }
      return updatedState
    })
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10">
    <div className="max-w-5xl w-full flex justify-between items-center pb-20">
      <div className="flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
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
        rel="noopener noreferrer"><h2>Download CV</h2>
        </a>
      </div>
    </div>
      {isClickedState.isAboutClicked ? <>
        <About handleClickedState={handleClickedState}/></> :
      isClickedState.isProjectsClicked ? <>
      <Projects handleClickedState={handleClickedState}/></> :
      isClickedState.isContactClicked ? <>
      <Contact handleClickedState={handleClickedState}/>
      </> :
      <HeroText/>
      }

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transform 
          ${isClickedState.isAboutClicked ? ' transform-about preserve-3d perspective-1000 backface-hidden' : ''} transition-transform duration-1000
          ${isClickedState.isProjectsClicked ? 'invisible opacity-0' : ''}
          ${isClickedState.isContactClicked ? 'invisible opacity-0' : ''}
          `} onClick={() => handleClickedState('isAboutClicked')}
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About me{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about my academic background!
          </p>
        </a>

        <a
          className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transform 
          ${isClickedState.isProjectsClicked ? 'transform-projects preserve-3d perspective-1000 backface-hidden' : ''} transition-transform duration-1000
          ${isClickedState.isAboutClicked ? 'invisible opacity-0' : ''}
          ${isClickedState.isContactClicked ? 'invisible opacity-0' : ''}
          `} 
          onClick={() => handleClickedState('isProjectsClicked')}
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            See what I've built.
          </p>
        </a>

        <a
          className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 
          ${isClickedState.isContactClicked ? 'transform-contact preserve-3d perspective-1000 backface-hidden' : ''} transition-transform duration-1000
          ${isClickedState.isAboutClicked ? 'invisible opacity-0' : ''}
          ${isClickedState.isProjectsClicked ? 'invisible opacity-0' : ''}
          `} onClick={() => handleClickedState('isContactClicked')}
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Get in touch{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Let's connect!
          </p>
        </a>
      </div>
    </main>
  );
}
