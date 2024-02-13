'use client'

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

interface CardProps {
  isClickedState: any;
}

const CardsContent : React.FC<CardProps> = ({isClickedState}) => {
  return (
    <>
    {isClickedState.isAboutClicked ? <>
        <About/></> :
      isClickedState.isProjectsClicked ? <>
      <Projects/></> :
      isClickedState.isContactClicked ? <>
      <Contact/>
      </> : <></>
      }
    </>
  )
}

export default CardsContent