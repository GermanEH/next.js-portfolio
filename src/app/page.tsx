'use client'

import {useState} from "react"
import Header from './ui/Header'
import HeroText from "./ui/HeroText";
import About from "./ui/About";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";
import CardsList from "./ui/CardsList";

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
      <Header/>
      {isClickedState.isAboutClicked ? <>
        <About/></> :
      isClickedState.isProjectsClicked ? <>
      <Projects/></> :
      isClickedState.isContactClicked ? <>
      <Contact/>
      </> : <></>
      }
      <HeroText/>
      <CardsList handleClickedState={handleClickedState} isClickedState={isClickedState} />
    </main>
  );
}
