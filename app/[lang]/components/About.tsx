'use client'

import {useState, useEffect} from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 380);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div className={`absolute lg:max-w-5xl lg:w-full p-4 lg:mt-48 ml-8 z-20 transition-opacity opacity-${isVisible ? '100' : '0'} duration-1000`}>
        <p>Looking for a React/React Native developer with experience in high demand work environment? Look no further! You reached the right place 🤩 
        With me in your team, you will have an analitic, commited, and strong client-oriented professional 💻💼 </p>
        <h3>Stack:</h3>
        <ul>
          <li>✅ React JS, and React Native</li>
          <li>✅ Node and Express JS</li>
          <li>✅ PostgreSQL</li>
          <li>✅ Mongo DB</li>
        </ul>
        <p>When I sat down to write my first lines of code I realized that software is the ideal oportunity to connect my love por creative and logic problem-solving, with my ambition of having a positive and meaningful impact on people's lives.</p>
        <h3>Main achievments:</h3>
        <p>During my studies at Henry, I lead the two developments projects by free choice of the respective teams, both with great outcomes.</p>
        <p>If you are looking for a developer with experience in high demand work enviroments, and with experience in development of IT projects, I am ideal for joining your team.</p>
        <p>Let's get in touch! 🤜🏼 🤛🏼 🚀</p>
      </div>
    </>
  );
}
