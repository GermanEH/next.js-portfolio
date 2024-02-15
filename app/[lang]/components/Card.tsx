'use client'

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import {ClickedState} from '../hooks/useClickedState'
export interface LangJSON {
  [key: string]: string;
}
export interface SectionProps {
  isClickedState?: ClickedState
  dictionary: LangJSON
}
const CardsContent : React.FC<SectionProps> = ({isClickedState, dictionary}) => {

  return (
    <>
    {isClickedState?.isAboutClicked ? <>
        <About dictionary={dictionary}/></> :
      isClickedState?.isProjectsClicked ? <>
        <Projects dictionary={dictionary}/></> :
      isClickedState?.isContactClicked ? <>
        <Contact dictionary={dictionary}/>
      </> : <></>
      }
    </>
  )
}

export default CardsContent