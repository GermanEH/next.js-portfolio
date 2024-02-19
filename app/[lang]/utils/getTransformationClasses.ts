const getTransformationClasses = (title:string , isAboutClicked:boolean, isProjectsClicked:boolean, isContactClicked:boolean) => {
  if ((title === 'About me' || title === 'Sobre mí') && isAboutClicked) {
    return 'mobile-s:transform-about-mobile-s mobile-m:transform-about-mobile-m mobile-l:transform-about-mobile-l sm:transform-about-sm mobile-hd:transform-about-mobile-hd md:transform-about-md lg:transform-about-lg mobile-full-hd:transform-about-mobile-full-hd xl:transform-about-xl desktop-hd:transform-about-desktop-hd 2xl:transform-about-2xl desktop-full-hd:transform-about-desktop-full-hd';
  } else if ((title === 'Projects' || title === 'Proyectos') && isProjectsClicked) {
    return 'mobile-s:transform-projects-mobile-s mobile-m:transform-projects-mobile-m mobile-l:transform-projects-mobile-l sm:transform-projects-sm mobile-hd:transform-projects-mobile-hd md:transform-projects-md lg:transform-projects-lg mobile-full-hd:transform-projects-mobile-full-hd xl:transform-projects-xl desktop-hd:transform-projects-desktop-hd  2xl:transform-projects-2xl desktop-full-hd:transform-projects-desktop-full-hd';
  } else if ((title === 'Contact' || title === 'Contacto') && isContactClicked) {
    return 'mobile-s:transform-contact-mobile-s mobile-m:transform-contact-mobile-m mobile-l:transform-contact-mobile-l sm:transform-contact-sm mobile-hd:transform-contact-mobile-hd md:transform-contact-md lg:transform-contact-lg mobile-full-hd:transform-contact-mobile-full-hd xl:transform-contact-xl desktop-hd:transform-contact-desktop-hd 2xl:transform-contact-2xl desktop-full-hd:transform-contact-desktop-full-hd';
  } else {
    return '';
  }
};

export default getTransformationClasses