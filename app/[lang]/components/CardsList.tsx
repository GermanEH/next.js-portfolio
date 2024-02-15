'use client'

import CardFlip from "./CardFlip";
import useClickedState from '../hooks/useClickedState'
import { SectionProps } from "./Card";
import Card from './Card'

const CardsList:React.FC<SectionProps> = ({dictionary}) => {

  const { isClickedState, handleClickedState } = useClickedState();
  const {section_1_title, section_1_subtitle, section_2_title, section_2_subtitle, section_3_title, section_3_subtitle} = dictionary
  return (
    <>
      <Card isClickedState={isClickedState} dictionary={dictionary}/>
    <div className={`grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left pb-24`}>
      <CardFlip title={section_1_title} subtitle={section_1_subtitle} isClickedState={isClickedState} handleClickedState={handleClickedState} clickedSection={'isAboutClicked'}/>
      <CardFlip title={section_2_title} subtitle={section_2_subtitle} isClickedState={isClickedState} handleClickedState={handleClickedState} clickedSection={'isProjectsClicked'}/>
      <CardFlip title={section_3_title} subtitle={section_3_subtitle} isClickedState={isClickedState} handleClickedState={handleClickedState} clickedSection={'isContactClicked'}/>
    </div> 
    </>
  )
}

export default CardsList