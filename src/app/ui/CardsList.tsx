import CardFlip from "./CardFlip";
interface CardsListProps {
    isClickedState: any;
    handleClickedState: any;
  }
const CardsList:React.FC<CardsListProps> = ({handleClickedState, isClickedState}) => {
  return (
    <div className={`grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left pb-20`}>
    <CardFlip title='About me' subtitle='Learn about my academic background!' isClickedState={isClickedState} handleClickedState={handleClickedState} clickedSection={'isAboutClicked'}/>
    <CardFlip title='Projects' subtitle="See what I've built." isClickedState={isClickedState} handleClickedState={handleClickedState} clickedSection={'isProjectsClicked'}/>
    <CardFlip title='Contact' subtitle="Let's connect!" isClickedState={isClickedState} handleClickedState={handleClickedState} clickedSection={'isContactClicked'}/>
  </div> 
  )
}

export default CardsList