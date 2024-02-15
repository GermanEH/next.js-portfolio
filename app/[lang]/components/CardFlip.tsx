import {ClickedState, HandleClickedState} from '../hooks/useClickedState'


interface CardFlipProps {
  title: string;
  subtitle: string;
  isClickedState: ClickedState;
  handleClickedState: HandleClickedState;
  clickedSection: string;
}

const CardFlip: React.FC<CardFlipProps> = ({title, subtitle, isClickedState, handleClickedState, clickedSection}) => {

  return (
    <>
                <div className={`preserve-3d perspective-1000 transform 
          ${((title === 'About me' || title === 'Sobre mí') && isClickedState.isAboutClicked) ? ' transform-about' : 
          ((title === 'Projects' || title === 'Proyectos') && isClickedState.isProjectsClicked) ? 'transform-projects' : 
          ((title === 'Contact' || title === 'Contacto') && isClickedState.isContactClicked) ? 'transform-contact' : '' } transition-transform duration-700 `}>
        <div className={`absolute group rounded-lg border border-transparent ${ (title === ('About me' || 'Sobre mí')) ? 'px-5 py-4' : 'pl-5 pr-24 pt-4 pb-8' } transition-colors hover:border-gray-300 hover:bg-gray-100 
          hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 backface-hidden 
          ${((title === 'About me' || title === 'Sobre mí') && isClickedState.isProjectsClicked) ? 'invisible opacity-0' : ''}
          ${((title === 'About me' || title === 'Sobre mí') &&  isClickedState.isContactClicked) ? 'invisible opacity-0' : ''}
          ${((title === 'Projects' || title === 'Proyectos') &&  isClickedState.isAboutClicked) ? 'invisible opacity-0' : ''}
          ${((title === 'Projects' || title === 'Proyectos') &&  isClickedState.isContactClicked) ? 'invisible opacity-0' : ''}
          ${((title === 'Contact' || title === 'Contacto') &&  isClickedState.isAboutClicked) ? 'invisible opacity-0' : ''}
          ${((title === 'Contact' || title === 'Contacto') &&  isClickedState.isProjectsClicked) ? 'invisible opacity-0' : ''}
          `} onClick={() => handleClickedState(clickedSection)}
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {title}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {subtitle}
          </p>
        </div>
        <div className={`absolute overflow-hidden font-mono
           backface-hidden rotate-y-180 rounded-[2px]
           dark:bg-slate-800`} onClick={() => handleClickedState(clickedSection)}>        
              <h2 className="text-4xl no-transform-about">
              &larr;
               {"  " + title }
              </h2>
              <div className="no-transform-about w-[230px] h-[200px]"></div>
        </div>
      </div>
    </>
  )
}

export default CardFlip