import {ClickedState, HandleClickedState} from '../hooks/useClickedState'

interface CardFlipProps {
  title: string;
  subtitle: string;
  isClickedState: ClickedState;
  handleClickedState: HandleClickedState;
  clickedSection: string;
}

const CardFlip: React.FC<CardFlipProps> = ({title, subtitle, isClickedState, handleClickedState, clickedSection}) => {

  const { isAboutClicked, isProjectsClicked, isContactClicked } = isClickedState
  return (
    <>
      <div className={`preserve-3d perspective-1000 transform mt-20
          ${((title === 'About me' || title === 'Sobre mí') && isAboutClicked) ? ' mobile-s:transform-about-mobile-s mobile-m:transform-about-mobile-m mobile-l:transform-about-mobile-l sm:transform-about-sm mobile-hd:transform-about-mobile-hd md:transform-about-md lg:transform-about-lg mobile-full-hd:transform-about-mobile-full-hd xl:transform-about-xl 2xl:transform-about-2xl desktop-full-hd:transform-desktop-full-hd' : 
          ((title === 'Projects' || title === 'Proyectos') && isProjectsClicked) ? 'transform-projects sm:transform-projects-sm md:transform-projects-md lg:transform-projects-lg xl:transform-about-xl' : 
          ((title === 'Contact' || title === 'Contacto') && isContactClicked) ? 'transform-contact sm:transform-contact-sm md:transform-contact-md lg:transform-contact-lg xl:transform-about-xl' : '' } transition-transform duration-700 `}>
        <div className={`absolute group rounded-lg border border-transparent
        ${ (title === ('About me' || 'Sobre mí')) ? 'px-5' : 'pl-5 pr-24' } 
        ${ (isAboutClicked || isProjectsClicked || isContactClicked) ? 'py-0 pb-0 pt-0' : (title === ('About me' || 'Sobre mí')) ? 'py-4 pb-8' : 'pb-8 pt-4' }
        transition-colors hover:border-gray-300 hover:bg-gray-100 
          hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 backface-hidden 
          ${((title === 'About me' || title === 'Sobre mí') && (isProjectsClicked || isContactClicked)) ? 'hidden' : ''}
          ${((title === 'Projects' || title === 'Proyectos') &&  (isAboutClicked || isContactClicked)) ? 'hidden' : ''}
          ${((title === 'Contact' || title === 'Contacto') &&  (isAboutClicked || isProjectsClicked)) ? 'hidden' : ''}
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
           backface-hidden ${
              (title === 'About me' || title === 'Sobre mí') ? 'rotate-y-180-about sm:rotate-y-180-about-sm md:rotate-y-180-about-md lg:rotate-y-180-about-lg xl:rotate-y-180-about-xl' : 
              (title === 'Projects' || title === 'Proyectos') ? 'rotate-y-180-projects' : 
              (title === 'Contact' || title === 'Contacto') ? 'rotate-y-180-contact' : ''}  lg:rotate-y-180 rounded-[2px]
           dark:bg-slate-800`} onClick={() => handleClickedState(clickedSection)}>        
              <h2 className="text-4xl no-transform-about xl:relative xl:bottom-1">
              &larr;
               {"  " + title }
              </h2>
              <div className="no-transform-about w-auto h-56 sm:w-[16vw] sm:h-[16vh]"></div>
        </div>
      </div>
    </>
  )
}

export default CardFlip
